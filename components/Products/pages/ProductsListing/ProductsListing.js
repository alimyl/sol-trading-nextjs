import React, { useState, useEffect } from 'react'

// nextjs - link
import Link from 'next/link'
// nextjs - image
import Image from 'next/image'
// nextjs - router
import { useRouter } from 'next/router'

// bootstrap
import {
    Container,
    Accordion,
    Card,
    Col,
    Spinner,
} from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// products styles
import productsStyles from '../../styles/products.module.scss'

// images
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

// breadcrumbs
import BreadCrumbs from 'components/CommonComponents/BreadCrumbs';

export default function ProductsListing(props) {
    // consts
    const router = useRouter()

    // states
    const [currentRoute, setCurrentRoute] = useState({}) // { routeName: 'name of the route', routeUrl: 'url of the route' }
    const [currentRouteArray, setCurrentRouteArray] = useState([]) // [{ routeName: 'name of the route', routeUrl: 'url of the route' }]

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

    const [currentSortingOrder, setCurrentSortingOrder] = useState(false)
    const [currentCategory, setCurrentCategory] = useState({})

    // breadcrumbs generating
    useEffect(() => {
        const { categoryId } = router.query
        const { subCategoryId } = router.query

        // console.log("categoryId from the products listing ", categoryId)
        // console.log("subCategoryId from the products listing ", subCategoryId)

        // if there's only single level category
        if (categoryId) {
            // setting current route
            setCurrentRoute({
                routeName: categoryId,
                sku: categoryId,
                routeUrl: '/products/' + categoryId
            })

            // setting current category
            setCurrentCategory({
                routeName: categoryId,
                sku: categoryId,
                routeUrl: '/products/' + categoryId
            })
            // emptying all routes array
            setCurrentRouteArray([])
        }

        // if there's multi level category
        if (subCategoryId && categoryId) {
            // setting all routes array
            setCurrentRouteArray([
                {
                    routeName: categoryId,
                    sku: categoryId,
                    routeUrl: '/products/' + categoryId
                },
                {
                    routeName: subCategoryId,
                    sku: subCategoryId,
                    routeUrl: '/products/' + categoryId + "/" + subCategoryId
                },
            ])
            // setting current category
            setCurrentCategory({
                routeName: categoryId,
                sku: categoryId,
                routeUrl: '/products/' + categoryId
            })
            // emptying current route
            setCurrentRoute({})
        }

    }, [router])

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

    const manageSortingOrder = (ev, order) => {
        ev.preventDefault()

        if (order === 'asc') {
            setCurrentSortingOrder('asc')
        } else {
            setCurrentSortingOrder('desc')
        }
    }

    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs
                currentRouteSingle={currentRoute ?? currentRoute}
                currentRouteArray={currentRouteArray ?? currentRouteArray}
            />

            {/* product listing */}
            <section id={productsStyles["st-products-listing-wrapper"]} className="st-def-mar-B">
                <Container>
                    <div className={`${productsStyles["st-products-listing"]} d-flex`}>
                        {/* left sec */}
                        <div className={`${productsStyles["spl_lt"]}`}>
                            <div className="inner position-sticky pe-3" style={{ top: 0 }}>
                                {/* item */}
                                <Accordion defaultActiveKey="0" className="mb-2">
                                    <Card className="rounded-0 border-0">
                                        {/* head */}
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="st-fs-16 d-flex rounded-0 border-0 bg-transparent cursor-pointer mb-1 px-0">
                                            <span className="st-fw-700 st-text-light media-body pr-2">Accessories</span>
                                            <FeatherIcon
                                                icon="plus"
                                                size="15"
                                                className="icon ms-auto mt-1" />
                                        </Accordion.Toggle>

                                        {/* body */}
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="p-0">
                                                <div className="st-checkbox-container">
                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">Accessories</span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">Ash Catchers</span>
                                                    </label>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                {/* ITEM */}
                                <Accordion defaultActiveKey="0" className="mb-2">
                                    <Card className="rounded-0 border-0">
                                        {/* head */}
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="st-fs-16 d-flex rounded-0 border-0 bg-transparent cursor-pointer mb-1 px-0">
                                            <span className="st-fw-700 st-text-light media-body pr-2">Brand</span>
                                            <FeatherIcon
                                                icon="plus"
                                                size="15"
                                                className="icon ms-auto mt-1" />
                                        </Accordion.Toggle>

                                        {/* body */}
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="p-0">
                                                <div className="st-checkbox-container">

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">Krave</span>
                                                    </label>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                {/* ITEM */}
                                <Accordion defaultActiveKey="0" className="mb-2">
                                    <Card className="rounded-0 border-0">
                                        {/* head */}
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="st-fs-16 d-flex rounded-0 border-0 bg-transparent cursor-pointer mb-1 px-0">
                                            <span className="st-fw-700 st-text-light media-body pr-2">Price</span>
                                            <FeatherIcon
                                                icon="plus"
                                                size="15"
                                                className="icon ms-auto mt-1" />
                                        </Accordion.Toggle>

                                        {/* body */}
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className="p-0">
                                                <div className="st-checkbox-container">

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">$0.00 - $100.00</span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">$100.00 - $199.00</span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">$200.00 - $500.00</span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">$500.00 - $1000.00</span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">$1000.00 - $2000.00</span>
                                                    </label>

                                                    {/* item */}
                                                    <label className="st-checkbox cursor-pointer d-flex mb-2">
                                                        <input type="checkbox" className="d-none" />
                                                        <span className="box border d-flex align-items-center justify-content-center">
                                                            <FeatherIcon
                                                                icon="check"
                                                                size="15"
                                                                className="icon" />
                                                        </span>
                                                        <span className="text ps-3">$1200.00 - Above</span>
                                                    </label>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>

                        {/* right sec */}
                        <div className={`${productsStyles["spl_rt"]} media-body ml-auto ps-3`}>
                            <div className="inner">
                                {/* top filters */}
                                <div className={`${productsStyles["top-filters"]} mb-2`}>
                                    <div className="inner d-flex">
                                        {/* left section */}
                                        <div className={`${productsStyles["tf_lt"]} d-flex`}>
                                            <p className="head st-fs-16 st-fw-700 st-text-light me-2 mb-1" style={{ width: 120, paddingTop: 3 }}>Your Selection:</p>
                                            <div className="selected-filters d-flex flex-wrap media-body">
                                                {/* item */}
                                                <p className={`${productsStyles["item"]} st-text-light d-flex align-items-center pe-2 mb-1`}>
                                                    <FeatherIcon
                                                        icon="x"
                                                        size="15"
                                                        className={`${productsStyles["icon"]} cursor-pointer st-text-dark app-title`}
                                                        data-title="Remove"
                                                        onClick={() => console.log('object')} />
                                                    <span className="ms-1">Accessories</span>
                                                </p>

                                                {/* item */}
                                                <p className={`${productsStyles["item"]} st-text-light d-flex align-items-center pe-2 mb-1`}>
                                                    <FeatherIcon
                                                        icon="x"
                                                        size="15"
                                                        className={`${productsStyles["icon"]} cursor-pointer st-text-dark app-title`}
                                                        data-title="Remove"
                                                        onClick={() => console.log('object')} />
                                                    <span className="ms-1">Batteires</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* right section */}
                                        <div className="tf_rt d-flex align-items-center ms-auto">
                                            <p className="head st-fs-16 st-fw-700 st-text-light me-2 mb-1" style={{ width: 65 }}>Sort By:</p>
                                            <div className={`${productsStyles["sorting-btns"]} d-flex`}>
                                                {/* btn */}
                                                <a href="/"
                                                    className={`${productsStyles["sorting-btn"]} st-fs-16 st-fw-600 text-decoration-none border d-flex align-items-center justify-content-center ${currentSortingOrder === 'asc' && productsStyles["active"]}`}
                                                    onClick={ev => manageSortingOrder(ev, 'asc')}>
                                                    <span className="me-1">$</span>
                                                    <FeatherIcon
                                                        icon="arrow-down"
                                                        size="15"
                                                        className="icon" />
                                                </a>

                                                {/* btn */}
                                                <a href="/"
                                                    className={`${productsStyles["sorting-btn"]} st-fs-16 st-fw-600 text-decoration-none border d-flex align-items-center justify-content-center ${currentSortingOrder === 'desc' && productsStyles["active"]}`}
                                                    onClick={ev => manageSortingOrder(ev, 'desc')}>
                                                    <span className="me-1">$$$</span>
                                                    <FeatherIcon
                                                        icon="arrow-up"
                                                        size="15"
                                                        className="icon" />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* all products */}
                                <div className={`${productsStyles["all-products"]} d-flex flex-wrap`}>
                                    {
                                        featuredProducts && featuredProducts.map(item => (
                                            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className={`${productsStyles["st-product-item-in-prods"]} st-product-item`}>
                                                <div className="inner text-center">
                                                    {/* image */}
                                                    <Link href={{
                                                        pathname: "/product-details/" + item.sku,
                                                        // query: { currentCategory }
                                                    }}>
                                                        <a className="product-img text-decoration-none d-flex align-items-center justify-content-center border p-2" title={item.name}>
                                                            {
                                                                item.imgPath ? (
                                                                    <Image
                                                                        src={item.imgPath}
                                                                        placeholder="blur"
                                                                    />
                                                                ) : (
                                                                    <Image
                                                                        src={noImgFoundImg}
                                                                        placeholder="blur"
                                                                    />
                                                                )
                                                            }
                                                        </a>
                                                    </Link>
                                                    {/* details */}
                                                    <div className="product-details mt-2">
                                                        <div className="name">
                                                            <Link href={{
                                                                pathname: "/product-details/" + item.sku,
                                                            }}>
                                                                <a className="text-decoration-none st-text-light st-fw-600" title={item.name}>
                                                                    {item.name}
                                                                </a>
                                                            </Link>
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
                                </div>

                            </div>
                        </div>



                    </div>
                </Container>
            </section>


        </div>
    )
}
