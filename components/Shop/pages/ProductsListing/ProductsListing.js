import React, { useState, useEffect, useCallback } from "react";

// redux
import { connect } from "react-redux";

// nextjs - link
import Link from "next/link";
// nextjs - image
import Image from "next/image";
// nextjs - router
import { useRouter } from "next/router";

// bootstrap
import { Container, Accordion, Card, Col, Spinner } from "react-bootstrap";

// icons : feather
import FeatherIcon from "feather-icons-react";

// products styles
import productsStyles from "../../styles/products.module.scss";

// react toastify
import { toast } from "react-toastify";

// APIs products
import { getProducts } from "utlis/Apis/Products_API";

// cart
import { saveToCart } from "utlis/Apis/Cart_API";

// no image
import noImgFoundImg from "public/images/no_image_big.jpg";

// breadcrumbs
import BreadCrumbs from "components/CommonComponents/BreadCrumbs";

// actions
import { setCartDetails, setCartItem } from "redux/actions/actionCart";

// app messages
import {
    ERROR_WHILE__NAME,
    UNKNOWN_ERROR_OCCURED,
    ERROR_WHILE_FETCHING_PRODUCTS,
    ADDED_TO_CART_SUCCESSFULLY,
    ERROR_WHILE_SAVING_PRODUCT_TO_CART,
} from "utlis/AppMessages/AppMessages";

function ProductsListing(props) {
    // consts
    const router = useRouter();
    const { categoryId, id } = router.query;
    const { commonToken, currentUser, setCartItem, setCartDetails } = props;

    // states
    const [currentRoute, setCurrentRoute] = useState({}); // { routeName: 'name of the route', routeUrl: 'url of the route' }
    const [currentRouteArray, setCurrentRouteArray] = useState([]); // [{ routeName: 'name of the route', routeUrl: 'url of the route' }]

    const [allProducts, setAllProducts] = useState([]);
    const [allProductsLoading, setAllProductsLoading] = useState(false);

    const [buttonLoadingId, setButtonLoadingId] = useState("");
    const [allButtonsDisabled, setAllButtonsDisabled] = useState(false);

    const [currentSortingOrder, setCurrentSortingOrder] = useState(false);

    // function to get categories
    const getProductsByCategory = useCallback(() => {
        if (commonToken) {
            const URLParams = "category_id=" + id + "&limit=20";
            // enabling loading
            setAllProductsLoading(true);

            // getting data
            getProducts(commonToken, URLParams)
                .then((res) => {
                    const resData = res.data;
                    // console.log("resData ", resData);

                    // disabling loading
                    setAllProductsLoading(false);

                    // scroll the page to the top
                    window.scrollTo(0, 0);

                    // if request succesfull
                    if (resData && resData.success) {
                        setAllProducts(resData.data);
                    }

                    // if request is not succesfull
                    if (resData && resData.error) {
                        // dismissing all the previous toasts first
                        toast.dismiss();

                        // showing the error message
                        toast.error(ERROR_WHILE_FETCHING_PRODUCTS, {
                            autoClose: 3000,
                            onClose: () => { },
                        });
                    }
                })
                .catch((err) => {
                    console.log(
                        `${ERROR_WHILE__NAME} getProducts `,
                        err.message
                    );

                    // dismissing all the previous toasts first
                    toast.dismiss();

                    // showing the error message
                    toast.error(UNKNOWN_ERROR_OCCURED, {
                        autoClose: 2500,
                        onClose: () => {
                            // disabling loading
                            setAllProductsLoading(false);
                        },
                    });
                });
        }
    }, [id, commonToken]);

    // getting products
    useEffect(() => {
        getProductsByCategory();
    }, [getProductsByCategory]);

    // breadcrumbs generating
    useEffect(() => {
        // if there's only single level category
        if (categoryId) {
            // setting current route
            setCurrentRoute({
                routeName: categoryId,
                sku: categoryId,
                routeUrl: "/products/" + categoryId + "?id=" + id,
            });

            // emptying all routes array
            setCurrentRouteArray([]);
        }
    }, [categoryId, id]);

    // add to cart button hadling
    const handleAddToCartButtonClick = (ev, selectedProduct) => {
        ev.preventDefault();
        // setting id of the current loading button
        setButtonLoadingId(selectedProduct.product_id);
        setAllButtonsDisabled(true);

        (function () {
            const cartItemToSave = {
                combinations: selectedProduct.combinations ?? "",
                price: selectedProduct.price,
                product_id: selectedProduct.product_id,
                product_name: selectedProduct.product_name,
                quantity: 1,
                sku: selectedProduct.sku,
                temp_order_id: currentUser?.tempOrderId,
                user_id: currentUser?.userId ?? null,
            };

            // getting data
            saveToCart(commonToken, cartItemToSave)
                .then((res) => {
                    console.log("resData from saveToCart ", res);
                    const resData = res.data;

                    // disabling loading
                    setButtonLoadingId("");

                    // if request succesfull
                    if (resData && resData.success) {
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

                        // dismissing all the previous toasts first
                        toast.dismiss();

                        // showing the error message
                        toast.success(ADDED_TO_CART_SUCCESSFULLY, {
                            autoClose: 3000,
                            onClose: () => {
                                // enabling all buttons
                                setAllButtonsDisabled(false);
                            },
                        });
                    }

                    // if request is not succesfull
                    if (resData && resData.error) {
                        // dismissing all the previous toasts first
                        toast.dismiss();

                        // showing the error message
                        toast.error(ERROR_WHILE_SAVING_PRODUCT_TO_CART, {
                            autoClose: 3000,
                            onClose: () => {
                                // enabling all buttons
                                setAllButtonsDisabled(false);
                            },
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
                            // disabling loading and ennabling buttons
                            setButtonLoadingId("");
                            setAllButtonsDisabled(false);
                        },
                    });
                });
        })();
    };

    const manageSortingOrder = (ev, order) => {
        ev.preventDefault();

        if (order === "asc") {
            setCurrentSortingOrder("asc");
        } else {
            setCurrentSortingOrder("desc");
        }
    };

    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs
                currentRouteSingle={currentRoute ?? currentRoute}
                currentRouteArray={currentRouteArray ?? currentRouteArray}
            />

            {/* product listing */}
            <section
                id={productsStyles["st-products-listing-wrapper"]}
                className="st-def-mar-B"
            >
                <Container>
                    <div
                        className={`${productsStyles["st-products-listing"]} d-flex`}
                    >
                        {/* left sec */}
                        <div className={`${productsStyles["spl_lt"]}`}>
                            <div
                                className="inner position-sticky pe-3"
                                style={{ top: 0 }}
                            >
                                {/* item */}
                                <Accordion
                                    defaultActiveKey="0"
                                    className="mb-2"
                                >
                                    <Card className="rounded-0 border-0">
                                        {/* head */}
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            variant="link"
                                            eventKey="0"
                                            className="st-fs-16 d-flex rounded-0 border-0 bg-transparent cursor-pointer mb-1 px-0"
                                        >
                                            <span className="st-fw-700 st-text-light media-body pr-2">
                                                Accessories
                                            </span>
                                            <FeatherIcon
                                                icon="plus"
                                                size="15"
                                                className="icon ms-auto mt-1"
                                            />
                                        </Accordion.Toggle>

                                        {/* body */}
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="p-0">
                                                <div className="st-checkbox-container">
                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            Accessories
                                                        </span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            Ash Catchers
                                                        </span>
                                                    </label>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                {/* ITEM */}
                                <Accordion
                                    defaultActiveKey="0"
                                    className="mb-2"
                                >
                                    <Card className="rounded-0 border-0">
                                        {/* head */}
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            variant="link"
                                            eventKey="0"
                                            className="st-fs-16 d-flex rounded-0 border-0 bg-transparent cursor-pointer mb-1 px-0"
                                        >
                                            <span className="st-fw-700 st-text-light media-body pr-2">
                                                Brand
                                            </span>
                                            <FeatherIcon
                                                icon="plus"
                                                size="15"
                                                className="icon ms-auto mt-1"
                                            />
                                        </Accordion.Toggle>

                                        {/* body */}
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="p-0">
                                                <div className="st-checkbox-container">
                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            Krave
                                                        </span>
                                                    </label>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                {/* ITEM */}
                                <Accordion
                                    defaultActiveKey="0"
                                    className="mb-2"
                                >
                                    <Card className="rounded-0 border-0">
                                        {/* head */}
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            variant="link"
                                            eventKey="0"
                                            className="st-fs-16 d-flex rounded-0 border-0 bg-transparent cursor-pointer mb-1 px-0"
                                        >
                                            <span className="st-fw-700 st-text-light media-body pr-2">
                                                Price
                                            </span>
                                            <FeatherIcon
                                                icon="plus"
                                                size="15"
                                                className="icon ms-auto mt-1"
                                            />
                                        </Accordion.Toggle>

                                        {/* body */}
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="p-0">
                                                <div className="st-checkbox-container">
                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            $0.00 - $100.00
                                                        </span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            $100.00 - $199.00
                                                        </span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            $200.00 - $500.00
                                                        </span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            $500.00 - $1000.00
                                                        </span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            $1000.00 - $2000.00
                                                        </span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                        />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon"
                                                            />
                                                        </span>
                                                        <span className="text ps-3">
                                                            $1200.00 - Above
                                                        </span>
                                                    </label>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>

                        {/* right sec */}
                        <div
                            className={`${productsStyles["spl_rt"]} media-body ml-auto ps-3`}
                        >
                            <div className="inner">
                                {/* top filters */}
                                <div
                                    className={`${productsStyles["top-filters"]} mb-2`}
                                >
                                    <div className="inner d-flex">
                                        {/* left section */}
                                        <div
                                            className={`${productsStyles["tf_lt"]} d-flex`}
                                        >
                                            <p
                                                className="head st-fs-16 st-fw-700 st-text-light me-2 mb-1"
                                                style={{
                                                    width: 120,
                                                    paddingTop: 3,
                                                }}
                                            >
                                                Your Selection:
                                            </p>
                                            <div className="selected-filters d-flex flex-wrap media-body">
                                                {/* item */}
                                                <p
                                                    className={`${productsStyles["item"]} st-text-light d-flex align-items-center pe-2 mb-1`}
                                                >
                                                    <FeatherIcon
                                                        icon="x"
                                                        size="15"
                                                        className={`${productsStyles["icon"]} cursor-pointer st-text-dark app-title`}
                                                        data-title="Remove"
                                                        onClick={() =>
                                                            console.log(
                                                                "object"
                                                            )
                                                        }
                                                    />
                                                    <span className="ms-1">
                                                        Accessories
                                                    </span>
                                                </p>

                                                {/* item */}
                                                <p
                                                    className={`${productsStyles["item"]} st-text-light d-flex align-items-center pe-2 mb-1`}
                                                >
                                                    <FeatherIcon
                                                        icon="x"
                                                        size="15"
                                                        className={`${productsStyles["icon"]} cursor-pointer st-text-dark app-title`}
                                                        data-title="Remove"
                                                        onClick={() =>
                                                            console.log(
                                                                "object"
                                                            )
                                                        }
                                                    />
                                                    <span className="ms-1">
                                                        Batteires
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* right section */}
                                        <div className="tf_rt d-flex align-items-center ms-auto">
                                            <p
                                                className="head st-fs-16 st-fw-700 st-text-light me-2 mb-1"
                                                style={{ width: 65 }}
                                            >
                                                Sort By:
                                            </p>
                                            <div
                                                className={`${productsStyles["sorting-btns"]} d-flex`}
                                            >
                                                {/* btn */}
                                                <a
                                                    className={`${productsStyles[
                                                        "sorting-btn"
                                                    ]
                                                        } st-fs-16 st-fw-600 text-decoration-none border d-flex align-items-center justify-content-center cursor-pointer ${currentSortingOrder ===
                                                        "asc" &&
                                                        productsStyles["active"]
                                                        }`}
                                                    onClick={(ev) =>
                                                        manageSortingOrder(
                                                            ev,
                                                            "asc"
                                                        )
                                                    }
                                                >
                                                    <span className="me-1">
                                                        $
                                                    </span>
                                                    <FeatherIcon
                                                        icon="arrow-down"
                                                        size="15"
                                                        className="icon"
                                                    />
                                                </a>

                                                {/* btn */}
                                                <a
                                                    className={`${productsStyles[
                                                        "sorting-btn"
                                                    ]
                                                        } st-fs-16 st-fw-600 text-decoration-none border d-flex align-items-center justify-content-center ${currentSortingOrder ===
                                                        "desc" &&
                                                        productsStyles["active"]
                                                        }`}
                                                    onClick={(ev) =>
                                                        manageSortingOrder(
                                                            ev,
                                                            "desc"
                                                        )
                                                    }
                                                >
                                                    <span className="me-1">
                                                        $$$
                                                    </span>
                                                    <FeatherIcon
                                                        icon="arrow-up"
                                                        size="15"
                                                        className="icon"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* all products */}
                                <div
                                    className={`${productsStyles["all-products"]} d-flex flex-wrap`}
                                >
                                    {
                                        // loading
                                        allProductsLoading && (
                                            <React.Fragment>
                                                <Col
                                                    xs={12}
                                                    className="text-center"
                                                >
                                                    <Spinner animation="border" />
                                                </Col>
                                            </React.Fragment>
                                        )
                                    }

                                    {
                                        // all products
                                        allProducts?.length
                                            ? allProducts?.map((item) => (
                                                <Col
                                                    key={item.product_id}
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
                                                    lg={3}
                                                    className={`${productsStyles["st-product-item-in-prods"]} st-product-item`}
                                                >
                                                    <div className="inner text-center">
                                                        {/* image */}
                                                        <Link
                                                            href={{
                                                                pathname: `/product/${item.product_url}`,
                                                                query: {
                                                                    id: item.product_id,
                                                                },
                                                            }}
                                                        >
                                                            <a
                                                                className="product-img text-decoration-none d-flex align-items-center justify-content-center border p-2 overflow-hidden"
                                                                title={
                                                                    item.product_name
                                                                }
                                                            >
                                                                {item.imgPath ? (
                                                                    <Image
                                                                        alt=""
                                                                        src={
                                                                            item.imgPath
                                                                        }
                                                                        placeholder="blur"
                                                                        layout="intrinsic"
                                                                    />
                                                                ) : (
                                                                    <Image
                                                                        alt=""
                                                                        src={
                                                                            noImgFoundImg
                                                                        }
                                                                        placeholder="blur"
                                                                        layout="intrinsic"
                                                                    />
                                                                )}
                                                            </a>
                                                        </Link>
                                                        {/* details */}
                                                        <div className="product-details mt-2">
                                                            <div className="name">
                                                                <Link
                                                                    href={{
                                                                        pathname: `/product/${item.product_url}`,
                                                                        query: {
                                                                            id: item.product_id,
                                                                        },
                                                                    }}
                                                                >
                                                                    <a
                                                                        className="text-decoration-none st-text-light st-fw-600"
                                                                        title={
                                                                            item.product_name
                                                                        }
                                                                    >
                                                                        {
                                                                            item.product_name
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <p className="price st-fs-17 st-fw-600 mt-2">
                                                                ${item.price}
                                                            </p>
                                                            {item
                                                                ?.combinations
                                                                ?.length ? (
                                                                <Link
                                                                    href={{
                                                                        pathname: `/product/${item.product_url}`,
                                                                        query: {
                                                                            id: item.product_id,
                                                                        },
                                                                    }}
                                                                >
                                                                    <a
                                                                        className={`st-btn st-fw-700 text-uppercase mt-2`}
                                                                    >
                                                                        <span>
                                                                            add
                                                                            to
                                                                            cart
                                                                        </span>
                                                                    </a>
                                                                </Link>
                                                            ) : (
                                                                <button
                                                                    className={`st-btn st-fw-700 text-uppercase mt-2 
                                                                  ${(buttonLoadingId ===
                                                                            item.product_id ||
                                                                            allButtonsDisabled) &&
                                                                        "disabled"
                                                                        }`}
                                                                    onClick={(
                                                                        ev
                                                                    ) =>
                                                                        handleAddToCartButtonClick(
                                                                            ev,
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    {buttonLoadingId ===
                                                                        item.product_id ? (
                                                                        <Spinner
                                                                            animation="border"
                                                                            size="sm"
                                                                            className="position-relative"
                                                                            style={{
                                                                                top: 1,
                                                                            }}
                                                                        />
                                                                    ) : (
                                                                        <span>
                                                                            add
                                                                            to
                                                                            cart
                                                                        </span>
                                                                    )}
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))
                                            : !allProductsLoading && (
                                                <Col xs={12}>
                                                    <p className="text-center">
                                                        No products found
                                                    </p>
                                                </Col>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

const getDataFromStore = (state) => {
    return {
        cartItems: state.cart.cartItems,
        currentUser: state.auth.currentUser,
        commonToken: state.auth.commonToken,
    };
};

const dispatchActionsToProps = (dispatch) => {
    return {
        setCartItem: (bool) => dispatch(setCartItem(bool)),
        setCartDetails: (bool) => dispatch(setCartDetails(bool)),
    };
};

export default connect(
    getDataFromStore,
    dispatchActionsToProps
)(ProductsListing);
