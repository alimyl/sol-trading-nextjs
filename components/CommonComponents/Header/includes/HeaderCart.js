import React from "react";

// redux
import { connect } from "react-redux";

// nextjs - link
import Link from "next/link";
// nextjs - image
import Image from "next/image";

// react bootstrap
// import { Image } from 'react-bootstrap';

// icons : feather
import FeatherIcon from "feather-icons-react";

// header styles
import headerStyles from "../styles/header.module.scss";

// PRODUCTS IMAGES
import productImg1 from "public/images/products/img1.jpg";

// no image
import noImgFoundImg from "public/images/no_image_big.jpg";

function HeaderCart(props) {
    // consts
    const { cart } = props;

    return (
        <div className={`${headerStyles["cart-container"]} position-absolute`}>
            <div className={`${headerStyles["cart_inner"]} st-bg-light-gray`}>
                {
                    cart?.length ? (
                        <React.Fragment>
                            {/* listing */}
                            <div className={headerStyles["cart_listing"]}>
                                <div className={headerStyles.inner}>
                                    {/* item */}
                                    {
                                        cart.map(item => (
                                            <div key={item.product_id} className="item">
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
                                                                </a>
                                                            </Link>
                                                            <span className="quantity d-block st-fs-12 st-fw-400 st-text-light mb-1">
                                                                Qty: x2
                                                            </span>
                                                            <span className="quantity d-block st-fs-12 st-fw-400 st-text-light mb-1">
                                                                Color: Red
                                                            </span>
                                                        </p>

                                                        <p className="price st-fs-14 st-fw-600 st-text-dark d-flex align-items-center align-self-start ps-2">
                                                            <span>${item.price}</span>
                                                            <FeatherIcon
                                                                icon="trash-2"
                                                                size="15"
                                                                title="Delete"
                                                                className="position-relative text-danger cursor-pointer ms-2"
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* bottom sec */}
                            <div className="hcc_bottom-sec">
                                {/* sub total */}
                                <div className="sub-total d-flex st-fw-700 st-text-light border-top border-bottom p-3">
                                    <p className="head">Sub Total</p>
                                    <p className="total ms-auto">$22.00</p>
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

                                    <button className="st-btn w-100 st-fs-13 st-fw-700 text-uppercase no-min-width">
                                        empty cart
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    ) : (
                        <p className="no-item text-center py-3">cart is empty</p>
                    )
                }
            </div>
        </div>
    );
}

const getDataFromStore = (state) => {
    return {
        cart: state.cart.cartItem,
    };
};

// const dispatchActionsToProps = (dispatch) => {
//     return {
//         setCartItem: (bool) => dispatch(setCartItem(bool)),
//     };
// };

export default connect(getDataFromStore, null)(HeaderCart);
