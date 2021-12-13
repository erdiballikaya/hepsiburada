import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActions from "../../redux/actions/basketActions";

class ProductsInCard extends Component {
    removeProduct(product) {
        console.log(this.props.productsInBasket)
        var basketList = this.props.productsInBasket;
        var removedList = basketList.filter(item => item.productID !== product.productID);
        var updatedBasketList = this.props.actions.addBasket(removedList);
        this.updateBasket(updatedBasketList.payload);
    }

    updateBasket(newProductsInBasket) {
        var currentBasketCount = newProductsInBasket.length;
        this.props.actions.increaseBasket(currentBasketCount)
        localStorage.setItem("productsInBasket", JSON.stringify(newProductsInBasket));
        console.log(this.props.productsInBasket)
    }

    componentDidMount() {
        this.props.actions.getBasket()
        this.props.actions.getBasketList();
    }

    render() {
        return (
            <div id="basket">
                {this.props.productsInBasket.map(product => (
                    <div className='productInBasket' key={product.productID}>
                        <div className='imgInBasket'>
                            <img src={product.img} alt={product.title} />
                        </div>
                        <div className='rightSide'>
                            <div className='productInfo'>{product.title}</div>
                            <button className='removeButton' onClick={() => this.removeProduct(product)} >
                                <span className='removeText'>Kaldır</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        basket: state.increaseBasketReducer,
        productsInBasket: state.getBasketListReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getBasket: bindActionCreators(basketActions.getBasket, dispatch),
            increaseBasket: bindActionCreators(basketActions.increaseBasket, dispatch),
            getBasketList: bindActionCreators(basketActions.getBasketList, dispatch),
            addBasket: bindActionCreators(basketActions.addBasket, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInCard);