import React, { useState } from 'react'

// nextjs - link
import Link from 'next/link'
// nextjs - image
import Image from 'next/image'

// bootstrap
import {
    Row,
    Col,
    Spinner,
} from 'react-bootstrap';

// styles
import homepageStyles from "../../../styles/Homepage.module.scss"

// PRODUCTS IMAGES
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

export default function FeaturedProducts() {
    const [products, setProducts] = useState([
        {
            id: '1',
            imgPath: productImg1,
            name: 'Hk 393',
            currencyType: '$',
            price: '33.00',

        },
        {
            id: '2',
            imgPath: productImg2,
            name: 'Truweigh Enigma Scale - 500g X 0.01g',
            currencyType: '$',
            price: '35.00',

        },
        {
            id: '3',
            imgPath: productImg3,
            name: 'Blink Glass Tray',
            currencyType: '$',
            price: '3.50',

        },
        {
            id: '4',
            imgPath: productImg4,
            name: 'Ooze Saturn Grinder',
            currencyType: '$',
            price: '14.00',

        },
        {
            id: '5',
            imgPath: productImg5,
            name: 'Cl 1021',
            currencyType: '$',
            price: '12.00',

        },
        {
            id: '6',
            imgPath: productImg6,
            name: 'Ooze Cranium Silicone Wp & Nectar Collector',
            currencyType: '$',
            price: '35.00',

        },
        {
            id: '7',
            imgPath: productImg7,
            name: 'Krave Glass Cleaner 16oz',
            currencyType: '$',
            price: '38.00',

        },
        {
            id: '8',
            imgPath: productImg8,
            name: 'Stratus Temperature Reader',
            currencyType: '$',
            price: '33.00',

        },
        {
            id: '9',
            imgPath: productImg9,
            name: 'Stratus Duo Digital E-nail',
            currencyType: '$',
            price: '16.50',

        },
    ])

    const [buttonLoadingId, setButtonLoadingId] = useState("")
    const [allButtonsDisabled, setAllButtonsDisabled] = useState(false)

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
        <section id={homepageStyles["main-products-wrapper"]} className="">
            <Row className={homepageStyles["main-products"]}>
                {
                    products?.map(item => (
                        <Col key={item.id} xs={12} sm={6} md={4} className={`${homepageStyles["st-product-item-in-prods"]} st-product-item mb-3 mb-lg-5`}>
                            <div className="inner text-center">
                                {/* image */}
                                <Link href="/home">
                                    <a className="product-img text-decoration-none d-flex align-items-center justify-content-center border p-2 overflow-hidden"
                                        title={item.name}>
                                        {
                                            item.imgPath ? (
                                                <Image src={item.imgPath} placeholder="blur" />
                                            ) : (
                                                <Image src={noImgFoundImg} placeholder="blur" />
                                            )
                                        }
                                    </a>
                                </Link>
                                {/* details */}
                                <div className="product-details mt-2">
                                    <div className="name">
                                        <a href="/" className="text-decoration-none st-text-light st-fw-600" title={item.name}>{item.name}</a>
                                    </div>
                                    <p className="price st-fs-17 st-fw-600 mt-2">{item.currencyType + item.price}</p>
                                    <button
                                        className={`st-btn text-uppercase mt-2 ${(buttonLoadingId === item.id || allButtonsDisabled) && "disabled"}`}
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
                        </Col>
                    ))
                }
            </Row>
        </section>
    )
}
