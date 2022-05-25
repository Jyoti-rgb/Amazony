import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../redux/cart/cartAction";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";

export default function PaymentMethodScreen() {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeOrder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <input
            type="radio"
            id="paypal"
            value="PayPal"
            name="paymentMethod"
            required
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div>
          <input
            type="radio"
            id="stripe"
            value="Stripe"
            name="paymentMethod"
            required
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="stripe">Stripe</label>
        </div>
        <div>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
