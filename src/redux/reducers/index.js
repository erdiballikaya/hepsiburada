import {combineReducers} from "redux";
import changeTagReducer from "./Product/changeTagReducer";
import tagListReducer from "./Product/tagListReducer";
import increaseBasketReducer from "./Basket/increaseBasketReducer"
import getBasketListReducer from "./Basket/getBasketListReducer";
import searchStringReducer from "./Product/searchStringReducer";
import tagColorsReducer from "./Product/tagColorsReducer";
import tagBrandsReducer from "./Product/tagBrandsReducer";

const rootReducers = combineReducers({
    changeTagReducer,
    tagListReducer,
    increaseBasketReducer,
    getBasketListReducer,
    searchStringReducer,
    tagColorsReducer,
    tagListReducer,
    tagBrandsReducer
})

export default rootReducers;