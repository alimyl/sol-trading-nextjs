import React from "react";

// next - head
import Head from "next/head";

// homepage
import Homepage from "components/Homepage";

// main component function
export default function Home() {
    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Home</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <Homepage />
        </React.Fragment>
    );
}