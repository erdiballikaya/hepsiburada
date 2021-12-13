import * as actionTypes from './actionTypes'
import products from "../../productsData/products"

export function changeTag(tag) {
    return { 
        type: actionTypes.CHANGE_TAG, 
        payload: tag 
    }
}
export function tagCatergory(tag) {
    return {
        type: actionTypes.LIST_TAG,
        payload: tag
    }
}

export function getTagSuccess(tags) {
    return {
        type: actionTypes.GET_TAG_SUCCESS,
        payload: tags
    }
}
export function getTags() {
    var result = JSON.parse(localStorage.getItem("products")).phones;
    return getTagSuccess(result);
}

export function getTagsByKeyPress(key) {
    var result = JSON.parse(localStorage.getItem("products")).phones;
    var filtered =  result.filter(x => x.title.includes(key));
    return getTagSuccess(filtered);
}

export function lowestPrice(){
    var result = JSON.parse(localStorage.getItem("products")).phones;
    var sorted = result.sort((a, b) => {
        if (a.discountedprice < b.discountedprice){
          return -1
      } else if (a.discountedprice > b.discountedprice){
          return 1
      } else {
        return 0
      }
    });
    return getTagSuccess(sorted);
}

export function hihgestPrice(){
    var result = JSON.parse(localStorage.getItem("products")).phones;
    var sorted = result.sort((a, b) => {
        if (a.discountedprice > b.discountedprice){
          return -1
      } else if (a.discountedprice < b.discountedprice){
          return 1
      } else {
        return 0
      }
    });
    return getTagSuccess(sorted);
}

export function latest(){
    var result = JSON.parse(localStorage.getItem("products")).phones;
    var sorted = result.sort((a, b) => {
        if (a.createdDate > b.createdDate){
          return -1
      } else if (a.createdDate < b.createdDate){
          return 1
      } else {
        return 0
      }
    });
    return getTagSuccess(sorted);
}

export function oldest(){
    var result = JSON.parse(localStorage.getItem("products")).phones;
    var sorted = result.sort((a, b) => {
        if (a.createdDate < b.createdDate){
          return -1
      } else if (a.createdDate > b.createdDate){
          return 1
      } else {
        return 0
      }
    });
    return getTagSuccess(sorted);
}

export function filterByBrand(brand) {
    var result = JSON.parse(localStorage.getItem("products")).phones;
    var filtered = result.filter(x => x.brand == brand);
    return getTagSuccess(filtered);
}

export function filterByColor(color) {
    var result = JSON.parse(localStorage.getItem("products")).phones;
    var filtered = result.filter(x => x.color == color);
    return getTagSuccess(filtered);
}

export function searchString(str) {
    return {
        type: actionTypes.SEARCH_STRING,
        payload: str
    }    
}

export function searchStringSuccsess(str) {
    return {
        type: actionTypes.SEARCH_STRING_SUCCSESS,
        payload: str
    }    
}

export function getSearchString(str) {
    return searchStringSuccsess(str);
}

export function tagColors(tagColors) {
    return {
        type: actionTypes.TAG_COLORS,
        payload: tagColors
    }    
}

export function tagColorsSuccsess(tagColors) {
    return {
        type: actionTypes.TAG_COLORS_SUCCESS,
        payload: tagColors
    }    
}

export function getTagColors() {
    return tagColorsSuccsess(products.phones);
}

export function tagBrand(tagColors) {
    return {
        type: actionTypes.TAG_BRANDS,
        payload: tagColors
    }    
}

export function tagBrandSuccsess(tagColors) {
    return {
        type: actionTypes.TAG_BRANDS_SUCCESS,
        payload: tagColors
    }    
}

export function getTagBrands() {
    var brands = products.phones;
    return tagBrandSuccsess(brands);
}