import React, { useState, useEffect } from "react";

// styles
import productViewStyles from "../../../../../styles/products.module.scss";

export default function Radio(props) {
    // consts
    const { data, getData } = props;

    // states
    const [selectedValue, setSelectedValue] = useState("");

    // setting default value
    useEffect(() => {
        if (data?.options?.length) {
            data.options.forEach((element) => {
                if (element.is_default) {
                    setSelectedValue(element.value);
                }
            });
        }
    }, [data]);

    // functions
    // on radio value changes
    const handleValueChange = (ev) => {
        const inpVal = ev.target.value;

        if (inpVal) {
            setSelectedValue(inpVal);

            // sending data back
            getData("radio_buttons", inpVal);
        }
    };

    return (
        <React.Fragment>
            <span
                className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}
            >
                {data.variation_name}
            </span>
            <div className="radio d-flex flex-wrap">
                {data?.options?.length &&
                    data.options.map((item) => {
                        return (
                            <React.Fragment key={item.id}>
                                <label className="d-inline-flex mb-1 me-2">
                                    <input
                                        type="radio"
                                        className={"position-relative"}
                                        name={item.option_variation_name}
                                        value={item.value}
                                        checked={selectedValue === item.value}
                                        onChange={handleValueChange}
                                        style={{ top: 5 }}
                                    />
                                    <span className="ms-2">{item.value}</span>
                                </label>
                                <br />
                            </React.Fragment>
                        );
                    })}
            </div>
        </React.Fragment>
    );
}
