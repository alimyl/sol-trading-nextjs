import React from "react";

export default function AppFormikInput(props) {
    const {
        formik,
        stFormClass,
        inputType,
        labelName,
        isRequired,
        placeholder,
        formikFieldName,
    } = props;

    return (
        <div
            className={`st-form ${stFormClass || ""} ${
                formik.touched[formikFieldName] &&
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
            <input
                type={inputType ?? "text"}
                className="form-control"
                placeholder={placeholder}
                id={formikFieldName}
                {...formik.getFieldProps(formikFieldName)}
            />
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
