import React from "react";

// redux
// import { connect } from "react-redux";

import reduxStore from "redux/store/store";

// next - head
import Head from "next/head";
// nextjs - router
// import { useRouter } from "next/router";

// react toastify
// import { toast } from "react-toastify";

// APIs products
// import { getProducts } from "utlis/Apis/Products_API";

// listing page
import ProductsListing from "components/Products/pages/ProductsListing";

function Category(props) {
    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | Products</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* actual body of the page */}
            <ProductsListing pageProps={props} />
        </React.Fragment>
    );
}

// const getDataFromStore = (state) => {
//     return {
//         commonToken: state.auth.commonToken,
//     };
// };

// const dispatchActionsToProps = (dispatch) => {
//     return {
//         func: (param) => dispatch(func(param)),
//     };
// };

// export default connect(getDataFromStore, null)(Category);
export default Category;

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: { categoryId: "accessories" },
//             },
//         ],
//         fallback: false,
//     };
// }

// export async function getStaticProps(context) {
//     const { params } = context;
//     // url params
//     const URLParams = "category_id=" + params.categoryId + "&limit=20";

//     console.log("commonTokenRedux ", reduxStore)

//     // returning data
//     return {
//         props: {
//             products: params,
//         },
//     };
// }
