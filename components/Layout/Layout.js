import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";

// header and footer
import Header from "components/CommonComponents/Header";
import Footer from "components/CommonComponents/Footer";

// react toastify
import { ToastContainer, Slide } from "react-toastify";

// bootstrap
import { Spinner } from "react-bootstrap";

// redux actions
import { setGlobalLoading } from "redux/actions/actionCommon";
import {
    saveCommonTokenToStore,
    saveCurrentUserToStore,
} from "redux/actions/actionAuth";
import { setCartDetails, setCartItem } from "redux/actions/actionCart";

// cart | api
import { getCartItems, cancelGetCartItemsApi } from "utlis/Apis/Cart_API";

// helpers | common
import {
    getFromLocalStorage,
    saveToLocalStorage,
} from "utlis/helpers/Common/CommonHelperFunctions";

function Layout(props) {
    // consts
    const TEMPRORY_ORDER_ID = "112UUID_KJD";
    const NEW_TEMPRORY_USER = {
        canExpire: true,
        email: "user@temprory.com",
        firstName: "temprory",
        lastName: "user",
        loggedOn: new Date(),
        tempOrderId: TEMPRORY_ORDER_ID,
        userId: "USID3",
        userToken: "usertoken.temprory.secure",
    };

    // props
    const {
        headerProps,
        footerProps,
        children,

        setGlobalLoading,
        globalLoading,

        saveCommonTokenToStore,
        saveCurrentUserToStore,

        setCartItem,
        setCartDetails,
    } = props;

    // initial page load
    useEffect(() => {
        // enabling global loading
        setGlobalLoading(true);

        // getting user details from the local storage
        const userFromLocalStorage = getFromLocalStorage("__uu_dd");

        // IF USER EXISTS IN LOCAL STORAGE
        if (userFromLocalStorage) {
            const userDetails = JSON.parse(userFromLocalStorage);

            // saving user details to global store
            saveCommonTokenToStore(userDetails.userToken);
            saveCurrentUserToStore(userDetails);

            // getting cart details
            getCartItems(userDetails.userToken, userDetails.tempOrderId)
                .then((res) => {
                    // disabling global loading
                    setGlobalLoading(false);

                    const resData = res.data;
                    console.log("cart items from getCartItems ", resData);

                    // if response in success
                    if (resData.success) {
                        const cartData = resData.data;
                        let cartItems = [];

                        // generating items
                        console.log("cartData ", cartData)
                        cartData?.content.forEach((item) =>
                            cartItems.push({
                                cart_id: item.cart_id,
                                combinations: item.combinations,
                                price: item.price,
                                totalPrice: item.price * item.quantity,
                                product_id: item.product_id,
                                product_name: item.product_name,
                                quantity: item.quantity,
                                sku: item.sku,
                                temp_order_id: item.temp_order_id,
                                user_id: item.user_id,
                            })
                        );

                        // saving items to global store
                        setCartItem(cartItems);
                        setCartDetails({
                            cart_items: cartData.cart_items,
                            cart_qty: cartData.cart_qty,
                            cart_total: cartData.cart_total,
                        });
                    }

                    // if response has errors
                    if (resData.error) {
                    }
                })
                .catch((err) => {
                    console.log("err while getting cart items", err);
                });
        } else {
            // IF USER DOESN'T IN LOCAL STORAGE,
            // then saving a temprory user in the local storage
            saveToLocalStorage("__uu_dd", NEW_TEMPRORY_USER);

            // saving user details to global store
            saveCommonTokenToStore(userDetails.userToken);
            saveCurrentUserToStore(userDetails);

            // getting cart details
            getCartItems(userDetails.userToken, userDetails.tempOrderId)
                .then((res) => {
                    // disabling global loading
                    setGlobalLoading(false);

                    const resData = res.data;
                    console.log("cart items from getCartItems ", resData);

                    // if response in success
                    if (resData.success) {
                        const cartData = resData.data;
                        let cartItems = [];

                        // generating items
                        cartData?.content.forEach((item) =>
                            cartItems.push({
                                cart_id: item.cart_id,
                                combinations: item.combinations,
                                price: item.price,
                                totalPrice: item.price * item.quantity,
                                product_id: item.product_id,
                                product_name: item.product_name,
                                quantity: item.quantity,
                                sku: item.sku,
                                temp_order_id: item.temp_order_id,
                                user_id: item.user_id,
                            })
                        );

                        // saving items to global store
                        setCartItem(cartItems);
                        setCartDetails({
                            cart_items: cartData.cart_items,
                            cart_qty: cartData.cart_qty,
                            cart_total: cartData.cart_total,
                        });
                    }
                    // if response has errors
                    if (resData.error) {
                    }
                })
                .catch((err) => {
                    console.log("err while getting cart items", err);
                });
        }

        return () => {
            // canceling get cart Items api
            cancelGetCartItemsApi && cancelGetCartItemsApi();
        };
    }, []);

    return (
        <React.Fragment>
            <div className="st-root-layout position-relative">
                <Header headerProps={headerProps} />

                {/* all comp data */}
                {children}

                <Footer footerProps={footerProps} />

                {/* toast */}
                <ToastContainer
                    transition={Slide}
                    hideProgressBar={true}
                    toastClassName="st-toast"
                    position="top-center"
                />

                {/* global loading */}
                {globalLoading ? (
                    <div className="st-global-loading d-flex align-items-center justify-content-center">
                        <Spinner
                            animation="border"
                            size="lg"
                            className="position-relative"
                            style={{
                                top: 1,
                            }}
                        />
                    </div>
                ) : null}
            </div>
        </React.Fragment>
    );
}

const getDataFromStore = (state) => {
    return {
        globalLoading: state.common.globalLoading,
    };
};

const dispatchActionsToProps = (dispatch) => {
    return {
        setGlobalLoading: (bool) => dispatch(setGlobalLoading(bool)),

        saveCommonTokenToStore: (token) =>
            dispatch(saveCommonTokenToStore(token)),
        saveCurrentUserToStore: (user) =>
            dispatch(saveCurrentUserToStore(user)),

        setCartItem: (items) => dispatch(setCartItem(items)),
        setCartDetails: (cartDetails) => dispatch(setCartDetails(cartDetails)),
    };
};
saveCommonTokenToStore;
export default connect(getDataFromStore, dispatchActionsToProps)(Layout);
