import React from "react";

// checkout styles
import checkoutStyles from "../styles/checkout.module.scss";

export default function Payment() {
    return (
        <div className={`${checkoutStyles["tab-item"]}`}>
            <div className={`${checkoutStyles["heading"]}`}>
                <p className="text-capitalize st-fs-20 mb-0">Payment</p>
            </div>
        </div>
    );
}
