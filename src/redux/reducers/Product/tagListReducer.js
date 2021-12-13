import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function tagListReducer(state=initialState.currentTagList, action){
    switch (action.type) {
        case actionTypes.GET_TAG_SUCCESS:
            return action.payload
        default:
            return state;
    }
}