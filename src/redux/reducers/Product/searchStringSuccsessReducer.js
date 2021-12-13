import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function searchStringSuccsessReducer(state=initialState.searchString, action){
    switch (action.type) {
        case actionTypes.SEARCH_STRING_SUCCSESS:
            return action.payload
        default:
            return state;
    }
}