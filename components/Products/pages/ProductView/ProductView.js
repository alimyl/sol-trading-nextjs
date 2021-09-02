import React, { useState, useEffect, useCallback } from 'react'

// nextjs - router
import { useRouter } from "next/router";

// react toastify
import { toast } from 'react-toastify';

// includes
import RelatedProducts from './includes/RelatedProducts';
import ProductViewSingle from './includes/ProductViewSingle';

// breadcrumbs
import BreadCrumbs from 'components/CommonComponents/BreadCrumbs';



// APIs
import {
    getProductDetails,
    cancelGetProductDetailsApi,
    getVariationDetails,
    cancelGetVariationDetailsApi,
} from 'utlis/Apis/Products_API'

// app messages
import {
    ERROR_WHILE__NAME,
    UNKNOWN_ERROR_OCCURED,
    ERROR_WHILE_FETCHING_PRODUCTS,
} from 'utlis/AppMessages/AppMessages'

export default function ProductView(props) {
    // consts
    const router = useRouter();
    const { productId } = props
    const { id } = router.query;

    // states
    const [currentRouteArray, setCurrentRouteArray] = useState([]) // [{ routeName: 'name of the route', routeUrl: 'url of the route' }]
    const [currentCategoryState, setCurrentCategoryState] = useState({})

    const [productsDetailsLoading, setProductsDetailsLoading] = useState(false);
    const [productDetails, setProductDetails] = useState([])
    const [variantMainFields, setVariantMainFields] = useState([])

    // function to get categories
    const getProduct = useCallback(() => {
        if (id) {
            // enabling loading
            setProductsDetailsLoading(true)

            // getting data
            Promise.all([
                getProductDetails("12", id),
                getVariationDetails("12", id),
            ]).then(res => {
                // managing product details
                (function () {
                    const prodData = res[0].data
                    // console.log("prodData ", prodData)

                    // if request is success
                    if (prodData.success) {
                        setProductDetails(prodData.data)
                    }
                })();

                // managing variation details
                (function () {
                    const variationData = res[1].data
                    // console.log("variationData ", variationData)

                    // if request is success
                    if (variationData.success) {
                        let generatedVariantArray = []
                        variationData?.data?.forEach(item => {
                            generatedVariantArray.push({
                                display_type: item.display_type,
                                id: item.variation_id,
                                options: JSON.parse(item.options),
                                variation_name: item.variation_name,
                            })
                        })
                        // console.log("generatedVariantArray variationData ", generatedVariantArray)
                        // setting main variant section
                        setVariantMainFields(generatedVariantArray)
                    }
                })();

            }).catch(err => {
                console.log(`${ERROR_WHILE__NAME} getProductDetails `, err.message)

                // dismissing all the previous toasts first
                toast.dismiss();

                // showing the error message
                toast.error(UNKNOWN_ERROR_OCCURED, {
                    autoClose: 2500,
                    onClose: () => {
                        // disabling loading
                        setProductsDetailsLoading(false)
                    }
                })
            })
        }
    }, [id])

    // getting products
    useEffect(() => {
        // calling products and variations getter function
        getProduct()

        return () => {
            // canceling get products api when user leaves the component
            cancelGetProductDetailsApi && cancelGetProductDetailsApi()

            // canceling get variations api when user leaves the component
            cancelGetVariationDetailsApi && cancelGetVariationDetailsApi()
        }
    }, [getProduct])

    // generating breadcrumbs
    useEffect(() => {
        if (productId) {
            setCurrentRouteArray([{
                routeName: productId,
                routeUrl: `/product-details/${productId}?id=${id}`
            }])
        }
    }, [productId, id])

    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs
                currentRouteArray={currentRouteArray}
            />

            {/* product view */}
            <ProductViewSingle
                parentProps={props}

                productsDetailsLoading={productsDetailsLoading}
                productDetails={productDetails}
                variantMainFields={variantMainFields}
            />

            {/* related products */}
            <RelatedProducts
                parentProps={props}
                currentCategory={currentCategoryState}
            />
        </div>
    )
}
