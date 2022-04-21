import "./App.css";
import HomeScreen from "./Components/Screen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./Components/Screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazony
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
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
