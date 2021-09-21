// AXIOS
import axios from "axios";

// api url
import { apiUrl_forCart } from "./constants";

// cancel token
const CancelToken = axios.CancelToken;

// save to cart
export let cancelSaveToCartApi;
export async function saveToCart(token, data) {
    if (token) {
        const cartData = await axios.post(
            apiUrl_forCart,
            {
                temp_order_id: data.temp_order_id,
                product_id: data.product_id,
                quantity: data.quantity,
                mode: "add",
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
            {
                cancelToken: new CancelToken(function executor(c) {
                    // An executor function receives a cancel function as a parameter
                    cancelSaveToCartApi = c;
                }),
            }
        );
        return cartData;
    } else {
        console.log("Please add required parameters");
    }
}

// save to cart
export let cancelUpdateToCartApi;
export async function updateToCart(token, data) {
    if (token) {
        const cartData = await axios.put(
            apiUrl_forCart,
            {
                temp_order_id: data.temp_order_id,
                product_id: data.product_id,
                quantity: data.quantity,
                mide: "update",
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
            {
                cancelToken: new CancelToken(function executor(c) {
                    // An executor function receives a cancel function as a parameter
                    cancelUpdateToCartApi = c;
                }),
            }
        );
        return cartData;
    } else {
        console.log("Please add required parameters");
    }
}

// delte cart item
export let cancelGetCartItemsApi;
export async function getCartItems(token, tempOrderId) {
    if ((token, tempOrderId)) {
        const cartData = await axios.get(
            apiUrl_forCart + "?temp_order_id=" + tempOrderId,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cancelToken: new CancelToken(function executor(c) {
                    // An executor function receives a cancel function as a parameter
                    cancelGetCartItemsApi = c;
                }),
            }
        );
        return cartData;
    } else {
        console.log("Please add required parameters");
    }
}

// delte cart item
export let cancelDeleteCartItemApi;
export async function deleteCartItem(token, data) {
    console.log("delete data ", data);
    if (token && data) {
        const cartData = await axios.delete(
            apiUrl_forCart + data.cart_id + "/" + data.temp_order_id,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
            {
                cancelToken: new CancelToken(function executor(c) {
                    // An executor function receives a cancel function as a parameter
                    cancelDeleteCartItemApi = c;
                }),
            }
        );
        return cartData;
    } else {
        console.log("Please add required parameters");
    }
}
