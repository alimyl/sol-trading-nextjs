import React, { useState } from "react";

// checkout styles
import checkoutStyles from "../styles/checkout.module.scss";

// icons : feather
import FeatherIcon from "feather-icons-react";

// tabs
import BillingInfo from "./BillingInfo";
import ShippingInfo from "./ShippingInfo";
import ShippingMethod from "./ShippingMethod";
import Payment from "./Payment";

export default function CheckoutTabsView() {
    // states
    const [currentTab, setCurrentTab] = useState("billingInfo");
    const [completedSteps, setCompletedSteps] = useState([]);

    // push to completed list
    const pushToCompleted = (str) => {
        if (str) {
            const alreadyExists = completedSteps?.find((it) => it === str);
            if (!alreadyExists) {
                // updating the complete list
                setCompletedSteps(str);
            }
        }
    };

    // pop from completed list
    const popFromCompleted = (str) => {
        if (str) {
            const filterList = completedSteps.filter((it) => it !== str);

            // updating the complete list
            setCompletedSteps(filterList);
        }
    };

    // tab click | BillingInfo
    const showBillingInfo = () => {
        // setting the selected tab
        setCurrentTab("billingInfo");
    };

    // tab click | ShippingInfo
    const showShippingInfo = () => {
        // setting the selected tab
        setCurrentTab("shippingInfo");
        // pushToCompleted("billingInfo");
    };

    // tab click | ShippingMethod
    const showShippingMethod = () => {
        // setting the selected tab
        setCurrentTab("shippingMethod");
    };

    // tab click | Payment
    const showPayment = () => {
        // setting the selected tab
        setCurrentTab("payment");
    };

    return (
        <div className={`${checkoutStyles["checkout-tabs-view"]} media-body`}>
            {/* tabs sec */}
            <div
                className={`${checkoutStyles["tabs-links-container"]} d-flex flex-wrap`}
            >
                {/* link */}
                <p
                    className={`${checkoutStyles["tabs-link"]} ${
                        currentTab === "billingInfo"
                            ? checkoutStyles["active"]
                            : ""
                    } 
                    ${
                        completedSteps?.find((it) => it === "billingInfo")
                            ? checkoutStyles["completed"]
                            : ""
                    } d-flex st-fs-13 cursor-pointer mb-0 me-3`}
                    onClick={showBillingInfo}
                >
                    <FeatherIcon
                        icon="check"
                        size="16"
                        className={`${checkoutStyles["icon"]} position-relative`}
                    />
                    <span
                        className={`${checkoutStyles["text"]} text-capitalize ms-1`}
                    >
                        Billing Info
                    </span>
                </p>

                {/* link */}
                <p
                    className={`${checkoutStyles["tabs-link"]} ${
                        currentTab === "shippingInfo"
                            ? checkoutStyles["active"]
                            : ""
                    }
                    ${
                        completedSteps?.find((it) => it === "shippingInfo")
                            ? checkoutStyles["completed"]
                            : ""
                    } d-flex st-fs-13 cursor-pointer mb-0 me-3`}
                    onClick={showShippingInfo}
                >
                    <FeatherIcon
                        icon="check"
                        size="16"
                        className={`${checkoutStyles["icon"]} position-relative`}
                    />
                    <span
                        className={`${checkoutStyles["text"]} text-capitalize ms-1`}
                    >
                        Shipping Info
                    </span>
                </p>

                {/* link */}
                <p
                    className={`${checkoutStyles["tabs-link"]} ${
                        currentTab === "shippingMethod"
                            ? checkoutStyles["active"]
                            : ""
                    }
                    ${
                        completedSteps?.find((it) => it === "shippingMethod")
                            ? checkoutStyles["completed"]
                            : ""
                    } d-flex st-fs-13 cursor-pointer mb-0 me-3`}
                    onClick={showShippingMethod}
                >
                    <FeatherIcon
                        icon="check"
                        size="16"
                        className={`${checkoutStyles["icon"]} position-relative`}
                    />
                    <span
                        className={`${checkoutStyles["text"]} text-capitalize ms-1`}
                    >
                        Shipping Method
                    </span>
                </p>

                {/* link */}
                <p
                    className={`${checkoutStyles["tabs-link"]} ${
                        currentTab === "payment" ? checkoutStyles["active"] : ""
                    }
                    ${
                        completedSteps?.find((it) => it === "payment")
                            ? checkoutStyles["completed"]
                            : ""
                    } d-flex st-fs-13 cursor-pointer mb-0 me-3`}
                    onClick={showPayment}
                >
                    <FeatherIcon
                        icon="check"
                        size="16"
                        className={`${checkoutStyles["icon"]} position-relative`}
                    />
                    <span
                        className={`${checkoutStyles["text"]} text-capitalize ms-1`}
                    >
                        Payment & Confirm Order
                    </span>
                </p>
            </div>

            {/* content sec */}
            <div
                className={`${checkoutStyles["content-container"]}`}
            >
                {
                    // BillingInfo
                    currentTab === "billingInfo" && (
                        <BillingInfo
                            showBillingInfo={showBillingInfo}
                            showShippingInfo={showShippingInfo}
                            showShippingMethod={showShippingMethod}
                            showPayment={showPayment}
                        />
                    )
                }
                {
                    // ShippingInfo
                    currentTab === "shippingInfo" && (
                        <ShippingInfo
                            showBillingInfo={showBillingInfo}
                            showShippingInfo={showShippingInfo}
                            showShippingMethod={showShippingMethod}
                            showPayment={showPayment}
                        />
                    )
                }
                {
                    // ShippingMethod
                    currentTab === "shippingMethod" && (
                        <ShippingMethod
                            showBillingInfo={showBillingInfo}
                            showShippingInfo={showShippingInfo}
                            showShippingMethod={showShippingMethod}
                            showPayment={showPayment}
                        />
                    )
                }
                {
                    // Payment
                    currentTab === "payment" && (
                        <Payment
                            showBillingInfo={showBillingInfo}
                            showShippingInfo={showShippingInfo}
                            showShippingMethod={showShippingMethod}
                            showPayment={showPayment}
                        />
                    )
                }
            </div>
        </div>
    );
}
