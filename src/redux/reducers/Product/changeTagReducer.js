import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function changeTagReducer(state=initialState.currentTag, action){
    switch (action.type) {
        case actionTypes.CHANGE_TAG:
            return action.payload
        default:
            return state;
    }
}
