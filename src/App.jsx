import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/events/Events";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ProductList from "./components/productlist/ProductList";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/events" exact element={<Events />} />
            <Route path="/gallery" exact element={<Gallery />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/products" exact element={<ProductList />} />
            <Route path="/cart" exact element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
