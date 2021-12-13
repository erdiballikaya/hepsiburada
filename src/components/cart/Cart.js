import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActions from "../../redux/actions/basketActions";

class Cart extends Component {
    componentDidMount() {
        this.props.actions.getBasket()
    }
    render() {
        return (    
                <div href="#" className="CartButton">
                    <span>Sepetim</span>
                    <span className="CartCircle">
                        <p className="CircleText">{this.props.basket}</p>
                    </span>
                </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        basket: state.increaseBasketReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getBasket: bindActionCreators(basketActions.getBasket, dispatch),
            increaseBasket: bindActionCreators(basketActions.increaseBasket, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);