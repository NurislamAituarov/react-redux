const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED",
        payload: newMenu,
    }
}
const menuRequested = () => {
    return {
        type: "MENU_REQUESTED",
    }
}
const addToCart = (id) => {
    return {
        type: "MENU_ADD_TO_CART",
        payload: id
    }
}
const deledFromCart = (id) => {
    return {
        type: "ITEM_REMOVE_FROM_CART",
        payload: id
    }
}
export {
    menuLoaded,
    menuRequested,
    addToCart,
    deledFromCart
}