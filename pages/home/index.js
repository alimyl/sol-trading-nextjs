import React, { useEffect } from "react";

// next - head
import Head from "next/head";

// homepage
import Homepage from "components/Homepage";

// redux
import { connect } from "react-redux";

// helpers functions
import { getCurrentUserFromLocalStorage } from "utlis/helpers/Common/CommonHelperFunctions";

// actions
import {
    saveCommonTokenToStore,
    saveCurrentUserToStore,
} from "redux/actions/actionAuth";

// main component function
function Home(props) {
    // on page load redirecting to the homepage
    useEffect(() => {
        // CHECKING IF THE USER IS ALREADY LOGGED IN
        const currentUser = getCurrentUserFromLocalStorage();

        // if user exists
        if (currentUser) {
            // saving user details to the global store
            props.saveCommonTokenToStore(currentUser.userToken);
            props.saveCurrentUserToStore(currentUser);
        } else {
            // saving user details to the global store
            props.saveCommonTokenToStore("");
            props.saveCurrentUserToStore(null);
        }
    }, []);

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

const getDataFromStore = (state) => {
    return {
        isUserAuthenticated: state.auth.isUserAuthenticated,
    };
};

const dispatchActionsToProps = (dispatch) => {
    return {
        saveCommonTokenToStore: (comonToken) =>
            dispatch(saveCommonTokenToStore(comonToken)),
        saveCurrentUserToStore: (currentUser) =>
            dispatch(saveCurrentUserToStore(currentUser)),
    };
};

export default connect(getDataFromStore, dispatchActionsToProps)(Home);
