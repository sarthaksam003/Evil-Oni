import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sizechart from "./pages/Sizechart/Sizechart";
import Contact from "./pages/Contact/Contact";
import NavigationBar from "./components/Navbar/NavigationBar";
import Product from "./pages/Product/Product";
import Faq from "./pages/Faq/Faq";
import Footer from "./components/Footer/Footer";
import TC from "./pages/TC/TC";
import Cart from "./components/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Confirmorder from "./pages/Checkout/Confirmorder";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [ProductArray, setProductArray] = useState([]);
  const prodarr = [];
  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const fetchProductData = useCallback(() => {
    fetch(
      "https://evil-oni-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        for (const key in responseData) {
          prodarr.push({
            id: key,
            productName: responseData[key].productName,
            productB: responseData[key].productB,
            productF: responseData[key].productF,
            productM: responseData[key].productM,
            productPrice: responseData[key].productPrice,
            productDesc: responseData[key].productDesc,
          });
        }
        setProductArray(prodarr);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchProductData();
    // eslint-disable-next-line
  }, []);

  return (
    <CartProvider>
      <Router>
        {showCart && <Cart onClose={hideCartHandler} />}
        <NavigationBar
          onShowCart={showCartHandler}
          onHideCart={hideCartHandler}
        />
        <div className="app-layout">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route
              path="/size-chart"
              className="sizechart"
              element={<Sizechart />}
            />
            <Route path="/contact-us" element={<Contact />} />
            <Route
              path={`/product/:id`}
              element={<Product ProductArray={ProductArray} />}
            />
            <Route path={`/frequently-asked-questions`} element={<Faq />} />
            <Route path={`/terms-and-conditions`} element={<TC />} />
            <Route path={`/check-out`} element={<Checkout />} />
            <Route path={`/confirm-order`} element={<Confirmorder />} />
            <Route path={`/*`} element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
