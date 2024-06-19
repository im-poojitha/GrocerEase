import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app-wrapper">
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <div className="wrapper">
          {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
