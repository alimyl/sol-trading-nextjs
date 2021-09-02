// ACTION CREATORS
import {
    SET_CART_DATA,
    EMPTY_CART,
} from "redux/actions/constants/action-types";

const initialState = {
    cartItem: [],
};

function catalogReducer(state = initialState, action) {
    if (action.type === SET_CART_DATA) {
        let qty;

        state.cartItem.foreach((item) => {
            if (item.product_id === action.payload.product_id) {
                qty = item.qty + 1;
            }
        });

        const dataNeeded = {
            product_id: action.payload.product_id,
            imgPath: action.payload.imgPath,
            product_name: action.payload.product_name,
            price: action.payload.price,
            combinations: action.payload.combinations || "",
            qty: qty ?? 1,
        };

        console.log("dataNeeded ", dataNeeded);
        return {
            ...state,
            cartItem: [...state.cartItem, dataNeeded],
        };
    }

    if (action.type === EMPTY_CART) {
        return {
            cartItem: [],
        };
    }
    return state;
}

export default catalogReducer;
