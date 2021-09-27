import React, { useState, useEffect } from 'react'

// nextjs - image
import Image from 'next/image'
// nextjs - link
import Link from 'next/link'

// bootstrap
import {
    Container,
    Spinner,
} from 'react-bootstrap';

// styles
import productViewStyles from "../../../styles/products.module.scss"

// Importing Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// products images
import productImg1 from 'public/images/products/img1.jpg'
import productImg2 from 'public/images/products/img2.jpg'
import productImg3 from 'public/images/products/img3.jpg'
import productImg4 from 'public/images/products/img4.jpg'
import productImg5 from 'public/images/products/img5.jpg'
import productImg6 from 'public/images/products/img6.jpg'
import productImg7 from 'public/images/products/img7.jpg'
import productImg8 from 'public/images/products/img8.jpg'
import productImg9 from 'public/images/products/img9.jpg'

// no image
import noImgFoundImg from 'public/images/no_image_big.jpg'

// Importing Swiper core and required modules
import SwiperCore, {
    Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay]);

export default function RelatedProducts(props) {
    // states
    const [featuredProducts, setFeaturedProducts] = useState([
        {
            id: '1',
            imgPath: productImg1,
            name: 'Hk 393',
            sku: 'hk-393',
            currencyType: '$',
            price: '33.00',

        },
        {
            id: '2',
            imgPath: productImg2,
            name: 'Truweigh Enigma Scale - 500g X 0.01g',
            sku: 'truweigh-enigma-scale-500g-x-0.01g',
            currencyType: '$',
            price: '35.00',

        },
        {
            id: '3',
            imgPath: productImg3,
            name: 'Blink Glass Tray',
            sku: 'blink-glass-tray',
            currencyType: '$',
            price: '3.50',

        },
        {
            id: '4',
            imgPath: productImg4,
            name: 'Ooze Saturn Grinder',
            sku: 'ooze-saturn-grinder',
            currencyType: '$',
            price: '14.00',

        },
        {
            id: '5',
            imgPath: productImg5,
            name: 'Cl 1021',
            sku: 'cl-1021',
            currencyType: '$',
            price: '12.00',

        },
        {
            id: '6',
            imgPath: productImg6,
            name: 'Ooze Cranium Silicone Wp & Nectar Collector',
            sku: 'ooze-cranium-silicone-wp-&-nectar-collector',
            currencyType: '$',
            price: '35.00',

        },
        {
            id: '7',
            imgPath: productImg7,
            name: 'Krave Glass Cleaner 16oz',
            sku: 'krave-glass-cleaner-16oz',
            currencyType: '$',
            price: '38.00',

        },
        {
            id: '8',
            imgPath: productImg8,
            name: 'Stratus Temperature Reader',
            sku: 'stratus-temperature-reader',
            currencyType: '$',
            price: '33.00',

        },
        {
            id: '9',
            imgPath: productImg9,
            name: 'Stratus Duo Digital E-nail',
            sku: 'stratus-duo-digital-e-nail',
            currencyType: '$',
            price: '16.50',

        },
    ])

    const [buttonLoadingId, setButtonLoadingId] = useState("")
    const [allButtonsDisabled, setAllButtonsDisabled] = useState(false)


    useEffect(() => {
        return () => {
            setButtonLoadingId("")
            setAllButtonsDisabled(false)
        }
    }, [])

    // add to cart button hadling
    const handleAddToCartButtonClick = (ev, id) => {
        ev.preventDefault()
        // setting id of the current loading button
        setButtonLoadingId(id)
        setAllButtonsDisabled(true)

        // resetting id of the current loading button
        setTimeout(() => {
            setButtonLoadingId("")
            setAllButtonsDisabled(false)
        }, 2000);
    }

    return (
        <section id="st-related-products" className="st-def-pad-B">
            <Container>
                <div className="st-related-products">
                    {/* heading */}
                    <div className="st-heading-wrapper mb-3 mb-lg-4">
                        <p className="st-heading font-family-cinzel-decorative text-capitalize text-center">
                            <span className="st-text-primary">Related </span>
                            Products
                            <span className="icon d-block mx-auto position-relative"></span>
                        </p>
                    </div>

                    <div className="related-products-slider">
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={10}
                            autoplay={{
                                delay: 4000,
                                pauseOnMouseEnter: true,
                                reverseDirection: true,
                            }}
                            className="ourBrandsSlider">
                            {
                                featuredProducts && featuredProducts.map(item => (
                                    <SwiperSlide key={item.id} className="st-product-item">
                                        <div className="inner text-center">
                                            {/* image */}
                                            <Link href={{
                                                pathname: "/product/" + item.sku,
                                                // query: { currentCategory: props.currentCategory }
                                            }}>
                                                <a className="product-img text-decoration-none d-flex align-items-center justify-content-center border p-2"
                                                    title={item.name}>
                                                    {
                                                        item.imgPath ? (
                                                            <Image src={item.imgPath} placeholder={"blur"} />
                                                        ) : (
                                                            <Image src={noImgFoundImg} placeholder={"blur"} />
                                                        )
                                                    }
                                                </a>
                                            </Link>
                                            {/* details */}
                                            <div className="product-details mt-2">
                                                <div className="name">
                                                    <Link href={{
                                                        pathname: "/product/" + item.sku,
                                                        // query: { currentCategory: props.currentCategory }
                                                    }}>
                                                        <a className="text-decoration-none st-text-light st-fw-600" title={item.name}>
                                                            {item.name}
                                                        </a>
                                                    </Link>
                                                </div>
                                                <p className="price st-fs-17 st-fw-600 mt-2">{item.currencyType + item.price}</p>
                                                <button
                                                    className={`st-btn st-fw-700 text-uppercase mt-2 ${(buttonLoadingId === item.id || allButtonsDisabled) && "disabled"}`}
                                                    onClick={(ev) => handleAddToCartButtonClick(ev, item.id)}>
                                                    {
                                                        (buttonLoadingId === item.id) ? (
                                                            <Spinner animation="border" size="sm" className="position-relative" style={{ top: 1 }} />
                                                        ) : (
                                                            <span>add to cart</span>
                                                        )
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                </div>
            </Container>
        </section>
    )
}
