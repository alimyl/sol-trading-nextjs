import React from "react";

// next - head
import Head from "next/head";

// contact
import ForgotPassword from "components/Auth/ForgotPassword";

function ForgotPasswordPage() {
    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Forgot Password</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <ForgotPassword />
        </React.Fragment>
    );
}

export default ForgotPasswordPage;
