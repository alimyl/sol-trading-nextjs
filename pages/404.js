import React from "react";

// next - head
import Head from "next/head";

// listing page
import PageNotFoundPage from "components/PageNotFoundPage";

export default function PageNotFound() {
    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Page not found</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <PageNotFoundPage />
        </React.Fragment>
    );
}
