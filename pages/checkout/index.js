import React from "react";

// next - head
import Head from "next/head";

// contact
import Checkout from "components/Checkout";

function CheckoutPage() {
    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Checkout</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <Checkout />
        </React.Fragment>
    );
}

export default CheckoutPage;
