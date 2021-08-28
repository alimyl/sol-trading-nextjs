import React, { useState, useEffect } from 'react'

// next - head
import Head from 'next/head'

// nextjs - router
import { useRouter } from 'next/router'

// listing page
import ProductView from 'components/Products/pages/ProductView'

function productId() {
    // consts
    const router = useRouter()

    // states
    const [currentProduct, setCurrentProduct] = useState("")

    // getting current product name
    useEffect(() => {
        const { productId } = router.query

        if (productId) {
            setCurrentProduct(productId)
        }
    }, [router])

    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Buy {currentProduct}</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <ProductView productId={currentProduct} />
        </React.Fragment>
    )
}

export default productId