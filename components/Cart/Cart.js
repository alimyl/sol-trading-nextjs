import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";

// nextjs - link
import Link from "next/link";
// nextjs - image
import Image from "next/image";

// bootstrap
import { Container } from "react-bootstrap";

// cart styles
import cartStyles from "./styles/cart.module.scss";

// common components
import BreadCrumbs from "components/CommonComponents/BreadCrumbs";

// icons : feather
import FeatherIcon from "feather-icons-react";

// PRODUCTS IMAGES
import productImg1 from "public/images/products/img1.jpg";
import productImg2 from "public/images/products/img2.jpg";
import productImg3 from "public/images/products/img3.jpg";
import productImg4 from "public/images/products/img4.jpg";

// helpers
import QuantitySelector from "utlis/helpers/QuantitySelector/QuantitySelector";

// no image
import noImgFoundImg from "public/images/no_image_big.jpg";

function Cart() {
    // states
    const [currentRoute, setCurrentRoute] = useState({}); // { routeName: 'name of the route', routeUrl: 'url of the route' }

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
    const getQuantity = (value, id) => {
        console.log("value ", value);
    };

    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs currentRouteSingle={currentRoute ?? currentRoute} />

            {/* cart section */}
            <section id={cartStyles["cart-wrapper"]} className="st-def-mar-B">
                <Container>
                    <div className={`${cartStyles["cart"]}`}>
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
                                        <tr>
                                            <td valign="middle">
                                                <div
                                                    className={`${cartStyles["product-details"]} d-flex align-items-center`}
                                                >
                                                    {/* img */}
                                                    <div
                                                        className={`${cartStyles["img-sec"]}`}
                                                    >
                                                        <Image
                                                            alt=""
                                                            src={productImg1}
                                                            placeholder="blur"
                                                        />
                                                    </div>

                                                    {/* text */}
                                                    <div
                                                        className={`${cartStyles["text-sec"]} ps-2`}
                                                    >
                                                        <p
                                                            className={`${cartStyles["head"]} st-text-primary st-fs-18 st-fw-700 mb-1`}
                                                        >
                                                            Cl 1021
                                                        </p>
                                                        <p
                                                            className={`${cartStyles["desc"]} st-fs-14 st-fw-100 mb-0`}
                                                        >
                                                            Item Code: CL 1021
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td valign="middle">
                                                <div className="">
                                                    <QuantitySelector
                                                        getQuantity={(value) =>
                                                            getQuantity(
                                                                value,
                                                                "1212"
                                                            )
                                                        }
                                                    />

                                                    <p className="st-fw-600 st-fs-15 cursor-pointer mt-1 mb-0">
                                                        <FeatherIcon
                                                            icon="x"
                                                            size="15"
                                                            className="icon"
                                                        />
                                                        <span
                                                            className="position-relative ms-1"
                                                            style={{ top: 1 }}
                                                        >
                                                            Remove Item
                                                        </span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td valign="middle">
                                                <p
                                                    className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                >
                                                    $14.00
                                                </p>
                                            </td>
                                            <td valign="middle">
                                                <p
                                                    className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                >
                                                    $42.00
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle">
                                                <div
                                                    className={`${cartStyles["product-details"]} d-flex align-items-center`}
                                                >
                                                    {/* img */}
                                                    <div
                                                        className={`${cartStyles["img-sec"]}`}
                                                    >
                                                        <Image
                                                            alt=""
                                                            src={productImg2}
                                                            placeholder="blur"
                                                        />
                                                    </div>

                                                    {/* text */}
                                                    <div
                                                        className={`${cartStyles["text-sec"]} ps-2`}
                                                    >
                                                        <p
                                                            className={`${cartStyles["head"]} st-text-primary st-fs-18 st-fw-700 mb-1`}
                                                        >
                                                            Cl 1021
                                                        </p>
                                                        <p
                                                            className={`${cartStyles["desc"]} st-fs-14 st-fw-100 mb-0`}
                                                        >
                                                            Item Code: CL 1021
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td valign="middle">
                                                <div className="">
                                                    <QuantitySelector
                                                        getQuantity={(value) =>
                                                            getQuantity(
                                                                value,
                                                                "1212"
                                                            )
                                                        }
                                                    />

                                                    <p className="st-fw-600 st-fs-15 cursor-pointer mt-1 mb-0">
                                                        <FeatherIcon
                                                            icon="x"
                                                            size="15"
                                                            className="icon"
                                                        />
                                                        <span
                                                            className="position-relative ms-1"
                                                            style={{ top: 1 }}
                                                        >
                                                            Remove Item
                                                        </span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td valign="middle">
                                                <p
                                                    className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                >
                                                    $14.00
                                                </p>
                                            </td>
                                            <td valign="middle">
                                                <p
                                                    className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                >
                                                    $42.00
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle">
                                                <div
                                                    className={`${cartStyles["product-details"]} d-flex align-items-center`}
                                                >
                                                    {/* img */}
                                                    <div
                                                        className={`${cartStyles["img-sec"]}`}
                                                    >
                                                        <Image
                                                            alt=""
                                                            src={productImg3}
                                                            placeholder="blur"
                                                        />
                                                    </div>

                                                    {/* text */}
                                                    <div
                                                        className={`${cartStyles["text-sec"]} ps-2`}
                                                    >
                                                        <p
                                                            className={`${cartStyles["head"]} st-text-primary st-fs-18 st-fw-700 mb-1`}
                                                        >
                                                            Cl 1021
                                                        </p>
                                                        <p
                                                            className={`${cartStyles["desc"]} st-fs-14 st-fw-100 mb-0`}
                                                        >
                                                            Item Code: CL 1021
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td valign="middle">
                                                <div className="">
                                                    <QuantitySelector
                                                        getQuantity={(value) =>
                                                            getQuantity(
                                                                value,
                                                                "1212"
                                                            )
                                                        }
                                                    />

                                                    <p className="st-fw-600 st-fs-15 cursor-pointer mt-1 mb-0">
                                                        <FeatherIcon
                                                            icon="x"
                                                            size="15"
                                                            className="icon"
                                                        />
                                                        <span
                                                            className="position-relative ms-1"
                                                            style={{ top: 1 }}
                                                        >
                                                            Remove Item
                                                        </span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td valign="middle">
                                                <p
                                                    className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                >
                                                    $14.00
                                                </p>
                                            </td>
                                            <td valign="middle">
                                                <p
                                                    className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                >
                                                    $42.00
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle">
                                                <div
                                                    className={`${cartStyles["product-details"]} d-flex align-items-center`}
                                                >
                                                    {/* img */}
                                                    <div
                                                        className={`${cartStyles["img-sec"]}`}
                                                    >
                                                        <Image
                                                            alt=""
                                                            src={productImg4}
                                                            placeholder="blur"
                                                        />
                                                    </div>

                                                    {/* text */}
                                                    <div
                                                        className={`${cartStyles["text-sec"]} ps-2`}
                                                    >
                                                        <p
                                                            className={`${cartStyles["head"]} st-text-primary st-fs-18 st-fw-700 mb-1`}
                                                        >
                                                            Cl 1021
                                                        </p>
                                                        <p
                                                            className={`${cartStyles["desc"]} st-fs-14 st-fw-100 mb-0`}
                                                        >
                                                            Item Code: CL 1021
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td valign="middle">
                                                <div className="">
                                                    <QuantitySelector
                                                        getQuantity={(value) =>
                                                            getQuantity(
                                                                value,
                                                                "1212"
                                                            )
                                                        }
                                                    />

                                                    <p className="st-fw-600 st-fs-15 cursor-pointer mt-1 mb-0">
                                                        <FeatherIcon
                                                            icon="x"
                                                            size="15"
                                                            className="icon"
                                                        />
                                                        <span
                                                            className="position-relative ms-1"
                                                            style={{ top: 1 }}
                                                        >
                                                            Remove Item
                                                        </span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td valign="middle">
                                                <p
                                                    className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                >
                                                    $14.00
                                                </p>
                                            </td>
                                            <td valign="middle">
                                                <p
                                                    className={`${cartStyles["desc"]} st-fw-600 mb-0`}
                                                >
                                                    $42.00
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"></td>
                                            <td>
                                                <p className="st-fw-600 st-fs-17 mb-0">
                                                    Sub total
                                                </p>
                                            </td>
                                            <td>
                                                <p className="st-fs-17 mb-0">
                                                    $105.25
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
                                                    $105.25
                                                </p>
                                            </td>
                                        </tr>
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
                    </div>
                </Container>
            </section>
        </div>
    );
}

const getDataFromStore = (state) => {
    return {
        cart: state.cart,
    };
};

const dispatchActionsToProps = (dispatch) => {
    return {
        setCartItem: (bool) => dispatch(setCartItem(bool)),
    };
};

export default connect(getDataFromStore, dispatchActionsToProps)(Cart);
