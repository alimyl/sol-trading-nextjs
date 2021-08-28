import React, { useState, useEffect } from 'react'

// nextjs - link
import Link from 'next/link'
// nextjs - image
import Image from 'next/image'

// bootstrap
import {
    Container,
} from 'react-bootstrap'

// contact styles
import contactUsStyles from './styles/contact.module.scss'

// common components
import BreadCrumbs from 'components/CommonComponents/BreadCrumbs';
import PageBanner from 'components/CommonComponents/PageBanner';

export default function ContactUs() {
    // states
    const [currentRoute, setCurrentRoute] = useState({}) // { routeName: 'name of the route', routeUrl: 'url of the route' }


    // breadcrumbs generating
    useEffect(() => {
        // setting current route
        setCurrentRoute({
            routeName: "Contact Us",
            sku: "contactUs",
            routeUrl: '/contact-us'
        })
    }, [])

    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs
                currentRouteSingle={currentRoute ?? currentRoute}
            />

            {/* page banner */}
            <PageBanner />

            <section id={contactUsStyles["contact-us-wrapper"]} className="st-def-st-def-mar-TB">
                <Container>
                    <div className={`${contactUsStyles["contact-us"]}`}>

                    </div>
                </Container>
            </section>


        </div>
    )
}
