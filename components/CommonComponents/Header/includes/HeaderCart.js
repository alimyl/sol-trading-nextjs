import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";

// nextjs - link
import Link from "next/link";
// nextjs - image
import Image from "next/image";

// bootstrap
import { Spinner } from "react-bootstrap";

// icons : feather
import FeatherIcon from "feather-icons-react";

// header styles
import headerStyles from "../styles/header.module.scss";

// react toastify
import { toast } from "react-toastify";

// no image
import noImgFoundImg from "public/images/no_image_big.jpg";

// APIs | cart
import { deleteCartItem as deleteCartItemAPI } from "utlis/Apis/Cart_API";

// actions
import {
    deleteCartItem,
    emptyCart,
    setCartDetails,
    setCartItem,
} from "redux/actions/actionCart";

// app messages
import {
    ERROR_WHILE__NAME,
    UNKNOWN_ERROR_OCCURED,
    DELETED_FROM_CART_SUCCESSFULLY,
    ERROR_WHILE_DELETING_PRODUCT_TO_CART,
} from "utlis/AppMessages/AppMessages";

function HeaderCart(props) {
    // consts
    const {
        commonToken,
        currentUser,

        setCartItem,
        setCartDetails,

        cartItems,
        cartDetails,

        deleteCartItem,
        emptyCart,
    } = props;

    // states
    const [cartLoading, setCartLoading] = useState(false);

    // handle delete cart item
    const handleDelete = (ev, item) => {
        ev.preventDefault();

        // enable loading
        setCartLoading(true);

        if (item) {
            // deleting cart data
            deleteCartItemAPI(commonToken, item)
                .then((res) => {
                    console.log("resData from deleteCartItemAPI ", res);
                    const resData = res.data;

                    // disabling loading
                    setCartLoading(false);

                    // if request succesfull
                    if (resData && resData.success) {
                        // deleting item from the global state
                        // deleteCartItem(cartId);

                        // const cartData = resData.data;
                        // let cartItems = [];

                        // // generating items
                        // cartData?.content.forEach((item) =>
                        //     cartItems.push({
                        //         cart_id: item.cart_id,
                        //         combinations: item.combinations,
                        //         price: item.price * item.quantity,
                        //         product_id: item.product_id,
                        //         product_name: item.product_name,
                        //         quantity: item.quantity,
                        //         sku: item.sku,
                        //         temp_order_id: item.temp_order_id,
                        //         user_id: item.user_id,
                        //     })
                        // );

                        // // saving items to global store
                        // setCartItem(cartItems);
                        // setCartDetails({
                        //     cart_items: cartData.cart_items,
                        //     cart_qty: cartData.cart_qty,
                        //     cart_total: cartData.cart_total,
                        // });

                        // dismissing all the previous toasts first
                        toast.dismiss();

                        // showing the error message
                        toast.success(DELETED_FROM_CART_SUCCESSFULLY, {
                            autoClose: 2500,
                            onClose: () => {},
                        });
                    }

                    // if request is not succesfull
                    if (resData && resData.error) {
                        // dismissing all the previous toasts first
                        toast.dismiss();

                        // showing the error message
                        toast.error(ERROR_WHILE_DELETING_PRODUCT_TO_CART, {
                            autoClose: 3000,
                            onClose: () => {},
                        });
                    }
                })
                .catch((err) => {
                    console.log(
                        `${ERROR_WHILE__NAME} saveToCart `,
                        err.message
                    );

                    // dismissing all the previous toasts first
                    toast.dismiss();

                    // showing the error message
                    toast.error(UNKNOWN_ERROR_OCCURED, {
                        autoClose: 3000,
                        onClose: () => {
                            // disabling loading
                            setCartLoading(false);
                        },
                    });
                });
        }
    };

    // handle delete cart item
    const handleEmptyCart = (ev) => {
        ev.preventDefault();
        emptyCart();
    };

    return (
        <div className={`${headerStyles["cart-container"]} position-absolute`}>
            <div className={`${headerStyles["cart_inner"]} st-bg-light-gray`}>
                {cartItems?.length ? (
                    <React.Fragment>
                        {/* listing */}
                        <div className={headerStyles["cart_listing"]}>
                            <div className={headerStyles.inner}>
                                {/* item */}
                                {cartItems.map((item) => (
                                    <div
                                        key={item.product_id}
                                        data-key={item.product_id}
                                        className="item"
                                    >
                                        <div className="item-inner d-flex border-bottom p-2">
                                            {/* img */}
                                            <Link href="/home">
                                                <a className="img">
                                                    {item.imgPath ? (
                                                        <Image
                                                            alt=""
                                                            src={item.imgPath}
                                                            width={70}
                                                            height={70}
                                                        />
                                                    ) : (
                                                        <Image
                                                            alt=""
                                                            src={noImgFoundImg}
                                                            width={70}
                                                            height={70}
                                                        />
                                                    )}
                                                </a>
                                            </Link>
                                            {/* details */}
                                            <div className="details media-body d-flex ps-2 ps-lg-3">
                                                <p className="name media-body">
                                                    <Link href="/home">
                                                        <a className="text-decoration-none st-fs-14 st-fw-600 st-text-dark mb-2">
                                                            {item.product_name}
                                                            <span className="st-fw-400 d-block st-fs-12 st-text-light my-1">
                                                                <b>SKU: </b>{" "}
                                                                {item.sku}
                                                            </span>
                                                        </a>
                                                    </Link>
                                                    <span className="quantity d-block st-fs-12 st-fw-400 st-text-light mb-1">
                                                        Qty: {item.quantity}
                                                    </span>
                                                    {/* <span className="quantity d-block st-fs-12 st-fw-400 st-text-light mb-1">
                                                                Color: {item.color}
                                                            </span> */}
                                                </p>

                                                <p className="price st-fs-14 st-fw-600 st-text-dark d-flex align-items-center align-self-start ps-2">
                                                    <span>${item.price}</span>
                                                    <FeatherIcon
                                                        icon="trash-2"
                                                        size="15"
                                                        title="Delete"
                                                        className="position-relative text-danger cursor-pointer ms-2"
                                                        onClick={(ev) =>
                                                            handleDelete(
                                                                ev,
                                                                item
                                                            )
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* bottom sec */}
                        <div className="hcc_bottom-sec">
                            {/* sub total */}
                            <div className="sub-total d-flex st-fw-700 st-text-light border-top border-bottom p-3">
                                <p className="head">Sub Total</p>
                                <p className="total ms-auto">
                                    ${cartDetails?.cart_total ?? 0}
                                </p>
                            </div>

                            {/* buttons */}
                            <div className="sub-total st-fw-700 st-text-light border-bottom p-3">
                                <div className="top d-flex mb-2">
                                    <button className="st-btn w-50 st-fs-13 st-fw-700 text-uppercase no-min-width me-1">
                                        Save Quote
                                    </button>
                                    <Link href="/cart">
                                        <a className="st-btn w-50 st-fs-13 st-fw-700 st-btn-primary text-uppercase no-min-width text-center ms-1">
                                            checkout
                                        </a>
                                    </Link>
                                </div>

                                <button
                                    className="st-btn w-100 st-fs-13 st-fw-700 text-uppercase no-min-width"
                                    onClick={handleEmptyCart}
                                >
                                    empty cart
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <p className="no-item text-center py-3">cart is empty</p>
                )}
            </div>

            {
                // cart loading
                cartLoading && (
                    <div
                        className={`${headerStyles["cart-popup-loading"]} position-absolute d-flex justify-content-center pt-3`}
                    >
                        <Spinner animation="border" size="md" />
                    </div>
                )
            }
        </div>
    );
}

const getDataFromStore = (state) => {
    return {
        cartItems: state.cart.cartItems,
        cartDetails: state.cart.cartDetails,

        currentUser: state.auth.currentUser,
        commonToken: state.auth.commonToken,
    };
};

const dispatchActionsToProps = (dispatch) => {
    return {
        deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
        emptyCart: () => dispatch(emptyCart()),

        setCartItem: (bool) => dispatch(setCartItem(bool)),
        setCartDetails: (bool) => dispatch(setCartDetails(bool)),
    };
};

export default connect(getDataFromStore, dispatchActionsToProps)(HeaderCart);
