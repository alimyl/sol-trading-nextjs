import React, { useState } from 'react'

// nextjs - image
import Image from 'next/image'

// bootstrap
import {
    Container,
    Row,
    Col,
    Form
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

export default function ProductViewSingle() {
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
                                    <Image src={productImg1} layout="intrinsic" />
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["main-slide-item"]} d-flex align-items-center justify-content-center p-2`}>
                                    <Image src={productImg2} layout="intrinsic" />
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["main-slide-item"]} d-flex align-items-center justify-content-center p-2`}>
                                    <Image src={productImg3} layout="intrinsic" />
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
                                        <Image src={productImg1} className="mx-auto" />
                                    </div>
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["thumb-slide-item"]} p-2 mb-2`}>
                                    <div className={`inner border d-flex align-items-center justify-content-center cursor-pointer p-2`}>
                                        <Image src={productImg2} className="mx-auto" />
                                    </div>
                                </SwiperSlide>

                                {/* swiper slide */}
                                <SwiperSlide className={`${productViewStyles["thumb-slide-item"]} p-2 mb-2`}>
                                    <div className={`inner border d-flex align-items-center justify-content-center cursor-pointer p-2`}>
                                        <Image src={productImg3} className="mx-auto" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Col>

                    {/* right sec */}
                    <Col xs={12} md={4} lg={6} className="spv_rt">
                        <div className="inner">
                            <p className={`${productViewStyles["product-name"]} st-text-dark st-fw-600 mb-10`}>HK 119 - 19MM</p>
                            <p className={`${productViewStyles["product-availability"]} st-fs-14 st-fw-600 mb-3`}>
                                Availability:
                                <span className={`${productViewStyles["in-stock"]} d-inline-block align-items-center ms-3`}>
                                    <FeatherIcon
                                        icon="check"
                                        size="17"
                                        className={`${productViewStyles["icon"]} me-1`} />
                                    <span>In Stock.</span>
                                </span>
                            </p>
                            <div className={`${productViewStyles["product-details"]}`}>
                                <p className={`${productViewStyles["item"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>SKU </span>
                                    HK 119 - 19MM
                                </p>
                                <p className={`${productViewStyles["item"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>QUICK OVERVIEW </span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores delectus dicta adipisci repudiandae. Quibusdam, ullam quo. Atque rem neque commodi sunt laudantium, voluptatem praesentium dolore temporibus nam reiciendis quia?
                                </p>
                                <p className={`${productViewStyles["item"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>DIMENSIONS </span>
                                    1920 * 1080
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
                                <div className={`${productViewStyles["item"]} st-fs-14 pb-3`}>
                                    <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>COLOR </span>
                                    <Form.Group className="st-form" style={{ width: 168 }}>
                                        <Form.Control as="select" defaultValue="red" className="cursor-pointer no-select-icon text-center">
                                            <option value="default" disabled>Select Color</option>
                                            <option value="red">RED</option>
                                            <option value="green">GREEN</option>
                                            <option value="blue">BLUE</option>
                                            <option value="purple">PURPLE</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>

                            <div className={`${productViewStyles["product-price"]} d-flex align-items-center border-top pt-2 pt-lg-4 mt-3 mt-lg-4`}>
                                {/* left */}
                                <div className="pp_lt">
                                </div>
                                {/* right */}
                                <div className="pp_rt ms-auto">
                                    <button className="st-btn text-uppercase">
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
