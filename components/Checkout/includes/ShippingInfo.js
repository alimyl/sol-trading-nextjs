import React, { useState } from "react";

// next link
import Link from "next/link";

// icons : feather
import FeatherIcon from "feather-icons-react";

// react bootstrap
import { Modal, Spinner } from "react-bootstrap";

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
import AppFormikTextarea from "utlis/helpers/forms/AppFormikTextarea";
import AppFormikSelect from "utlis/helpers/forms/AppFormikSelect";

// temprory files
import { userAddressArray } from "../TEMP_FILES";

export default function ShippingInfo(props) {
    // states
    const [userAddresses, setUserAddresses] = useState(userAddressArray);
    const [modalShow, setModalShow] = useState(false);
    const [modalType, setModalType] = useState("create");

    // moda show
    const showModal = (ev, type, id = null) => {
        ev.preventDefault();
        if (type) {
            // setting modal type
            setModalType(type);

            // showing modal
            setModalShow(true);
        }

        if (id) {
            console.log("id ", id);
        }
    };

    // moda hide
    const hideModal = () => {
        setModalShow(false);
    };

    // on modal open
    const onModalEntered = () => {
        console.log("modalType", modalType);

        if (modalType === "edit") {
        }
    };

    // on modal open
    const onModalExited = () => {
        console.log("hidden", "modalType");
    };

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
    };

    // handle form validations
    const formValidationSchema = Yup.object({
        businessName: Yup.string(),
        firstName: Yup.string().required("This field is required"),
        lastName: Yup.string().required("This field is required"),
        email: Yup.string().required("This field is required"),
        mobile: Yup.string().required("This field is required"),
        address: Yup.string().required("This field is required"),
        streetAddress: Yup.string(),
        state: Yup.string().required("This field is required"),
        city: Yup.string().required("This field is required"),
        zipCode: Yup.string().required("This field is required"),
        country: Yup.string().required("This field is required"),
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
                <p className="text-capitalize st-fs-20 mb-0">Shipping Info</p>
            </div>

            {/* shipping info form */}
            <div className={`${checkoutStyles["shipping-info-form"]}`}>
                {/* address box */}
                <div
                    className={`${checkoutStyles["address-boxes"]} d-flex flex-wrap`}
                >
                    {
                        /* address box main */
                        userAddresses?.length && userAddresses.map(item => (
                            <React.Fragment key={item.id}>
                                <div className={`${checkoutStyles["address-box"]}`}>
                                    <div className={`${checkoutStyles["inner"]} bg-white border`}>
                                        {
                                            /* is default or not */
                                            item.isDefault ? (
                                                <p className="border-bottom d-flex align-items-center st-fw-700 st-fs-13">
                                                    <FeatherIcon
                                                        icon="check"
                                                        size="16"
                                                        className={`${checkoutStyles["icon"]} position-relative`}
                                                    />
                                                    <span className="ms-1">Default</span>
                                                </p>
                                            ) : null
                                        }

                                        {/* adress main */}
                                        <div className="mb-3">
                                            <div className="st-fs-13 mb-0">
                                                <div dangerouslySetInnerHTML={{ __html: item.address }}></div>
                                            </div>
                                        </div>

                                        {/* edit button */}
                                        <div className="btns d-flex">
                                            <a
                                                className="st-fw-600 st-fs-14 st-text-primary text-decoration-none cursor-pointer me-2"
                                                onClick={(ev) =>
                                                    showModal(
                                                        ev,
                                                        "edit",
                                                        item.id
                                                    )
                                                }
                                            >
                                                Edit
                                            </a>

                                            {
                                                /* is default or not */
                                                !item.isDefault ? (
                                                    <a
                                                        className="st-fw-600 st-fs-14 st-text-primary text-decoration-none cursor-pointer"
                                                    >
                                                        Make Default
                                                    </a>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                </div>

                            </React.Fragment>
                        ))
                    }

                    {/* new address */}
                    <div className="w-100">
                        <button
                            type="button"
                            className="st-btn st-fw-600 text-uppercase"
                            onClick={(ev) => showModal(ev, "add")}
                        >
                            Add new shipping address
                        </button>
                    </div>

                    {/* submit button */}
                    <div className="submit-btn border-top mt-3 pt-3 w-100 d-flex justify-content-end">
                        <button type="button" className="st-btn st-fw-600">
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                size="lg"
                centered
                show={modalShow}
                onHide={hideModal}
                onExited={onModalExited}
                onEntered={onModalEntered}
                className="st-modal"
            >
                {/* body */}
                <Modal.Body className="position-relative">
                    <form
                        onSubmit={formik.handleSubmit}
                        noValidate
                        autoComplete="off"
                    >
                        {/* modal header */}
                        <div className="st-modal-header d-flex align-items-center">
                            <p className="text-capitalize st-fw-600 st-fs-19 mb-0 media-body pe-3">
                                Shipping Info
                            </p>
                            <div
                                className="icon cursor-pointer"
                                onClick={hideModal}
                                title="close modal"
                            >
                                <FeatherIcon icon="x" size="16" />
                            </div>
                        </div>

                        {/* modal content */}
                        <div className="st-modal-content">
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
                            </div>
                        </div>

                        {/* modal footer */}
                        <div className="st-modal-footer d-flex justify-content-end">
                            <button
                                type="submit"
                                className="st-btn st-fw-600 text-uppercase"
                            >
                                Save Address
                            </button>
                        </div>
                    </form>

                    {/* div.loader */}
                    <div className="modal-loading position-absolute h-100 w-100 d-flex align-items-center justify-content-center">
                        <Spinner animation="border"></Spinner>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
