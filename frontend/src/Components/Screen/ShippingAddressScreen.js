import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../../redux/cart/cartAction";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    }
  }, []);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [fullname, setFullName] = useState(shippingAddress.fullname);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalcode, setPostalcode] = useState(shippingAddress.postalcode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullname, address, city, postalcode, country })
    );
    navigate("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalcode">Postal code</label>
          <input
            type="text"
            id="postalcode"
            placeholder="Enter postalcode"
            value={postalcode}
            onChange={(e) => setPostalcode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
