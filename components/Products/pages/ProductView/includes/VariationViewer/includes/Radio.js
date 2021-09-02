import React, { useState } from 'react'

// styles
import productViewStyles from "../../../../../styles/products.module.scss"

export default function Radio(props) {
    // consts
    const { data } = props

    // states
    const [radioValue, setRadioValue] = useState("")

    return (
        <React.Fragment>
            <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>{data.variation_name}</span>
            <div className="radio">
                {
                    data?.options?.length && data.options.map(item => {
                        return (
                            <React.Fragment key={item.id}>
                                <label className="d-flex mb-1">
                                    <input
                                        type="radio"
                                        className={"mt-1"}
                                        value={radioValue}
                                        name={item.option_variation_name}
                                        checked={item.is_default ? true : false}
                                        onChange={ev => console.log("ev", ev)} />
                                    <span className="ms-2">{item.value}</span>
                                </label>
                            </React.Fragment>
                        )

                    })
                }
            </div>
        </React.Fragment>
    )
}
