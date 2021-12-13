import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tagActions from "../../redux/actions/tagActions";
import * as basketActions from "../../redux/actions/basketActions";
import products from '../../productsData/products';

class ProductsComponent extends Component {

    constructor(){
        super();
        this.state = {
            arr: [],
            isHovered: {},
            isAdded: {},
            sliceStart: 0,
            sliceEnd: 12,
            currentPage: 1
        };
    
    }
    
    handleMouseEnter = index => {
        this.setState(prevState => {
            return { isHovered: { ...prevState.isHovered, [index]: true } };
        });
    };

    handleMouseLeave = index => {
        this.setState(prevState => {
            return { isHovered: { ...prevState.isHovered, [index]: false } };
        });
    };


    addedFunc = index => {
        this.setState(prevState => {
            return { isAdded: { ...prevState.isAdded, [index]: true } };
        });
    };

    addBasketList(product, index) {
        const isAdded = this.props.productsInBasket.filter(prdct => prdct.productID === product.productID);
        if (isAdded.length === 0) {
            this.addedFunc(index);
            var currentBasket = []
            currentBasket = this.props.productsInBasket;
            currentBasket.push(product);
            this.props.actions.addBasket(currentBasket);
            var currentBasketCount = this.props.productsInBasket.length;
            this.props.actions.increaseBasket(currentBasketCount)
            localStorage.setItem("productsInBasket", JSON.stringify(this.props.productsInBasket));
        }
    }
    
    changePagination(num){
        var pageNum = num.currentTarget.innerText;
        var newStart = (pageNum * 12) - 12;
        var newEnd = pageNum * 12;
        this.setState({sliceStart: newStart, sliceEnd: newEnd, currentPage: num})
    }

    nextPrevious(num){
        debugger
        var pageNum = num;
        var newStart = (pageNum * 12) - 12;
        var newEnd = pageNum * 12;
        this.setState({sliceStart: newStart, sliceEnd: newEnd, currentPage: num})
    }
    componentDidMount() {
        this.props.actions.getTags();
        this.props.actions.getBasket();
        this.props.actions.getBasketList();
    }
    

    render() {
        const { arr, isHovered, isAdded } = this.state;
        let menuItems = [];
        if(this.props.tags.length % 12 === 0){
            menuItems.push(<a href="#">1</a>);
        }
        else if(this.props.tags.length / 12 > 1){
            for (var i = 1; i <= parseInt((this.props.tags.length / 12) + 1); i++) {
                menuItems.push(<a href="#" className={i+"p"} onClick={i => this.changePagination(i)}>{i}</a>);
            }
        }

        return (
            <div className="Products">
                {this.props.tags.slice(this.state.sliceStart, this.state.sliceEnd).map((el, index) => (
                    <Child
                        onMouseEnter={() => this.handleMouseEnter(index)}
                        onMouseLeave={() => this.handleMouseLeave(index)}
                        clicked={() => this.addBasketList(el, index)}
                        product={el}
                        isHovering={isHovered[index]}
                        isAdd={isAdded[index]}
                        key={index}
                    />
                ))}
                <div className="pagination">
                    <a href="#" onClick={() => this.nextPrevious(this.state.currentPage != 1 ? this.state.currentPage - 1 : 1) }>{"<"}</a>
                    {    
                        menuItems
                    }
                    <a href="#" onClick={() => this.nextPrevious(this.state.currentPage != parseInt((this.props.tags.length / 12) + 1) ? this.state.currentPage + 1 : parseInt((this.props.tags.length / 12) + 1)) }>{">"}</a>
                </div>
            </div>
        )
    }

}
function Child({ onMouseEnter, onMouseLeave, clicked, product, isHovering, isAdd }) {
    return (
        <div className="Product" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="Image">
                <img alt={product.title} key={product.productID} src={product.img} />
            </div>

            <div className="ProductInfo">
                <div className="explanation">
                    <span className='title'>{product.title}</span>
                </div>
                {isHovering ?
                    <div className={isAdd ? "addToBasketPassive" : "addToBasket"} id={product.productID} onClick={!isAdd ? clicked : ""}>
                        {isAdd ?
                            <span className="basketButtonTextPassive" id={product.productID}>
                                Bu ürünü sepete ekleyemezsiniz.
                            </span>
                            :
                            <span className="basketButtonText" id={product.productID}>
                                Sepete Ekle
                            </span>
                        }

                    </div>
                    :
                    <div>
                        <div className="brandAndColor">
                            <div>
                                <span className="brandKey">Marka:</span> <span className="brandValue">{product.brand}</span>
                            </div>
                            <div>
                                <span className="brandKey">Renk:</span> <span className="brandValue">{product.color}</span>
                            </div>
                        </div>
                        <div className="priceInfo">
                            <div className="discountedPrice">{product.discountedprice} TL</div>
                            <div>
                                <span className="price">{product.price}</span> <span className="discountRate">{product.discountRate}</span>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );

}

function mapStateToProps(state) {
    return {
        currentTag: state.changeTagReducer,
        tags: state.tagListReducer,
        basket: state.increaseBasketReducer,
        productsInBasket: state.getBasketListReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getTags: bindActionCreators(tagActions.getTags, dispatch),
            changeTag: bindActionCreators(tagActions.changeTag, dispatch),
            getBasket: bindActionCreators(basketActions.getBasket, dispatch),
            increaseBasket: bindActionCreators(basketActions.increaseBasket, dispatch),
            getBasketList: bindActionCreators(basketActions.getBasketList, dispatch),
            addBasket: bindActionCreators(basketActions.addBasket, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);