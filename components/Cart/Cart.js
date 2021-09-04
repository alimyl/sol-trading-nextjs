import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";

// nextjs - link
import Link from "next/link";
// nextjs - image
import Image from "next/image";

// bootstrap
import { Spinner } from "react-bootstrap";

// bootstrap
import { Container } from "react-bootstrap";

// cart styles
import cartStyles from "./styles/cart.module.scss";

// common components
import BreadCrumbs from "components/CommonComponents/BreadCrumbs";

// icons : feather
import FeatherIcon from "feather-icons-react";

// react toastify
import { toast } from "react-toastify";

// helpers
import QuantitySelector from "utlis/helpers/QuantitySelector/QuantitySelector";

// no image
import noImgFoundImg from "public/images/no_image_big.jpg";

// APIs | cart
import {
    deleteCartItem as deleteCartItemAPI,
    updateToCart,
} from "utlis/Apis/Cart_API";

// actions
import {
    deleteCartItem,
    emptyCart,
    setCartItem,
    setCartDetails,
} from "redux/actions/actionCart";

// app messages
import {
    ERROR_WHILE__NAME,
    UNKNOWN_ERROR_OCCURED,
    DELETED_FROM_CART_SUCCESSFULLY,
    ERROR_WHILE_DELETING_PRODUCT_TO_CART,
    ADDED_TO_CART_SUCCESSFULLY,
    ERROR_WHILE_SAVING_PRODUCT_TO_CART,
} from "utlis/AppMessages/AppMessages";

function Cart(props) {
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
    const [currentRoute, setCurrentRoute] = useState({}); // { routeName: 'name of the route', routeUrl: 'url of the route' }
    const [cartLoading, setCartLoading] = useState(false);

    // breadcrumbs generating
    useEffect(() => {
        // setting current route
        setCurrentRoute({
            routeName: "Shopping Cart",
            sku: "cart",
            routeUrl: "/cart",
        });
    }, []);

    // get quantity
    const getQuantity = (action, value, item) => {
        console.log("value ", value);

        // updating api
        handleUpdate(action, item);
    };

    // handle delete cart item
    const handleDelete = (ev, item) => {
        ev.preventDefault();

        if (item) {
            // enable loading
            setCartLoading(true);

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
                        // deleteCartItem(item.cart_id);

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
                        `${ERROR_WHILE__NAME} deleteCartItemAPI `,
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
    const handleUpdate = (action, item) => {
        // enable loading
        setCartLoading(true);

        if (item) {
            const dataToBeAdded = {
                temp_order_id: item.temp_order_id,
                product_id: item.product_id,
                quantity:
                    action === "add" ? item.quantity + 1 : item.quantity - 1,
            };
            // deleting cart data
            updateToCart(commonToken, dataToBeAdded)
                .then((res) => {
                    console.log("resData from updateToCart ", res);
                    const resData = res.data;

                    // disabling loading
                    setCartLoading(false);

                    // if request succesfull
                    if (resData && resData.success) {
                        const cartData = resData.data;
                        let cartItems = [];

                        // generating items
                        cartData?.content.forEach((item) =>
                            cartItems.push({
                                cart_id: item.cart_id,
                                combinations: item.combinations,
                                price: item.price * item.quantity,
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

                        // dismissing all the previous toasts first
                        toast.dismiss();

                        // showing the error message
                        toast.success(ADDED_TO_CART_SUCCESSFULLY, {
                            autoClose: 2500,
                            onClose: () => {},
                        });
                    }

                    // if request is not succesfull
                    if (resData && resData.error) {
                        // dismissing all the previous toasts first
                        toast.dismiss();

                        // showing the error message
                        toast.error(ERROR_WHILE_SAVING_PRODUCT_TO_CART, {
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
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs currentRouteSingle={currentRoute ?? currentRoute} />

            {/* cart section */}
            <section id={cartStyles["cart-wrapper"]} className="st-def-mar-B">
                <Container>
                    <div className={`${cartStyles["cart"]} position-relative`}>
                        {/* heading */}
                        <div className="st-heading-wrapper heading-sm text-center">
                            <p className="st-heading text-capitalize">
                                Shopping Cart
                            </p>
                        </div>

                        <div className={`${cartStyles["cart-table"]}`}>
                            <div className="table-responsive st-common-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase st-fw-500">
                                                ITEM DETAIL
                                            </th>
                                            <th className="text-uppercase st-fw-500">
                                                QUANTITY
                                            </th>
                                            <th className="text-uppercase st-fw-500">
                                                PRICE
                                            </th>
                                            <th className="text-uppercase st-fw-500">
                                                TOTAL
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems?.length ? (
                                            <React.Fragment>
                                                {cartItems.map((item) => (
                                                    <tr key={item.product_id}>
                                                        <td valign="middle">
                                                            <div
                                                                className={`${cartStyles["product-details"]} d-flex align-items-center`}
                                                            >
                                                                {/* img */}
                                                                <div
                                                                    className={`${cartStyles["img-sec"]}`}
                                                                >
                                                                    {item.imgPath ? (
                                                                        <Image
                                                                            alt=""
                                                                            src={
                                                                                item.imgPath
                                                                            }
                                                                            placeholder="blur"
                                                                        />
                                                                    ) : (
                                                                        <Image
                                                                            alt=""
                                                                            src={
                                                                                noImgFoundImg
                                                                            }
                                                                            placeholder="blur"
                                                                        />
                                                                    )}
                                                                </div>

                                                                {/* text */}
                                                                <div
                                                                    className={`${cartStyles["text-sec"]} ps-2`}
                                                                >
                                                                    <p
                                                                        className={`${cartStyles["head"]} st-text-primary st-fs-18 st-fw-700 mb-1`}
                                                                    >
                                                                        {
                                                                            item.product_name
                                                                        }
                                                                    </p>
                                                                    <p
                                                                        className={`${cartStyles["desc"]} st-fs-14 st-fw-100 mb-0`}
                                                                    >
                                                                        SKU:{" "}
                                                                        {
                                                                            item.sku
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td valign="middle">
                                                            <div className="">
                                                                <QuantitySelector
                                                                    defaultValue={
                                                                        item.quantity
                                                                    }
                                                                    getQuantity={(
                                                                        action,
                                                                        value
                                                                    ) =>
                                                                        getQuantity(
                                                                            action,
                                                                            value,
                                                                            item
                                                                        )
                                                                    }
                                                                />

                                                                <p
                                                                    className="st-fw-600 st-fs-15 cursor-pointer mt-1 mb-0"
                                                                    onClick={(
                                                                        ev
                                                                    ) =>
                                                                        handleDelete(
                                                                            ev,
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    <FeatherIcon
                                                                        icon="x"
                                                                        size="15"
                                                                        className="icon"
                                                                    />
                                                                    <span
                                                                        className="position-relative ms-1"
                                                                        style={{
                                                                            top: 1,
                                                                        }}
                                                                    >
                                                                        Remove
                                                                        Item
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td valign="middle">
                                                            <p
                                                                className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                            >
                                                                ${item.price}
                                                            </p>
                                                        </td>
                                                        <td valign="middle">
                                                            <p
                                                                className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                            >
                                                                ${item.price}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                ))}

                                                <tr>
                                                    <td colSpan="2"></td>
                                                    <td>
                                                        <p className="st-fw-600 st-fs-17 mb-0">
                                                            Sub total
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="st-fs-17 mb-0">
                                                            $
                                                            {cartDetails?.cart_total ??
                                                                0}
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2"></td>
                                                    <td>
                                                        <p className="st-fw-600 st-fs-20 mb-0">
                                                            Order Total
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="st-fw-600 st-fs-20 mb-0">
                                                            $
                                                            {cartDetails?.cart_total ??
                                                                0}
                                                        </p>
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        ) : (
                                            <tr>
                                                <td colSpan={4}>
                                                    <p className="no-item text-center py-3">
                                                        cart is empty
                                                    </p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="btns mt-3">
                                <div className="inner d-flex flex-wrap align-items-center">
                                    <div className="lt">
                                        <button className="btn st-btn st-btn-secondary text-uppercase">
                                            empty cart
                                        </button>
                                    </div>
                                    <div className="rt ms-auto">
                                        <button className="btn st-btn st-btn-secondary text-uppercase me-2">
                                            save to quote
                                        </button>
                                        <button className="btn st-btn st-btn-primary text-uppercase">
                                            proceed to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            // cart loading
                            cartLoading && (
                                <div
                                    className={`${cartStyles["cart-popup-loading"]} position-absolute d-flex justify-content-center pt-3`}
                                >
                                    <Spinner animation="border" size="md" />
                                </div>
                            )
                        }
                    </div>
                </Container>
            </section>
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

export default connect(getDataFromStore, dispatchActionsToProps)(Cart);
