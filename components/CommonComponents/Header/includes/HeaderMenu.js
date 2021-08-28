import React, { useState, useEffect } from 'react'

// redux
import { connect } from 'react-redux'

// nextjs - link
import Link from 'next/link'
// nextjs - image
import Image from 'next/image'

// bootstrap
import {
    Container,
} from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// header styles
import headerStyles from '../styles/header.module.scss'

// images
import stLogo from 'public/images/sol-trading-logo.gif'

// APIs
import {
    getCategoriesTree,
    cancelGetCategoriesTreeApi,
} from 'utlis/Apis/Categories_API'

// app messages
import {
    UNKNOWN_ERROR_OCCURED,
    ERROR_WHILE__NAME,
} from 'utlis/AppMessages/AppMessages'

function HeaderMenu(props) {

    const [categories, setCategories] = useState([])
    const [categoriesLoading, setCategoriesLoading] = useState(false)

    // functions
    // get categories list
    const getCategoriesList = () => {
        // enable categories list loading
        setCategoriesLoading(true)

        // getting categories tree
        getCategoriesTree(props.currentUser.userToken).then(res => {
            // disabling categories list loading
            setCategoriesLoading(false)

            const catsData = res.data

            // if request is success
            if (catsData.success) {
                // settings categories
                setCategories(catsData.data)
            }

            // if request is not succeed
            if (catsData.error) {
                console.log(UNKNOWN_ERROR_OCCURED, res)
            }
        }).catch(err => {
            console.log(`${ERROR_WHILE__NAME} getCategoriesTree `, err.message)
        })
    }

    useEffect(() => {
        console.log("v ", props)
        return () => { }
    }, [props])


    return (
        <div id={headerStyles["main-bar-wrapper"]}>
            <Container>
                <div className={`${headerStyles["main-bar"]} d-flex flex-wrap align-items-center py-2`}>
                    {/* logo */}
                    <div className={headerStyles["mb_logo"]}>
                        <Link href="/home">
                            <a className="text-decoration-none">
                                <Image src={stLogo} alt="logo" />
                            </a>
                        </Link>
                    </div>

                    {/* menu */}
                    <div className="mb_menu media-body px-3">
                        <div className={`${headerStyles["st-menu1-in-head"]} st-menu1`}>
                            {/* main menu */}
                            <ul className="st-menu-nav list-unstyled d-flex flex-wrap justify-content-center">
                                <li className={`${headerStyles["st-menu-nav-item-in-head"]} st-menu-nav-item position-relative`}>
                                    <Link href="/home">
                                        <a className="st-menu-nav-link d-block text-decoration-none text-uppercase">home</a>
                                    </Link>
                                </li>
                                <li className={`${headerStyles["st-menu-nav-item-in-head"]} st-menu-nav-item position-relative`}>
                                    <Link href="/content/about-us">
                                        <a className="st-menu-nav-link d-block text-decoration-none text-uppercase">about us</a>
                                    </Link>
                                </li>
                                <li className={`${headerStyles["st-menu-nav-item-in-head"]} st-menu-nav-item position-relative`}>
                                    <Link href="/home">
                                        <a className="st-menu-nav-link d-block text-decoration-none text-uppercase">products</a>
                                    </Link>
                                    {/* MENU */}
                                    <ul className={`${headerStyles["st-sub-menu-nav-in-head"]} st-sub-menu-nav list-unstyled position-absolute`}>
                                        <li className="st-sub-menu-nav-item position-relative">
                                            <Link href="/products/category-1/">
                                                <a className="st-sub-menu-nav-link d-block text-decoration-none text-uppercase d-flex align-items-center">
                                                    <span className="media-body">Category 1</span>
                                                    <FeatherIcon
                                                        icon="chevron-right"
                                                        size="15"
                                                        className="icon text-center d-flex align-items-center justify-content-center"
                                                        style={{ top: 1 }} />
                                                </a>
                                            </Link>
                                            {/* SUB MENU */}
                                            <ul className={`${headerStyles["st-sub-menu-nav-in-head"]} st-sub-menu-nav list-unstyled position-absolute`}>
                                                <li className="st-sub-menu-nav-item position-relative">
                                                    <Link href="/products/category-1/sub-category-1">
                                                        <a className="st-sub-menu-nav-link d-block text-decoration-none d-flex align-items-center">
                                                            <span className="media-body">Sub Category 1</span>
                                                            {/* <FeatherIcon
                                                            icon="chevron-right"
                                                            size="15"
                                                            className="icon text-center d-flex align-items-center justify-content-center"
                                                            style={{ top: 1 }} /> */}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="st-sub-menu-nav-item position-relative">
                                                    <Link href="/products/category-1/sub-category-2">
                                                        <a className="st-sub-menu-nav-link d-block text-decoration-none d-flex align-items-center">
                                                            <span className="media-body">Sub Category 2</span>
                                                            {/* <FeatherIcon
                                                            icon="chevron-right"
                                                            size="15"
                                                            className="icon text-center d-flex align-items-center justify-content-center"
                                                            style={{ top: 1 }} /> */}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="st-sub-menu-nav-item position-relative">
                                                    <Link href="/products/category-1/sub-category-3">
                                                        <a className="st-sub-menu-nav-link d-block text-decoration-none d-flex align-items-center">
                                                            <span className="media-body">Sub Category 3</span>
                                                            {/* <FeatherIcon
                                                            icon="chevron-right"
                                                            size="15"
                                                            className="icon text-center d-flex align-items-center justify-content-center"
                                                            style={{ top: 1 }} /> */}
                                                        </a>
                                                    </Link>

                                                </li>
                                                <li className="st-sub-menu-nav-item position-relative">
                                                    <Link href="/products/category-1/sub-category-4">
                                                        <a className="st-sub-menu-nav-link d-block text-decoration-none d-flex align-items-center">
                                                            <span className="media-body">Sub Category 4</span>
                                                            {/* <FeatherIcon
                                                            icon="chevron-right"
                                                            size="15"
                                                            className="icon text-center d-flex align-items-center justify-content-center"
                                                            style={{ top: 1 }} /> */}
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="st-sub-menu-nav-item position-relative">
                                            <Link href="/products/category-2/">
                                                <a className="st-sub-menu-nav-link d-block text-decoration-none text-uppercase d-flex align-items-center">
                                                    <span className="media-body">Category 2</span>
                                                    {/* <FeatherIcon
                                                    icon="chevron-right"
                                                    size="15"
                                                    className="icon text-center d-flex align-items-center justify-content-center"
                                                    style={{ top: 1 }} /> */}
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="st-sub-menu-nav-item position-relative">
                                            <Link href="/products/category-3/">
                                                <a className="st-sub-menu-nav-link d-block text-decoration-none text-uppercase d-flex align-items-center">
                                                    <span className="media-body">Category 3</span>
                                                    {/* <FeatherIcon
                                                    icon="chevron-right"
                                                    size="15"
                                                    className="icon text-center d-flex align-items-center justify-content-center"
                                                    style={{ top: 1 }} /> */}
                                                </a>
                                            </Link>

                                        </li>
                                        <li className="st-sub-menu-nav-item position-relative">
                                            <Link href="/products/category-4/">
                                                <a className="st-sub-menu-nav-link d-block text-decoration-none text-uppercase d-flex align-items-center">
                                                    <span className="media-body">Category 4</span>
                                                    <FeatherIcon
                                                        icon="chevron-right"
                                                        size="15"
                                                        className="icon text-center d-flex align-items-center justify-content-center"
                                                        style={{ top: 1 }} />
                                                </a>
                                            </Link>
                                            {/* SUB MENU */}
                                            <ul className={`${headerStyles["st-sub-menu-nav-in-head"]} st-sub-menu-nav list-unstyled position-absolute`}>
                                                <li className="st-sub-menu-nav-item position-relative">
                                                    <Link href="/products/category-4/sub-category-1">
                                                        <a className="st-sub-menu-nav-link d-block text-decoration-none d-flex align-items-center">
                                                            <span className="media-body">Sub Category 1</span>
                                                            {/* <FeatherIcon
                                                            icon="chevron-right"
                                                            size="15"
                                                            className="icon text-center d-flex align-items-center justify-content-center"
                                                            style={{ top: 1 }} /> */}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="st-sub-menu-nav-item position-relative">
                                                    <Link href="/products/category-4/sub-category-2">
                                                        <a className="st-sub-menu-nav-link d-block text-decoration-none d-flex align-items-center">
                                                            <span className="media-body">Sub Category 2</span>
                                                            {/* <FeatherIcon
                                                            icon="chevron-right"
                                                            size="15"
                                                            className="icon text-center d-flex align-items-center justify-content-center"
                                                            style={{ top: 1 }} /> */}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="st-sub-menu-nav-item position-relative">
                                                    <Link href="/products/category-4/sub-category-3">
                                                        <a className="st-sub-menu-nav-link d-block text-decoration-none d-flex align-items-center">
                                                            <span className="media-body">Sub Category 3</span>
                                                            {/* <FeatherIcon
                                                            icon="chevron-right"
                                                            size="15"
                                                            className="icon text-center d-flex align-items-center justify-content-center"
                                                            style={{ top: 1 }} /> */}
                                                        </a>
                                                    </Link>

                                                </li>
                                                <li className="st-sub-menu-nav-item position-relative">
                                                    <Link href="/products/category-4/sub-category-4">
                                                        <a className="st-sub-menu-nav-link d-block text-decoration-none d-flex align-items-center">
                                                            <span className="media-body">Sub Category 4</span>
                                                            {/* <FeatherIcon
                                                            icon="chevron-right"
                                                            size="15"
                                                            className="icon text-center d-flex align-items-center justify-content-center"
                                                            style={{ top: 1 }} /> */}
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`${headerStyles["st-menu-nav-item-in-head"]} st-menu-nav-item position-relative`}>
                                    <a className="st-menu-nav-link d-block text-decoration-none text-uppercase">contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* search */}
                    <div className={headerStyles["mb_search"]}>
                        <div className="st-form st-form-rounded st-form-with-icon-right position-relative">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button type="submit" className={`${headerStyles["mb_search_icon"]} icon no-browser-style position-absolute cursor-pointer`} style={{ lineHeight: 0 }}>
                                <FeatherIcon
                                    icon="search"
                                    size="17" />
                            </button>
                        </div>
                    </div>


                </div>
            </Container>
        </div>
    )
}

const getDataFromStore = state => {
    return {
        currentUser: state.auth.currentUser,
    };
}

export default connect(getDataFromStore, null)(HeaderMenu)