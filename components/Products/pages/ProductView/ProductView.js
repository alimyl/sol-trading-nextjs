import React, { useState, useEffect } from 'react'

// includes
import RelatedProducts from './includes/RelatedProducts';
import ProductViewSingle from './includes/ProductViewSingle';

// breadcrumbs
import BreadCrumbs from 'components/CommonComponents/BreadCrumbs';

export default function ProductView(props) {
    // consts
    const { productId } = props

    // states
    const [currentRouteArray, setCurrentRouteArray] = useState([]) // [{ routeName: 'name of the route', routeUrl: 'url of the route' }]
    const [currentCategoryState, setCurrentCategoryState] = useState({})

    // generating breadcrumbs
    useEffect(() => {
        if (productId) {
            setCurrentRouteArray([{
                routeName: productId,
                routeUrl: '/product-details/' + productId
            }])
        }
    }, [productId])

    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs
                currentRouteArray={currentRouteArray}
            />

            {/* product view */}
            <ProductViewSingle
                parentProps={props}
            />

            {/* related products */}
            <RelatedProducts
                parentProps={props}
                currentCategory={currentCategoryState}
            />
        </div>
    )
}
