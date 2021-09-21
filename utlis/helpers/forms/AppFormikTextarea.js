import React from "react";

export default function AppFormikTextarea(props) {
    const {
        formik,
        stFormClass,
        colsCount,
        rowsCount,
        labelName,
        isRequired,
        placeholder,
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
            <textarea
                name=""
                cols={colsCount ?? ""}
                rows={rowsCount ?? 3}
                className="form-control"
                placeholder={placeholder}
                id={formikFieldName}
                {...formik.getFieldProps(formikFieldName)}></textarea>
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
