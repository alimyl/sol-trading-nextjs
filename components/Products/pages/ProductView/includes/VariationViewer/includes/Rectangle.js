import React from 'react'

// styles
import productViewStyles from "../../../../../styles/products.module.scss"

// bootstrap
import {
    Form
} from 'react-bootstrap';

export default function Rectangle(props) {
    // consts
    const { data } = props

    return (
        <React.Fragment>
            <span className={`${productViewStyles["title"]} text-uppercase d-block st-fw-700 mb-1`}>{data.variation_name}</span>
            <Form.Group className="st-form" style={{ width: 168 }}>
                <Form.Control as="select" defaultValue="default" className="cursor-pointer no-select-icon text-center">
                    <option value="default" disabled>Select {data.variation_name}</option>
                    {
                        data?.options?.length && data.options.map(item => (
                            <React.Fragment key={item.id}>
                                <option value={item.value}>{item.value}</option>
                            </React.Fragment>
                        ))
                    }
                </Form.Control>
            </Form.Group>
        </React.Fragment>
    )
}
