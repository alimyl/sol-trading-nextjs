import React, { useEffect, useState } from 'react'


// quanity selector styles
import quanitySelectorStyles from './styles/quanitySelector.module.scss'

// icons : feather
import FeatherIcon from 'feather-icons-react';

export default function QuantitySelector(props) {
    const [inputVal, setInputVal] = useState(1)

    useEffect(() => {
        const defaultValue = props.defaultValue ?? props.defaultValue
        if (defaultValue) {
            // setting default value
            setInputVal(parseInt(defaultValue))
        }
        return () => {

        }
    }, [props])

    // add quantity
    const addQuantity = () => {
        if (inputVal > 0) {
            setInputVal(inputVal + 1)

            // sending value to parent component
            props.getQuantity && props.getQuantity(inputVal + 1)
        }
    }

    // remove quantity
    const removeQuantity = () => {
        if (inputVal > 1) {
            setInputVal(inputVal - 1)

            // sending value to parent component
            props.getQuantity && props.getQuantity(inputVal - 1)
        }
    }

    // input changing
    const handleChange = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className={quanitySelectorStyles["st-quantity-selector"]}>
            <div className={`${quanitySelectorStyles["inner"]} st-form no-shadow d-inline-flex`}>
                <button
                    className={`${quanitySelectorStyles["st-btn-in-qs"]} st-btn plus text-uppercase no-min-width d-flex align-items-center justify-content-center p-0`}
                    onClick={removeQuantity}
                >
                    <FeatherIcon
                        icon="minus"
                        size="15"
                        className="icon"
                    />
                </button>

                <input
                    type="number"
                    className={`${quanitySelectorStyles["form-control-in-qs"]} form-control rounded-0 text-center`}
                    defaultValue={inputVal}
                    onChange={handleChange}
                />

                <button
                    className={`${quanitySelectorStyles["st-btn-in-qs"]} st-btn minus text-uppercase no-min-width d-flex align-items-center justify-content-center p-0`}
                    onClick={addQuantity}
                >
                    <FeatherIcon
                        icon="plus"
                        size="15"
                        className="icon" />
                </button>
            </div>
        </div>
    )
}
