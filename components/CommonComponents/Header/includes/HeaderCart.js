import React from 'react'

// nextjs - link
import Link from 'next/link'
// nextjs - image
import Image from 'next/image'

// react bootstrap
// import { Image } from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// header styles
import headerStyles from '../styles/header.module.scss'

// PRODUCTS IMAGES
import productImg1 from 'public/images/products/img1.jpg'
import productImg2 from 'public/images/products/img2.jpg'
import productImg3 from 'public/images/products/img3.jpg'
import productImg4 from 'public/images/products/img4.jpg'

export default function HeaderCart() {
    return (
        <div className={`${headerStyles["cart-container"]} position-absolute`}>
            <div className={`${headerStyles["cart_inner"]} st-bg-light-gray`}>
                {/* listing */}
                <div className={headerStyles["cart_listing"]}>
                    <div className={headerStyles.inner}>
                        {/* item */}
                        <div className="item">
                            <div className="item-inner d-flex border-bottom p-2">
                                {/* img */}
                                <Link href="/home">
                                    <a href="/" className="img">
                                        <Image src={productImg1} width={70} height={70} />
                                    </a>
                                </Link>
                                {/* details */}
                                <div className="details media-body d-flex ps-2 ps-lg-3">
                                    <p className="name media-body">
                                        <Link href="/home">
                                            <a href="/" className="text-decoration-none st-fs-14 st-fw-600 st-text-dark mb-2">
                                                Cl 1021
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
                                        $28.00

                                        <FeatherIcon
                                            icon="trash-2"
                                            size="15"
                                            title="Delete"
                                            className="position-relative text-danger cursor-pointer ms-2" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* item */}
                        <div className="item">
                            <div className="item-inner d-flex border-bottom p-2">
                                {/* img */}
                                <Link href="/home">
                                    <a href="/" className="img">
                                        <Image src={productImg2} width={70} height={70} />
                                    </a>
                                </Link>
                                {/* details */}
                                <div className="details media-body d-flex ps-2 ps-lg-3">
                                    <p className="name media-body">
                                        <Link href="/home">
                                            <a href="/" className="text-decoration-none st-fs-14 st-fw-600 st-text-dark mb-2">
                                                Cl 1021
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
                                        $28.00

                                        <FeatherIcon
                                            icon="trash-2"
                                            size="15"
                                            title="Delete"
                                            className="position-relative text-danger cursor-pointer ms-2" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* item */}
                        <div className="item">
                            <div className="item-inner d-flex border-bottom p-2">
                                {/* img */}
                                <Link href="/home">
                                    <a href="/" className="img">
                                        <Image src={productImg3} width={70} height={70} />
                                    </a>
                                </Link>
                                {/* details */}
                                <div className="details media-body d-flex ps-2 ps-lg-3">
                                    <p className="name media-body">
                                        <Link href="/home">
                                            <a href="/" className="text-decoration-none st-fs-14 st-fw-600 st-text-dark mb-2">
                                                Cl 1021
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
                                        $28.00

                                        <FeatherIcon
                                            icon="trash-2"
                                            size="15"
                                            title="Delete"
                                            className="position-relative text-danger cursor-pointer ms-2" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* item */}
                        <div className="item">
                            <div className="item-inner d-flex border-bottom p-2">
                                {/* img */}
                                <Link href="/home">
                                    <a href="/" className="img">
                                        <Image src={productImg4} width={70} height={70} />
                                    </a>
                                </Link>
                                {/* details */}
                                <div className="details media-body d-flex ps-2 ps-lg-3">
                                    <p className="name media-body">
                                        <Link href="/home">
                                            <a href="/" className="text-decoration-none st-fs-14 st-fw-600 st-text-dark mb-2">
                                                Cl 1021
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
                                        $28.00

                                        <FeatherIcon
                                            icon="trash-2"
                                            size="15"
                                            title="Delete"
                                            className="position-relative text-danger cursor-pointer ms-2" />
                                    </p>
                                </div>
                            </div>
                        </div>
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
                                <a href="/cart" className="st-btn w-50 st-fs-13 st-fw-700 st-btn-primary text-uppercase no-min-width text-center ms-1">
                                    checkout
                                </a>
                            </Link>
                        </div>

                        <button className="st-btn w-100 st-fs-13 st-fw-700 text-uppercase no-min-width">
                            empty cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
