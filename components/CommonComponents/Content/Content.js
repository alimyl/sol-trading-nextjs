import React, { useState, useEffect } from 'react'

// bootstrap
import {
    Container
} from 'react-bootstrap';

// content styles
import contentStyles from './styles/content.module.scss'

// breadcrumbs
import BreadCrumbs from 'components/CommonComponents/BreadCrumbs';


export default function Content(props) {
    // consts
    const { currentPage, pageContent } = props

    // states
    const [currentRouteArray, setCurrentRouteArray] = useState([]) // [{ routeName: 'name of the route', routeUrl: 'url of the route' }]

    // generating breadcrumbs
    useEffect(() => {
        console.log("props ", props)
        if (currentPage) {
            setCurrentRouteArray([{
                routeName: currentPage.split("-").join(" "),
                routeUrl: '/content/' + currentPage
            }])
        }
    }, [currentPage])



    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs
                currentRouteArray={currentRouteArray}
            />

            <div id={contentStyles["content-page-wrapper"]} className="py-3">
                <Container>
                    <div className={contentStyles["content-page"]}>
                        <div dangerouslySetInnerHTML={{ __html: pageContent }}></div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
