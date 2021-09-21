import React, { useState } from "react";

// checkout styles
import checkoutStyles from "../styles/checkout.module.scss";

// formik
import {
    useFormik, //hook for functonal components
} from "formik";

// yup
import * as Yup from "yup";

// inputs
import AppFormikInput from "utlis/helpers/forms/AppFormikInput";

export default function ShippingMethod() {
    // states
    const [inpVal, setInpVal] = useState("credit-card");
    const [creditCardViewVisibility, setCreditCardViewVisibility] =
        useState(false);

    // on value change
    const handleValueChange = (ev) => {
        const newInpVal = ev.target.value;
        if (newInpVal) {
            setInpVal(newInpVal);

            if (newInpVal === "credit-card") {
                setCreditCardViewVisibility(true);
            }
        }
    };

    // initial form values
    const initialFormValues = {
        nameOnCard: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        zipCode: "",
    };

    // handle form validations
    const formValidationSchema = Yup.object({
        nameOnCard: Yup.string().required("This field is required"),
        cardNumber: Yup.number()
            .min(16, "The credit card number should be at least 16 digits")
            .required("This field is required"),
        expiryDate: Yup.string().required("This field is required"),
        cvv: Yup.number()
            .min(16, "The CVV should contain atleast 3 digits")
            .required("This field is required"),
        zipCode: Yup.string().required("This field is required"),
    });

    const onFormSubmit = (values) => {
        // if all the values present
        if (values) {
            // moving to the show shipping info page
            window.scrollTo(0, 0);
            showShippingInfo();
        }
    };

    // formik hook
    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: formValidationSchema,
        onSubmit: onFormSubmit,
        enableReinitialize: true,
    });

    return (
        <div className={`${checkoutStyles["tab-item"]}`}>
            <div className={`${checkoutStyles["heading"]}`}>
                <p className="text-capitalize st-fs-20 mb-1">Shipping Method</p>
            </div>

            {/* shipping info content */}
            <div className={`${checkoutStyles["shipping-method-content"]}`}>
                <p className="desc st-fw-600 st-fs-14 mb-2">
                    Please select the preferred FedEx shipping Service
                </p>

                {/* item */}
                <div className="item mb-2">
                    <label className="st-radio d-inline-flex cursor-pointer">
                        <input
                            type="radio"
                            name="payment-method"
                            className="d-none"
                            value="credit-card"
                            checked={inpVal === "credit-card"}
                            onChange={handleValueChange}
                        />
                        <div className="round"></div>
                        <span className="text media-body st-fw-600 st-fs-14 position-relative">
                            Credit Card
                        </span>
                    </label>
                </div>

                {/* item */}
                <div className="item mb-2">
                    <label className="st-radio d-inline-flex cursor-pointer">
                        <input
                            type="radio"
                            name="payment-method"
                            className="d-none"
                            value="paypal"
                            checked={inpVal === "paypal"}
                            onChange={handleValueChange}
                        />
                        <div className="round"></div>
                        <span className="text media-body st-fw-600 st-fs-14 position-relative">
                            Paypal
                        </span>
                    </label>
                </div>

                {/* item */}
                <div className="item mb-2">
                    <label className="st-radio d-inline-flex cursor-pointer">
                        <input
                            type="radio"
                            name="payment-method"
                            className="d-none"
                            value="fedex-ground"
                            checked={inpVal === "fedex-ground"}
                            onChange={handleValueChange}
                        />
                        <div className="round"></div>
                        <span className="text media-body st-fw-600 st-fs-14 position-relative">
                            FEDEX GROUND
                        </span>
                    </label>
                </div>

                {/* item */}
                <div className="item mb-2">
                    <label className="st-radio d-inline-flex cursor-pointer">
                        <input
                            type="radio"
                            name="payment-method"
                            className="d-none"
                            value="first-overnight"
                            checked={inpVal === "first-overnight"}
                            onChange={handleValueChange}
                        />
                        <div className="round"></div>
                        <span className="text media-body st-fw-600 st-fs-14 position-relative">
                            FIRST OVERNIGHT
                        </span>
                    </label>
                </div>

                {/* credit card info */}
                {inpVal === "credit-card" || creditCardViewVisibility ? (
                    <div
                        className={`${checkoutStyles["add-credit-card-details-content"]} mt-3`}
                    >
                        <div className={`${checkoutStyles["heading"]} mb-2`}>
                            <p className="text-capitalize st-fs-19 mb-0">
                                Add Credit Card Information
                            </p>
                        </div>
                        <form
                            onSubmit={formik.handleSubmit}
                            noValidate
                            autoComplete="off"
                        >
                            <div className="d-flex flex-wrap">
                                {/* form field */}
                                <AppFormikInput
                                    inputType={"text"}
                                    formik={formik} // formik object
                                    stFormClass={"ct w-100 mb-2"} // class name for main wrapper
                                    labelName={"Name on card"} // label name
                                    isRequired={false} // is this field is required or not to show the red star sign
                                    placeholder={"Name on card"} // placeholder for the input
                                    formikFieldName={"nameOnCard"} // important: formik value name for the input
                                />

                                {/* form field */}
                                <AppFormikInput
                                    inputType={"text"}
                                    formik={formik} // formik object
                                    stFormClass={"ct w-100 mb-2"} // class name for main wrapper
                                    labelName={"Credit Card Number"} // label name
                                    isRequired={false} // is this field is required or not to show the red star sign
                                    placeholder={"Credit Card Number"} // placeholder for the input
                                    formikFieldName={"creditCardNumber"} // important: formik value name for the input
                                />

                                {/* form field */}
                                <AppFormikInput
                                    inputType={"text"}
                                    formik={formik} // formik object
                                    stFormClass={"lt mb-2"} // class name for main wrapper
                                    labelName={"Expiry Date"} // label name
                                    isRequired={false} // is this field is required or not to show the red star sign
                                    placeholder={"Expiry Date"} // placeholder for the input
                                    formikFieldName={"expiryDate"} // important: formik value name for the input
                                />

                                {/* form field */}
                                <AppFormikInput
                                    inputType={"text"}
                                    formik={formik} // formik object
                                    stFormClass={"rt mb-2"} // class name for main wrapper
                                    labelName={"CVV"} // label name
                                    isRequired={false} // is this field is required or not to show the red star sign
                                    placeholder={"CVV"} // placeholder for the input
                                    formikFieldName={"cvv"} // important: formik value name for the input
                                />

                                {/* form field */}
                                <AppFormikInput
                                    inputType={"text"}
                                    formik={formik} // formik object
                                    stFormClass={"ct w-100 mb-2"} // class name for main wrapper
                                    labelName={"Zip Code"} // label name
                                    isRequired={false} // is this field is required or not to show the red star sign
                                    placeholder={"Zip Code"} // placeholder for the input
                                    formikFieldName={"zipCode"} // important: formik value name for the input
                                />
                            </div>
                        </form>
                    </div>
                ) : null}

                <div className="submit-btn border-top mt-3 pt-3 w-100 d-flex justify-content-end">
                    <button type="submit" className="st-btn st-fw-600">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
