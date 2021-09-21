import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";

// nextjs - link
import Link from "next/link";
// nextjs - image
import Image from "next/image";

// bootstrap
import { Container, Spinner } from "react-bootstrap";

// auth styles
import authStyles from "../styles/auth.module.scss";

// common components
import BreadCrumbs from "components/CommonComponents/BreadCrumbs";

// formik
import {
    useFormik, //hook for functonal components
} from "formik";

// yup
import * as Yup from "yup";

// inputs
import AppFormikInput from "utlis/helpers/forms/AppFormikInput";

// api work
import { userLogin } from "utlis/Apis/Auth_API";

export default function Login(props) {
    // states
    const [currentRoute, setCurrentRoute] = useState({}); // { routeName: 'name of the route', routeUrl: 'url of the route' }
    const [buttonLoading, setButtonLoading] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);

    // breadcrumbs generating
    useEffect(() => {
        // setting current route
        setCurrentRoute({
            routeName: "Login",
            sku: "login",
            routeUrl: "/login",
        });
    }, []);

    // initial form values
    const initialFormValues = {
        email: "",
        password: "",
    };

    // handle form validations
    const formValidationSchema = Yup.object({
        email: Yup.string().email().required("This field is required"),
        password: Yup.string()
            .min(6, "the password must be at least six characters long")
            .required("This field is required"),
    });

    const onFormSubmit = (values) => {
        // if all the values present
        if (values) {
            console.log("values ", values);

            // enabling button loading and disabling button
            setButtonDisable(true);
            setButtonLoading(true);

            // login the user API
            userLogin(values.email, values.password)
                .then((res) => {
                    console.log("userLogin res ", res);

                    // disabling button loading and enabling button
                    setButtonDisable(false);
                    setButtonLoading(false);
                })
                .catch((err) => {
                    console.log("userLogin err ", err);

                    // disabling button loading and enabling button
                    setButtonDisable(false);
                    setButtonLoading(false);
                });
        }
    };

    // formik hook
    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: formValidationSchema,
        onSubmit: onFormSubmit,
        // enableReinitialize: true
    });

    return (
        <div className="st-wrapper">
            {/* breadcrumbs */}
            <BreadCrumbs currentRouteSingle={currentRoute ?? currentRoute} />

            {/* cart section */}
            <section
                id={authStyles["auth-wrapper"]}
                className={`st-def-mar-TB ${authStyles["login-page"]}`}
            >
                <Container>
                    <div className={`${authStyles["auth-main"]}`}>
                        <div
                            className={`${authStyles["auth-view-container"]} mx-auto`}
                        >
                            {/* heading */}
                            <div className="st-heading-wrapper heading-sm text-center mb-4">
                                <p className="st-heading text-uppercase st-fw-700 mb-1">
                                    Log In
                                </p>
                                <p className="desc st-fs-16">
                                    Log In to access your account.
                                </p>
                            </div>

                            {/* content */}
                            <div className="content">
                                <form
                                    onSubmit={formik.handleSubmit}
                                    noValidate
                                    autoComplete="off"
                                >
                                    {/* form field */}
                                    <AppFormikInput
                                        inputType={"email"}
                                        formik={formik} // formik object
                                        stFormClass={"ct w-100 mb-2"} // class name for main wrapper
                                        labelName={"Email Address"} // label name
                                        isRequired={true} // is this field is required or not to show the red star sign
                                        placeholder={"Email Address"} // placeholder for the input
                                        formikFieldName={"email"} // important: formik value name for the input
                                    />

                                    {/* form field */}
                                    <AppFormikInput
                                        inputType={"password"}
                                        formik={formik} // formik object
                                        stFormClass={"ct w-100 mb-2"} // class name for main wrapper
                                        labelName={"Password"} // label name
                                        isRequired={true} // is this field is required or not to show the red star sign
                                        placeholder={"Password"} // placeholder for the input
                                        formikFieldName={"password"} // important: formik value name for the input
                                    />

                                    <div
                                        className={`${authStyles["other-info"]} d-flex justify-content-end pt-1`}
                                    >
                                        <Link href="/forgot-password">
                                            <a className="text-decoration-none st-text-dark">
                                                Forgot Password?
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="btns d-flex justify-content-center pt-4">
                                        <button
                                            type="submit"
                                            className={`st-btn text-uppercase no-min-width px-4 st-fw-600 ${
                                                buttonDisable ? "disabled" : ""
                                            }`}
                                            style={{ minWidth: 100 }}
                                            disabled={buttonDisable}
                                        >
                                            {buttonLoading ? (
                                                <Spinner
                                                    animation="border"
                                                    size="sm"
                                                />
                                            ) : (
                                                <span>login</span>
                                            )}
                                        </button>
                                    </div>

                                    <div
                                        className={`${authStyles["other-info"]} d-flex justify-content-center pt-2`}
                                    >
                                        <p className="mb-0">
                                            {"Don't have an account? "}
                                            <Link href="/register">
                                                <a className="text-decoration-none st-text-dark text-uppercase">
                                                    create new
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
