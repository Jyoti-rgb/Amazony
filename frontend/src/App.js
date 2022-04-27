import "./App.css";
import HomeScreen from "./Components/Screen/HomeScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductScreen from "./Components/Screen/ProductScreen";
import CartScreen from "./Components/Screen/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "./redux/cart/cartAction";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    dispatch(addToCart());
  }, [dispatch]);
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
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />} />

            <Route path="/" index element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
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
