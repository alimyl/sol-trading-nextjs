import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";

// nextjs - link
import Link from "next/link";

// bootstrap
import { Container, Spinner } from "react-bootstrap";

// checkout styles
import checkoutStyles from "./styles/checkout.module.scss";

// common components
import BreadCrumbs from "components/CommonComponents/BreadCrumbs";

// icons : feather
import FeatherIcon from "feather-icons-react";

// components
import CheckoutTabsView from "./includes/CheckoutTabsView";
import CheckoutSideView from "./includes/CheckoutSideView";

export default function Checkout(props) {
    // states
    const [currentRoute, setCurrentRoute] = useState({}); // { routeName: 'name of the route', routeUrl: 'url of the route' }

    // breadcrumbs generating
    useEffect(() => {
        // setting current route
        setCurrentRoute({
            routeName: "Checkout",
            sku: "checkout",
            routeUrl: "/checkout",
        });
    }, []);

    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs currentRouteSingle={currentRoute ?? currentRoute} />

            {/* cart section */}
            <section
                id={checkoutStyles["checkout-wrapper"]}
                className="st-def-mar-B"
            >
                <Container>
                    <div
                        className={`${checkoutStyles["checkout-main"]} position-relative d-flex`}
                    >
                        {/* tabs view */}
                        <CheckoutTabsView parentProps={props} />

                        {/* side view */}
                        <CheckoutSideView parentProps={props} />
                    </div>
                </Container>
            </section>
        </div>
    );
}
