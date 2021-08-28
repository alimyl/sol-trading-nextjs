import React from 'react'

// next - head
import Head from 'next/head'

// listing page
import ProductsListing from 'components/Products/pages/ProductsListing'

function index() {
    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Products</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <ProductsListing />
        </React.Fragment>
    )
}

export default index