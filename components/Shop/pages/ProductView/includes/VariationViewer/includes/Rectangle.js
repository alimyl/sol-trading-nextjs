import React, { useState, useEffect } from "react";

// styles
import productViewStyles from "../../../../../styles/products.module.scss";

// bootstrap
import { Form } from "react-bootstrap";

export default function Rectangle(props) {
    // consts
    const { data, getData } = props;

    // states
    const [selectedValue, setSelectedValue] = useState("default");

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
            getData("rectangle_list", inpVal);
        }
    };

    return (
        <React.Fragment>
            <span
                className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}
            >
                {data.variation_name}
            </span>

            <div className="rectangles-list">
                {/* rectangle */}
                {data?.options?.length &&
                    data.options.map((item) => (
                        <label key={item.id} className="st-form-rectangle">
                            <input
                                type="radio"
                                className="d-none"
                                name={item.option_variation_name}
                                value={item.value}
                                checked={selectedValue === item.value}
                                onChange={handleValueChange}
                            />
                            <span className="rect">{item.value}</span>
                        </label>
                    ))}
            </div>

            {/* <Form.Group className="st-form" style={{ width: 168 }}>
                <Form.Control
                    as="select"
                    value={selectedValue}
                    className="cursor-pointer no-select-icon text-center"
                    onChange={handleValueChange}
                >
                    <option value="default" disabled>
                        Select {data.variation_name}
                    </option>
                    {data?.options?.length &&
                        data.options.map((item) => (
                            <React.Fragment key={item.id}>
                                <option value={item.value}>{item.value}</option>
                            </React.Fragment>
                        ))}
                </Form.Control>
            </Form.Group> */}
        </React.Fragment>
    );
}
