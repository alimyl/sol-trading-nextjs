import React from "react";

export default function AppFormikSelect(props) {
    const {
        formik,
        stFormClass,
        labelName,
        isRequired,
        formikFieldName,
    } = props;

    return (
        <div
            className={`st-form ${stFormClass || ""} ${formik.touched[formikFieldName] &&
                formik.errors[formikFieldName]
                ? "has-msg msg-error"
                : ""
                }`}
        >
            {labelName ? (
                <label className="mb-1 st-fs-14">
                    {labelName}
                    {isRequired && <span className="required">*</span>}
                </label>
            ) : null}

            <select
                className="form-control"
                id={formikFieldName}
                {...formik.getFieldProps(formikFieldName)}>
                {props.children}
            </select>
            {
                /* form message */
                formik.touched[formikFieldName] &&
                formik.errors[formikFieldName] && (
                    <div className="st-form-msg position-absolute">
                        <p className="st-fs-12">
                            {formik.errors[formikFieldName]}
                        </p>
                    </div>
                )
            }
        </div>
    );
}
