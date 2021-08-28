import React, { useState } from 'react'

// bootstrap
import {
    Container,
} from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// header styles
import headerStyles from '../styles/header.module.scss'

// imports
import HeaderCart from './HeaderCart'

// main component function
function HeaderTopBar() {
    // state variables
    const [cartDropdownVisibility, setcartDropdownVisibility] = useState(false)

    // show cart
    const showCartDropdown = () => {
        console.log("cart shown")
        setcartDropdownVisibility(true)
    }

    // hide cart
    const hideCartDropdown = () => {
        console.log("cart hidden")
        setcartDropdownVisibility(false)
    }

    return (
        <div id={headerStyles["top-bar-wrapper"]} className="st-bg-light-gray">
            <Container>
                <div className={`${headerStyles["top-bar"]} d-flex flex-wrap py-2`}>
                    {/* lt sec */}
                    <div className="lt-sec">
                        <div className="inner d-flex align-items-center">
                            {/* link */}
                            <a href="callto:(917) 775-6712"
                                className="htb_link text-decoration-none st-fs-13 st-text-light d-flex align-items-center me-3">
                                <FeatherIcon
                                    icon="phone-call"
                                    size="15"
                                    className="position-relative me-2"
                                    style={{ top: 1 }} />
                                <span>(917) 775-6712</span>
                            </a>

                            {/* link */}
                            <a href="mailto:info@soltradingusa.com"
                                className="htb_link text-decoration-none st-fs-13 st-text-light d-flex align-items-center">
                                <FeatherIcon
                                    icon="mail"
                                    size="15"
                                    className="position-relative me-2"
                                    style={{ top: 1 }} />
                                <span>info@soltradingusa.com</span>
                            </a>
                        </div>
                    </div>

                    {/* rt sec */}
                    <div className="rt-sec ms-auto">
                        <div className="inner d-flex align-items-center">
                            {/* link */}
                            <a href="/"
                                className="htb_link text-decoration-none st-fs-13 st-text-light d-flex align-items-center me-3">
                                <FeatherIcon
                                    icon="user"
                                    size="15"
                                    className="position-relative me-2"
                                    style={{ top: 1 }} />
                                <span>Login</span>
                            </a>

                            {/* link */}
                            <a href="/"
                                className="htb_link text-decoration-none st-fs-13 st-text-light d-flex align-items-center me-3">
                                <FeatherIcon
                                    icon="user-plus"
                                    size="15"
                                    className="position-relative me-2"
                                    style={{ top: 1 }} />
                                <span>Register</span>
                            </a>

                            <div
                                className={`${headerStyles["cart"]} position-relative ${cartDropdownVisibility ? headerStyles["cart-display"] : headerStyles["cart-hidden"]}`}
                                onMouseEnter={showCartDropdown}
                                onMouseLeave={hideCartDropdown}
                            >
                                <a href="/"
                                    className="htb_link text-decoration-none st-fs-13 st-text-light d-flex align-items-center">
                                    <FeatherIcon
                                        icon="shopping-cart"
                                        size="15"
                                        className="position-relative me-2"
                                        style={{ top: 1 }} />
                                    <span>(0)</span>
                                </a>

                                {/* cart dropdown */}
                                <HeaderCart />

                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HeaderTopBar