import React from 'react';
import './OrderSummery.scss';
import OrderSummaryImg from '../../assets/img/order-summary.jpg';
import OrderSummaryIng from "./OrderSummaryIng/OrderSummaryIng";

const OrderSummery = (props) => {
    return (
        <div className="order-summary-wrapper">
            <div className="img-wrapper">
                <img src={OrderSummaryImg} alt="Order Summary Image"/>
            </div>
            <div className="content-wrapper">
                <div className="title">
                    Your Order
                </div>
                <div className="ing-summary">
                    <OrderSummaryIng/>
                </div>
                <div className="order-summary-footer">
                    <div className="total-wrapper">
                        <div className="total">Total</div>
                        <div className="price">$7.77</div>
                    </div>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummery;