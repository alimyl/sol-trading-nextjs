import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";

// nextjs - image
import Image from "next/image";

// bootstrap
import { Container, Row, Col, Spinner } from "react-bootstrap";

// styles
import productViewStyles from "../../../styles/products.module.scss";

// icons : feather
import FeatherIcon from "feather-icons-react";

// helpers
import QuantitySelector from "utlis/helpers/QuantitySelector/QuantitySelector";

// products images
import productImg1 from "public/images/product-big/img1.jpg";
import productImg2 from "public/images/product-big/img2.jpg";
import productImg3 from "public/images/product-big/img3.jpg";

import VariationViewer from "./VariationViewer";

// react toastify
import { toast } from "react-toastify";

// API | cart
import { saveToCart, updateToCart } from "utlis/Apis/Cart_API";

// actions
import { setCartDetails, setCartItem } from "redux/actions/actionCart";

// Importing Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Importing Swiper core and required modules
import SwiperCore, { Thumbs, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Thumbs, Autoplay]);

// app messages
import {
    ERROR_WHILE__NAME,
    UNKNOWN_ERROR_OCCURED,
    ADDED_TO_CART_SUCCESSFULLY,
    ERROR_WHILE_SAVING_PRODUCT_TO_CART,
} from "utlis/AppMessages/AppMessages";

function ProductViewSingle(props) {
    // consts
    const {
        productDetails,
        variantMainFields,
        commonToken,
        currentUser,
        setCartItem,
        setCartDetails,
        getData,
    } = props;

    // states
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [cartItemQuantity, setCartItemQuantity] = useState(1);
    const [hasMinQuantity, setHasMinQuantity] = useState(null);
    const [hasMaxQuantity, setHasMaxQuantity] = useState(null);

    useEffect(() => {
        // if product have minumum quanity
        if (productDetails?.min_order_quantity > 0) {
            setHasMinQuantity(productDetails.min_order_quantity);
        }

        // if product have max quanity
        if (productDetails?.max_order_quantity > 0) {
            setHasMaxQuantity(productDetails.max_order_quantity);
        }
        return () => {};
    }, [productDetails]);

    // quantity seleced by the user
    const getQuantity = (value) => {
        console.log("value ", value);
        setCartItemQuantity(value);
    };

    // add to cart button hadling
    const handleAddToCartButtonClick = (ev, selectedProduct) => {
        ev.preventDefault();
        // enabling button loading
        setButtonLoading(true);

        (function () {
            const cartItemToSave = {
                combinations: selectedProduct.combinations ?? "",
                price: selectedProduct.price,
                product_id: selectedProduct.product_id,
                product_name: selectedProduct.product_name,
                quantity: cartItemQuantity,
                sku: selectedProduct.sku,
                temp_order_id: currentUser?.tempOrderId,
                user_id: currentUser?.userId ?? null,
            };

            console.log("cartItemToSave ", cartItemToSave);

            // getting data
            saveToCart(commonToken, cartItemToSave)
                .then((res) => {
                    console.log("resData from saveToCart ", res);
                    const resData = res.data;

                    // disabling button loading
                    setButtonLoading(false);

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
                            // disabling button loading
                            setButtonLoading(false);
                        },
                    });
                });
        })();
    };

    return (
        <section
            id={productViewStyles["st-product-view-wrapper"]}
            className="st-def-pad-B mt-2"
        >
            <Container>
                <Row className={productViewStyles["st-product-view"]}>
                    {/* left sec */}
                    <Col xs={12} md={4} lg={6} className="spv_lt">
                        <div className="inner">
                            <Swiper
                                spaceBetween={5}
                                thumbs={{ swiper: thumbsSwiper }}
                                autoHeight={true}
                                className="productViewSlider border"
                            >
                                {/* swiper slide */}
                                <SwiperSlide
                                    className={`${productViewStyles["main-slide-item"]} d-flex align-items-center justify-content-center p-2`}
                                >
                                    <Image
                                        src={productImg1}
                                        layout="intrinsic"
                                        alt=""
                                    />
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide
                                    className={`${productViewStyles["main-slide-item"]} d-flex align-items-center justify-content-center p-2`}
                                >
                                    <Image
                                        src={productImg2}
                                        layout="intrinsic"
                                        alt=""
                                    />
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide
                                    className={`${productViewStyles["main-slide-item"]} d-flex align-items-center justify-content-center p-2`}
                                >
                                    <Image
                                        src={productImg3}
                                        layout="intrinsic"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>

                            {/* thumbs */}
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                // spaceBetween={10}
                                slidesPerView={5}
                                freeMode={true}
                                watchSlidesVisibility={true}
                                watchSlidesProgress={true}
                                className={`${productViewStyles["productViewSliderThumbs"]} app-thumb-slider`}
                            >
                                {/* swiper slide */}
                                <SwiperSlide
                                    className={`${productViewStyles["thumb-slide-item"]} p-2 mb-2`}
                                >
                                    <div
                                        className={`inner border d-flex align-items-center justify-content-center cursor-pointer p-2`}
                                    >
                                        <Image
                                            src={productImg1}
                                            className="mx-auto"
                                            alt=""
                                        />
                                    </div>
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide
                                    className={`${productViewStyles["thumb-slide-item"]} p-2 mb-2`}
                                >
                                    <div
                                        className={`inner border d-flex align-items-center justify-content-center cursor-pointer p-2`}
                                    >
                                        <Image
                                            src={productImg2}
                                            className="mx-auto"
                                            alt=""
                                        />
                                    </div>
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide
                                    className={`${productViewStyles["thumb-slide-item"]} p-2 mb-2`}
                                >
                                    <div
                                        className={`inner border d-flex align-items-center justify-content-center cursor-pointer p-2`}
                                    >
                                        <Image
                                            src={productImg3}
                                            className="mx-auto"
                                            alt=""
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Col>

                    {/* right sec */}
                    <Col xs={12} md={4} lg={6} className="spv_rt">
                        <div className="inner">
                            <p
                                className={`${productViewStyles["product-name"]} st-text-dark st-fw-600 mb-10`}
                            >
                                {productDetails.product_name}
                            </p>
                            <p
                                className={`${productViewStyles["product-availability"]} st-fs-14 st-fw-600 mb-3`}
                            >
                                Availability:
                                {productDetails.out_of_stock ? (
                                    <span
                                        className={`${productViewStyles["out-stock"]} d-inline-block align-items-center ms-3`}
                                    >
                                        <FeatherIcon
                                            icon="x"
                                            size="17"
                                            className={`${productViewStyles["icon"]} me-1`}
                                        />
                                        <span>Out Of Stock.</span>
                                    </span>
                                ) : (
                                    <span
                                        className={`${productViewStyles["in-stock"]} d-inline-block align-items-center ms-3`}
                                    >
                                        <FeatherIcon
                                            icon="check"
                                            size="17"
                                            className={`${productViewStyles["icon"]} me-1`}
                                        />
                                        <span>In Stock.</span>
                                    </span>
                                )}
                                {
                                    /* low stock */
                                    productDetails.stock == 10 && (
                                        <span
                                            className={`${productViewStyles["low-stock"]} d-flex align-items-center st-fw-600 st-fs-13 st-text-primary mt-3`}
                                        >
                                            <FeatherIcon
                                                icon="alert-circle"
                                                size="17"
                                                className={`me-1`}
                                            />
                                            <span>Hurry only 10 left!!</span>
                                        </span>
                                    )
                                }
                            </p>
                            <div
                                className={`${productViewStyles["product-details"]}`}
                            >
                                <p
                                    className={`${productViewStyles["item"]} st-fs-14 pb-3`}
                                >
                                    <span
                                        className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}
                                    >
                                        SKU{" "}
                                    </span>
                                    {productDetails.sku}
                                </p>

                                {/* variation viewer */}
                                <div
                                    className={`${productViewStyles["product-page-variation-viewer"]}`}
                                >
                                    <div
                                        className={`${productViewStyles["inner"]} d-flex flex-wrap`}
                                    >
                                        <VariationViewer
                                            variantMainFields={
                                                variantMainFields
                                            }
                                            getData={(type, data) =>
                                                getData(type, data)
                                            }
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`${productViewStyles["description"]} st-fs-14 pb-3`}
                                >
                                    <span
                                        className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}
                                    >
                                        QUICK OVERVIEW{" "}
                                    </span>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: productDetails.short_description,
                                        }}
                                    ></div>
                                </div>
                                <p
                                    className={`${productViewStyles["item"]} st-fs-14 pb-3`}
                                >
                                    <span
                                        className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}
                                    >
                                        DIMENSIONS{" "}
                                    </span>
                                    {productDetails.height && (
                                        <span
                                            className={`d-block mb-2 ${productViewStyles["dimentions-item"]}`}
                                            style={{ color: "#737373" }}
                                        >
                                            <span className="st-fw-600">
                                                Height:
                                            </span>
                                            <span className="ms-2">
                                                {productDetails.height}
                                            </span>
                                        </span>
                                    )}
                                    {productDetails.width && (
                                        <span
                                            className={`d-block mb-2 ${productViewStyles["dimentions-item"]}`}
                                            style={{ color: "#737373" }}
                                        >
                                            <span className="st-fw-600">
                                                Width:
                                            </span>
                                            <span className="ms-2">
                                                {productDetails.width}
                                            </span>
                                        </span>
                                    )}
                                    {productDetails.weight && (
                                        <span
                                            className={`d-block mb-2 ${productViewStyles["dimentions-item"]}`}
                                            style={{ color: "#737373" }}
                                        >
                                            <span className="st-fw-600">
                                                Weight:
                                            </span>
                                            <span className="ms-2">
                                                {productDetails.weight}
                                            </span>
                                        </span>
                                    )}
                                    {productDetails.depth && (
                                        <span
                                            className={`d-block ${productViewStyles["dimentions-item"]}`}
                                            style={{ color: "#737373" }}
                                        >
                                            <span className="st-fw-600">
                                                Depth:
                                            </span>
                                            <span className="ms-2">
                                                {productDetails.depth}
                                            </span>
                                        </span>
                                    )}
                                </p>
                                <p
                                    className={`${productViewStyles["item"]} st-fs-14 pb-3`}
                                >
                                    <span
                                        className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}
                                    >
                                        BRAND{" "}
                                    </span>
                                    Stratus
                                </p>
                                <div
                                    className={`${productViewStyles["item"]} st-fs-14 pb-3`}
                                >
                                    <span
                                        className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}
                                    >
                                        QUANTITY{" "}
                                    </span>
                                    <div className="">
                                        <QuantitySelector
                                            getQuantity={getQuantity}
                                            minQuantity={hasMinQuantity}
                                            maxQuantity={hasMaxQuantity}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`${productViewStyles["product-price"]} d-flex align-items-center border-top pt-2 pt-lg-4 mt-3 mt-lg-4`}
                            >
                                {/* left */}
                                <p
                                    className={`${productViewStyles["price"]} mb-0`}
                                >
                                    {productDetails?.promo_price ? (
                                        <>
                                            <span>
                                                ${productDetails.promo_price}
                                            </span>
                                            <span
                                                className={`${productViewStyles["promo-price"]} ms-2`}
                                            >
                                                {productDetails.price}
                                            </span>
                                        </>
                                    ) : (
                                        <span>${productDetails.price}</span>
                                    )}
                                </p>
                                {/* right */}
                                <div className="pp_rt ms-auto">
                                    <button
                                        className="st-btn st-fw-700 text-uppercase"
                                        onClick={(ev) =>
                                            handleAddToCartButtonClick(
                                                ev,
                                                productDetails
                                            )
                                        }
                                    >
                                        {buttonLoading ? (
                                            <Spinner
                                                animation="border"
                                                size="sm"
                                                className="position-relative"
                                                style={{
                                                    top: 1,
                                                }}
                                            />
                                        ) : (
                                            <span>add to cart</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

const getDataFromStore = (state) => {
    return {
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
)(ProductViewSingle);
