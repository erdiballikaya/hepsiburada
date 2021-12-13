import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function getBasketListReducer(state=initialState.productsInBasket, action){
    switch (action.type) {
        case actionTypes.BASKET_LIST:
            return action.payload
        default:
            return state;
    }
}