export default {
    currentTag: {},
    currentTagList: [],
    tagColors: [],
    tagBrands: [],
    searchString: "Iphone",
    basket: localStorage.getItem("basketCount") === null ?  0 : localStorage.getItem("basketCount") ,
    productsInBasket: JSON.parse(localStorage.getItem("productsInBasket")) !== null ? JSON.parse(localStorage.getItem("productsInBasket")) : [],
}