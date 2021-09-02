// ACTION CREATORS
import {
    SET_CART_DATA,
    EMPTY_CART,
} from "redux/actions/constants/action-types";

// ALL FUNCTIONS
export function setCartItem(cartDataArray) {
    return {
        type: SET_CART_DATA,
        payload: cartDataArray,
    };
}

export function emptyCart() {
    return {
        type: EMPTY_CART,
        payload: "user log out",
    };
}
