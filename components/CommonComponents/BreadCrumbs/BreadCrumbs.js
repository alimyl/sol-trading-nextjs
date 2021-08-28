import React from 'react'

// nextjs - link
import Link from 'next/link'

// bootstrap
import {
    Container,
} from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// breadcrumbs styles
import breadcrumbsStyles from './styles/breadcrumbs.module.scss'

export default function BreadCrumbs(props) {
    const { currentRouteSingle } = props
    return (
        <div id={breadcrumbsStyles["st-breadcrumbs-wrapper"]} className="">
            <Container>
                <div className={`${breadcrumbsStyles["st-breadcrumbs"]} d-flex flex-wrap py-3`}>
                    {/* item */}
                    <div className={`${breadcrumbsStyles["item"]} position-relative`}>
                        <Link href="/home">
                            <a className={`${breadcrumbsStyles["st-breadcrumbs-link"]} text-decoration-none text-capitalize st-fs-14 st-text-dark d-flex`}>
                                <FeatherIcon
                                    icon="home"
                                    size="13"
                                    className={`${breadcrumbsStyles["icon"]} me-2 mt-1`} />
                                <span>Home</span>
                            </a>
                        </Link>
                    </div>

                    {
                        /* CURRENT ROUTE */
                        (currentRouteSingle && Object.keys(currentRouteSingle).length > 0) && (
                            <div className={`${breadcrumbsStyles["item"]} position-relative`}>
                                <Link href={currentRouteSingle.routeUrl && currentRouteSingle.routeUrl}>
                                    <a className={`${breadcrumbsStyles["st-breadcrumbs-link"]} text-decoration-none text-capitalize st-fs-14 st-text-dark d-flex`}>
                                        <span>{currentRouteSingle.routeName}</span>
                                    </a>
                                </Link>
                            </div>
                        )
                    }

                    {
                        /* ALL ROUTE ARRAY */
                        props.currentRouteArray && props.currentRouteArray.map((item, key) => (
                            <div key={key} className={`${breadcrumbsStyles["item"]} position-relative`}>
                                <Link href={item.routeUrl && item.routeUrl}>
                                    <a className={`${breadcrumbsStyles["st-breadcrumbs-link"]} text-decoration-none text-capitalize st-fs-14 st-text-dark d-flex`}>
                                        <span>{item.routeName && item.routeName}</span>
                                    </a>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </Container>

        </div>
    )
}
