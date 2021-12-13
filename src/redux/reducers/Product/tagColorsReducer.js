import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function tagColorsReducer(state=initialState.tagColors, action){
    switch (action.type) {
        case actionTypes.TAG_COLORS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}