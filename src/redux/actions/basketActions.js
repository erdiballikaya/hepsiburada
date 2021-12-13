import * as actionTypes from './actionTypes'

export function increaseBasket(basket) {
    localStorage.setItem("basketCount", basket);
    return { 
        type: actionTypes.INCREASE_BASKET, 
        payload: basket 
    }
}
export function getBasketSuccess(basket) {
    return {
        type: actionTypes.GET_BASKET_SUCCESS,
        payload: basket
    }
}
export function getBasket() {
    return getBasketSuccess(localStorage.getItem("basketCount"));
}

export function addBasket(product) {
    return { 
        type: actionTypes.BASKET_LIST, 
        payload: product
    }
}

export function listBasketSuccess(products) {
    return {
        type: actionTypes.BASKET_LIST_SUCCESS,
        payload: products
    }
}

export function getBasketList() {
    return listBasketSuccess(JSON.parse(localStorage.getItem("productsInBasket")));
}