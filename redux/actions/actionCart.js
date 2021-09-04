// ACTION CREATORS
import {
    SET_CART_ITEMS_DATA,
    SET_CART_DETAILS,
    EMPTY_CART,
    DELETE_CART_DATA,
} from "redux/actions/constants/action-types";

// ALL FUNCTIONS
export function setCartItem(cartDataArray) {
    return {
        type: SET_CART_ITEMS_DATA,
        payload: cartDataArray,
    };
}

export function setCartDetails(cartDetails) {
    return {
        type: SET_CART_DETAILS,
        payload: cartDetails,
    };
}

export function deleteCartItem(productId) {
    return {
        type: DELETE_CART_DATA,
        payload: productId,
    };
}

export function emptyCart() {
    return {
        type: EMPTY_CART,
        payload: "user log out",
    };
}
