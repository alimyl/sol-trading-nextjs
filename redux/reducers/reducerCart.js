// ACTION CREATORS
import {
    SET_CART_ITEMS_DATA,
    SET_CART_DETAILS,
    EMPTY_CART,
    DELETE_CART_DATA,
} from "redux/actions/constants/action-types";

const initialState = {
    cartItems: [],
    cartDetails: null,
};

function catalogReducer(state = initialState, action) {
    if (action.type === SET_CART_ITEMS_DATA) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }

    if (action.type === SET_CART_DETAILS) {
        return {
            ...state,
            cartDetails: action.payload,
        };
    }

    if (action.type === DELETE_CART_DATA) {
        let copyOfCartItems = [...state.cartItems];

        let updatedData = copyOfCartItems.filter(
            (item) => item.cart_id !== action.payload
        );

        return {
            ...state,
            cartItems: [...updatedData],
        };
    }

    if (action.type === EMPTY_CART) {
        return {
            ...state,
            cartItems: [],
        };
    }
    return state;
}

export default catalogReducer;
