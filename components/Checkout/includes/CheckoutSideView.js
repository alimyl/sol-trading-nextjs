import React from "react";

// redux
import { connect } from "react-redux";

// checkout styles
import checkoutStyles from "../styles/checkout.module.scss";

function CheckoutSideView(props) {
    // props
    const { cartItems, cartDetails } = props

    return (
        <div className={`${checkoutStyles["checkout-left-bar"]}`}>
            <div className={`${checkoutStyles["inner"]}`}>
                <div className="table-responsive">
                    <table className={`${checkoutStyles["checkout-table"]} table`}>
                        <thead>
                            <tr>
                                <th className="st-fs-13 st-text-light text-capitalize">item details</th>
                                <th className="st-fs-13 st-text-light text-capitalize">qty</th>
                                <th className="st-fs-13 st-text-light text-capitalize">price</th>
                                <th className="st-fs-13 st-text-light text-capitalize">totoal</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cartItems?.length ? cartItems.map(item => {
                                    return (
                                        <tr key={item.product_id}>
                                            <td className="st-fs-13 st-text-light">
                                                <p className="name mb-0">{item.product_name}</p>
                                                <p className="sku d-block">
                                                    SKU:
                                                    <b className="me-1">{item.sku}</b>
                                                </p>
                                            </td>
                                            <td className="st-fs-13 st-text-light">
                                                <p className="">
                                                    1
                                                </p>
                                            </td>
                                            <td>
                                                <p className="">
                                                    ${item.price}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="">
                                                    ${item.totalPrice}
                                                </p>
                                            </td>
                                        </tr>
                                    )
                                }) : null
                            }
                        </tbody>

                        <tfoot className="border-top">
                            <tr>
                                <td colSpan="2" className="st-fs-13 st-text-light">Sub total</td>
                                <td colSpan="2" className="st-fs-13 st-text-light" style={{ textAlign: 'right' }}>
                                    ${cartDetails?.cart_total ?? 0}
                                </td>
                            </tr>
                            {/* <tr>
                                <td colSpan="2" className="st-fs-13 st-text-light">Shipping</td>
                                <td colSpan="2" className="st-fs-13 st-text-light" style={{ textAlign: 'right' }}>$38.75</td>
                            </tr> */}
                            <tr>
                                <td colSpan="2" className="st-fs-14 st-fw-700 st-text-light">Order Total</td>
                                <td colSpan="2" className="st-fs-14 st-fw-700 st-text-light" style={{ textAlign: 'right' }}>
                                    ${cartDetails?.cart_total ?? 0}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}


const getDataFromStore = (state) => {
    return {
        cartItems: state.cart.cartItems,
        cartDetails: state.cart.cartDetails
    };
};

// const dispatchActionsToProps = (dispatch) => {
//     return {
//         func: (param) => dispatch(func(param)),
//     };
// };

export default connect(getDataFromStore, null)(CheckoutSideView);