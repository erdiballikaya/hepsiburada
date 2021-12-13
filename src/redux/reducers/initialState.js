export default {
    currentTag: {},
    currentTagList: [],
    tagColors: [],
    tagBrands: [],
    searchString: "Iphone",
    basket: localStorage.getItem("basketCount") === 0 ? localStorage.getItem("basketCount") : 0,
    productsInBasket:localStorage.getItem("productsInBasket") === 0 ? JSON.parse(localStorage.getItem("productsInBasket")) : [],
}