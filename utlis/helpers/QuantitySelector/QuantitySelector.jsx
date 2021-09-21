import React, { useEffect, useState } from 'react'


// quanity selector styles
import quanitySelectorStyles from './styles/quanitySelector.module.scss'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// react toastify
import { toast } from "react-toastify";

export default function QuantitySelector(props) {
    // props
    const {
        defaultValue,
        getQuantity,
        minQuantity,
        maxQuantity,
        minQuantityMsg,
        maxQuantityMsg,
    } = props

    // consts
    const TOAST_TIME = 1800
    const ACTION_ADD = "add"
    const ACTION_SUBTRACT = "subtract"
    const MIN_ERROR_MSG = minQuantityMsg || `Sorry you can't select less than ${minQuantity}`
    const MAX_ERROR_MSG = maxQuantityMsg || `Sorry you can't select more than ${maxQuantity}`

    // states
    const [inputVal, setInputVal] = useState(1)
    const [buttonDisabled, setButtonDisabled] = useState(false)

    // setting default value
    useEffect(() => {
        if (defaultValue || minQuantity) {
            // if min value is defined then use that else use default value
            setInputVal(parseInt(defaultValue) || parseInt(minQuantity))
        }
    }, [minQuantity, defaultValue])

    // change quantity
    const changeQuantity = (action) => {
        // if adding value
        if (action === ACTION_ADD) {
            if (inputVal >= 1) {
                // if max quantity is defined
                if (inputVal >= maxQuantity) {
                    // if default value is greter than the allowed value, setting the max allowed value to the input
                    if (inputVal > maxQuantity) {
                        let updatedValue = parseInt(maxQuantity)
                        setInputVal(updatedValue)

                        // sending value to parent component
                        getQuantity && getQuantity(updatedValue)
                    }

                    // disabling the button
                    setButtonDisabled(true)

                    // dismissing all the previous toasts first
                    toast.dismiss();

                    // showing the error message
                    toast.error(MAX_ERROR_MSG, {
                        autoClose: TOAST_TIME,
                        onClose: () => {
                            // enabling the button
                            setButtonDisabled(false)
                        },
                    });

                    return
                }

                // updating the values if no issue
                const updatedValue = inputVal + 1
                setInputVal(updatedValue)

                // sending value to parent component
                getQuantity && getQuantity(updatedValue)
            }
        }

        // if adding value
        if (action === ACTION_SUBTRACT) {
            if (inputVal > 1) {
                // if min quantity is defined
                if (inputVal <= minQuantity) {
                    // if default value is lesser than the allowed value, setting the min allowed value to the input
                    if (inputVal < minQuantity) {
                        let updatedValue = parseInt(minQuantity)
                        setInputVal(updatedValue)

                        // sending value to parent component
                        getQuantity && getQuantity(updatedValue)
                    }

                    // disabling the button
                    setButtonDisabled(true)

                    // dismissing all the previous toasts first
                    toast.dismiss();

                    // showing the error message
                    toast.error(MIN_ERROR_MSG, {
                        autoClose: TOAST_TIME,
                        onClose: () => {
                            // enabling the button
                            setButtonDisabled(false)
                        },
                    });

                    return
                }

                // updating the values if no issue
                const updatedValue = inputVal - 1
                setInputVal(updatedValue)

                // sending value to parent component
                getQuantity && getQuantity(updatedValue)
            }
        }
    }

    // input changing
    const handleChange = (ev) => {
        ev.preventDefault()

        const inpVal = ev.target.value
        if (inpVal?.length) {
            // setting value
            setInputVal(parseInt(inpVal))
        }
    }

    return (
        <div className={quanitySelectorStyles["st-quantity-selector"]}>
            <div className={`${quanitySelectorStyles["inner"]} st-form no-shadow d-inline-flex`}>
                <button
                    className={`${quanitySelectorStyles["st-btn-in-qs"]} ${buttonDisabled ? 'disabled' : ''} st-btn plus text-uppercase no-min-width d-flex align-items-center justify-content-center p-0`}
                    disabled={buttonDisabled}
                    onClick={() => changeQuantity(ACTION_SUBTRACT)}
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
                    value={inputVal}
                    onChange={handleChange}
                />

                <button
                    className={`${quanitySelectorStyles["st-btn-in-qs"]} ${buttonDisabled ? 'disabled' : ''} st-btn minus text-uppercase no-min-width d-flex align-items-center justify-content-center p-0`}
                    disabled={buttonDisabled}
                    onClick={() => changeQuantity(ACTION_ADD)}
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
