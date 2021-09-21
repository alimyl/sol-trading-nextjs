import React from "react";

// checkout styles
import checkoutStyles from "../styles/checkout.module.scss";

// formik
import {
    useFormik, //hook for functonal components
} from 'formik'

// yup
import * as Yup from 'yup'

// inputs
import AppFormikInput from "utlis/helpers/forms/AppFormikInput";
import AppFormikTextarea from "utlis/helpers/forms/AppFormikTextarea";
import AppFormikSelect from "utlis/helpers/forms/AppFormikSelect";

export default function BillingInfo(props) {

    // props
    const { showShippingInfo } = props

    // initial form values
    const initialFormValues = {
        businessName: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        streetAddress: "",
        state: "",
        city: "",
        zipCode: "",
        country: "",
    }

    // handle form validations
    const formValidationSchema = Yup.object({
        businessName: Yup.string(),
        firstName: Yup.string().required('This field is required'),
        lastName: Yup.string().required('This field is required'),
        email: Yup.string().required('This field is required'),
        mobile: Yup.string().required('This field is required'),
        address: Yup.string().required('This field is required'),
        streetAddress: Yup.string(),
        state: Yup.string().required('This field is required'),
        city: Yup.string().required('This field is required'),
        zipCode: Yup.string().required('This field is required'),
        country: Yup.string().required('This field is required'),
    })

    const onFormSubmit = values => {
        // if all the values present
        if (values) {
            // moving to the show shipping info page
            window.scrollTo(0, 0)
            showShippingInfo()
        }
    }

    // formik hook
    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: formValidationSchema,
        onSubmit: onFormSubmit,
        enableReinitialize: true
    })


    return (
        <div className={`${checkoutStyles["tab-item"]}`}>
            <div className={`${checkoutStyles["heading"]}`}>
                <p className="text-capitalize st-fs-20 mb-0">billing information</p>
            </div>

            {/* billing info form */}
            <div className={`${checkoutStyles["billing-info-form"]}`}>
                <form
                    onSubmit={formik.handleSubmit}
                    noValidate
                    autoComplete="off">
                    <div className="d-flex flex-wrap">
                        {/* form field */}
                        <AppFormikInput
                            inputType={"text"}
                            formik={formik} // formik object
                            stFormClass={"ct w-100 mb-2"} // class name for main wrapper
                            labelName={"Business Name"} // label name
                            isRequired={false} // is this field is required or not to show the red star sign
                            placeholder={"Business Name"} // placeholder for the input
                            formikFieldName={"businessName"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikInput
                            inputType={"text"}
                            formik={formik} // formik object
                            stFormClass={"lt mb-2"} // class name for main wrapper
                            labelName={"First Name"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"First Name"} // placeholder for the input
                            formikFieldName={"firstName"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikInput
                            inputType={"text"}
                            formik={formik} // formik object
                            stFormClass={"rt mb-2"} // class name for main wrapper
                            labelName={"Last Name"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"Last Name"} // placeholder for the input
                            formikFieldName={"lastName"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikInput
                            inputType={"text"}
                            formik={formik} // formik object
                            stFormClass={"lt mb-2"} // class name for main wrapper
                            labelName={"Email"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"Email"} // placeholder for the input
                            formikFieldName={"email"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikInput
                            inputType={"text"}
                            formik={formik} // formik object
                            stFormClass={"rt mb-2"} // class name for main wrapper
                            labelName={"Mobile"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"Mobile"} // placeholder for the input
                            formikFieldName={"mobile"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikTextarea
                            formik={formik} // formik object
                            stFormClass={"lt mb-2"} // class name for main wrapper
                            labelName={"Address"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"Address"} // placeholder for the input
                            formikFieldName={"address"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikTextarea
                            formik={formik} // formik object
                            stFormClass={"rt mb-2"} // class name for main wrapper
                            labelName={"Street Address"} // label name
                            isRequired={false} // is this field is required or not to show the red star sign
                            placeholder={"Street Address"} // placeholder for the input
                            formikFieldName={"streetAddress"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikSelect
                            formik={formik} // formik object
                            stFormClass={"lt mb-2"} // class name for main wrapper
                            labelName={"State"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"State"} // placeholder for the input
                            formikFieldName={"state"} // important: formik value name for the input
                        >
                            <option disabled>Select State</option>
                            <option value="1">Montana</option>
                            <option value="2">Missouri</option>
                        </AppFormikSelect>

                        {/* form field */}
                        <AppFormikInput
                            inputType={"text"}
                            formik={formik} // formik object
                            stFormClass={"rt mb-2"} // class name for main wrapper
                            labelName={"City"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"City"} // placeholder for the input
                            formikFieldName={"city"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikInput
                            inputType={"text"}
                            formik={formik} // formik object
                            stFormClass={"lt mb-2"} // class name for main wrapper
                            labelName={"Zip Code"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"Zip Code"} // placeholder for the input
                            formikFieldName={"zipCode"} // important: formik value name for the input
                        />

                        {/* form field */}
                        <AppFormikSelect
                            formik={formik} // formik object
                            stFormClass={"rt mb-2"} // class name for main wrapper
                            labelName={"Country"} // label name
                            isRequired={true} // is this field is required or not to show the red star sign
                            placeholder={"Country"} // placeholder for the input
                            formikFieldName={"country"} // important: formik value name for the input
                        >
                            <option disabled>Select Country</option>
                            <option value="1">United States</option>
                            <option value="2">Canada</option>
                        </AppFormikSelect>

                        <div className="submit-btn border-top mt-3 pt-3 w-100 d-flex justify-content-end">
                            <button type="submit" className="st-btn st-fw-600">Continue</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}
