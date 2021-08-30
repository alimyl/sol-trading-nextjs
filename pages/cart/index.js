import React from "react";

// next - head
import Head from "next/head";

// contact
import Cart from "components/Cart";

export default function index() {
    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Cart</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <Cart />
        </React.Fragment>
    );
}
