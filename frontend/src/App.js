import "./App.css";
import HomeScreen from "./Components/Screen/HomeScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductScreen from "./Components/Screen/ProductScreen";
import CartScreen from "./Components/Screen/CartScreen";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { addToCart } from "./redux/cart/cartAction";
import SignInScreen from "./Components/Screen/SignInScreen";
import RegisterScreen from "./Components/Screen/RegisterScreen";
import { signout } from "./redux/signin/userAction";
import ShippingAddressScreen from "./Components/Screen/ShippingAddressScreen";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // useEffect(() => {
  //   dispatch(addToCart());
  // }, [dispatch]);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazony
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to={"#"}>
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/shipping" element={<ShippingAddressScreen />} />
            <Route path="/" index element={<HomeScreen />} />
          </Routes>
        </main>
        <footer className="row center">
          Copyright &copy;All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
