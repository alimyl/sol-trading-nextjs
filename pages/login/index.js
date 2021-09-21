import React from "react";

// next - head
import Head from "next/head";

// contact
import Login from "components/Auth/Login";

function LoginPage() {
    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Login</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <Login />
        </React.Fragment>
    );
}

export default LoginPage;
