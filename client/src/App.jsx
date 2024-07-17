import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/Home/Home.jsx";
import ItemDetails from "./scenes/itemDetails/ItemDetails.jsx";
import Checkout from "./scenes/checkout/Checkout.jsx";
import ConfirmationPage from "./scenes/checkout/Confirmation.jsx";
import Navbar from "./scenes/global/Navbar.jsx";
import CartMenu from "./scenes/global/CartMenu.jsx";

const ScrollToTop = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<ConfirmationPage />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
