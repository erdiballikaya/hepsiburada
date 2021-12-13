import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function increaseBasketReducer(state=initialState.basket, action){
    switch (action.type) {
        case actionTypes.INCREASE_BASKET:
            return action.payload
        default:
            return state;
    }
}