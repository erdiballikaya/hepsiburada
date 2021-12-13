import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function tagBrandsReducer(state=initialState.tagColors, action){
    switch (action.type) {
        case actionTypes.TAG_BRANDS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}