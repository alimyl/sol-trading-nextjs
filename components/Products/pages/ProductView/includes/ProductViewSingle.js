import React, { useState } from 'react'

// nextjs - image
import Image from 'next/image'

// bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

// styles
import productViewStyles from "../../../styles/products.module.scss"

// icons : feather
import FeatherIcon from 'feather-icons-react';

// helpers
import QuantitySelector from 'utlis/helpers/QuantitySelector/QuantitySelector'

// products images
import productImg1 from 'public/images/product-big/img1.jpg'
import productImg2 from 'public/images/product-big/img2.jpg'
import productImg3 from 'public/images/product-big/img3.jpg'

// Importing Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Importing Swiper core and required modules
import SwiperCore, {
    Thumbs,
    Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Thumbs, Autoplay]);

import VariationViewer from './VariationViewer'

export default function ProductViewSingle(props) {
    // consts
    const {
        productsDetailsLoading,
        productDetails,
        variantMainFields,
    } = props

    // states
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const getQuantity = value => {
        console.log('value ', value)
    }

    return (
        <section id={productViewStyles["st-product-view-wrapper"]} className="st-def-pad-B mt-2">
            <Container>
                <Row className={productViewStyles["st-product-view"]}>
                    {/* left sec */}
                    <Col xs={12} md={4} lg={6} className="spv_lt">
                        <div className="inner">
                            <Swiper
                                spaceBetween={5}
                                thumbs={{ swiper: thumbsSwiper }}
                                autoHeight={true}
                                className="productViewSlider border">
                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["main-slide-item"]} d-flex align-items-center justify-content-center p-2`}>
                                    <Image src={productImg1} layout="intrinsic" alt="" />
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["main-slide-item"]} d-flex align-items-center justify-content-center p-2`}>
                                    <Image src={productImg2} layout="intrinsic" alt="" />
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["main-slide-item"]} d-flex align-items-center justify-content-center p-2`}>
                                    <Image src={productImg3} layout="intrinsic" alt="" />
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
                                className={`${productViewStyles["productViewSliderThumbs"]} app-thumb-slider`}>
                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["thumb-slide-item"]} p-2 mb-2`}>
                                    <div className={`inner border d-flex align-items-center justify-content-center cursor-pointer p-2`}>
                                        <Image src={productImg1} className="mx-auto" alt="" />
                                    </div>
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["thumb-slide-item"]} p-2 mb-2`}>
                                    <div className={`inner border d-flex align-items-center justify-content-center cursor-pointer p-2`}>
                                        <Image src={productImg2} className="mx-auto" alt="" />
                                    </div>
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["thumb-slide-item"]} p-2 mb-2`}>
                                    <div className={`inner border d-flex align-items-center justify-content-center cursor-pointer p-2`}>
                                        <Image src={productImg3} className="mx-auto" alt="" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Col>

                    {/* right sec */}
                    <Col xs={12} md={4} lg={6} className="spv_rt">
                        <div className="inner">
                            <p className={`${productViewStyles["product-name"]} st-text-dark st-fw-600 mb-10`}>{productDetails.product_name}</p>
                            <p className={`${productViewStyles["product-availability"]} st-fs-14 st-fw-600 mb-3`}>
                                Availability:
                                {
                                    productDetails.out_of_stock ? (
                                        <span className={`${productViewStyles["out-stock"]} d-inline-block align-items-center ms-3`}>
                                            <FeatherIcon
                                                icon="x"
                                                size="17"
                                                className={`${productViewStyles["icon"]} me-1`} />
                                            <span>Out Of Stock.</span>
                                        </span>
                                    ) : (
                                        <span className={`${productViewStyles["in-stock"]} d-inline-block align-items-center ms-3`}>
                                            <FeatherIcon
                                                icon="check"
                                                size="17"
                                                className={`${productViewStyles["icon"]} me-1`} />
                                            <span>In Stock.</span>
                                        </span>
                                    )
                                }
                            </p>
                            <div className={`${productViewStyles["product-details"]}`}>
                                <p className={`${productViewStyles["item"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>SKU </span>
                                    {productDetails.sku}
                                </p>
                                <div className={`${productViewStyles["description"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>QUICK OVERVIEW </span>
                                    <div dangerouslySetInnerHTML={{ __html: productDetails.short_description }}></div>
                                </div>
                                <p className={`${productViewStyles["item"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>DIMENSIONS </span>
                                    {productDetails.height && (
                                        <span className={`d-block mb-2 ${productViewStyles["dimentions-item"]}`} style={{ color: "#737373" }}>
                                            <span className="st-fw-600">Height:</span>
                                            <span className="ms-2">{productDetails.height}</span>
                                        </span>
                                    )}
                                    {productDetails.width && (
                                        <span className={`d-block mb-2 ${productViewStyles["dimentions-item"]}`} style={{ color: "#737373" }}>
                                            <span className="st-fw-600">Width:</span>
                                            <span className="ms-2">{productDetails.width}</span>
                                        </span>
                                    )}
                                    {productDetails.weight && (
                                        <span className={`d-block mb-2 ${productViewStyles["dimentions-item"]}`} style={{ color: "#737373" }}>
                                            <span className="st-fw-600">Weight:</span>
                                            <span className="ms-2">{productDetails.weight}</span>
                                        </span>
                                    )}
                                    {productDetails.depth && (
                                        <span className={`d-block ${productViewStyles["dimentions-item"]}`} style={{ color: "#737373" }}>
                                            <span className="st-fw-600">Depth:</span>
                                            <span className="ms-2">{productDetails.depth}</span>
                                        </span>
                                    )}
                                </p>
                                <p className={`${productViewStyles["item"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>BRAND </span>
                                    Stratus
                                </p>
                                <div className={`${productViewStyles["item"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>QUANTITY </span>
                                    <div className="">
                                        <QuantitySelector
                                            getQuantity={value => getQuantity(value)}
                                        />
                                    </div>
                                </div>

                                {/* variation viewer */}
                                <VariationViewer
                                    variantMainFields={variantMainFields}
                                />
                            </div>

                            <div className={`${productViewStyles["product-price"]} d-flex align-items-center border-top pt-2 pt-lg-4 mt-3 mt-lg-4`}>
                                {/* left */}
                                <div className="pp_lt">
                                </div>
                                {/* right */}
                                <div className="pp_rt ms-auto">
                                    <button className="st-btn st-fw-700 text-uppercase">
                                        add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
