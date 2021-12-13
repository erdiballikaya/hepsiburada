import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function searchStringReducer(state=initialState.searchString, action){
    switch (action.type) {
        case actionTypes.SEARCH_STRING:
            return action.payload
        default:
            return state;
    }
}