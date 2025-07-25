import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // Importing the cart icon from react-icons
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg nav_cl">
        <div className="container-fluid">
          <Link className="navbar-brand logo_link" to="/">
            <img className="logo" src="./images/deco_logo.jpg" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item nav_link">
                <Link className="mx-2 me-xl-5 nav_text" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item nav_link">
                <Link className="mx-2 me-xl-5 nav_text" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item nav_link">
                <Link className="mx-2 me-xl-5 nav_text" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item nav_link">
                <Link className="mx-2 me-xl-5 nav_text" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item nav_link">
                <Link className="mx-2 me-xl-5 nav_text" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item nav_link">
                <Link className="mx-2 me-xl-5 nav_text" to="/cart">
                  <FaShoppingCart /> {/* Cart Icon */}
                  <span className="cart-count">{cartItems.length}</span>
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {isLoggedIn ? (
                <>
                  <span className="navbar-text mx-2 fs-3 fw-bold">
                    Welcome, {username}
                  </span>
                  <button
                    type="button"
                    className="btn btn-outline-danger fs-3 mx-2"
                    onClick={logout}
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <button
                      type="button"
                      className="btn btn-outline-success fs-3 mx-2 fw-bold"
                    >
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn btn-outline-success fs-3 mx-2 fw-bold"
                    >
                      Log In
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
