import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://x.com">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram />
            </a>
            <a href="https://accounts.google.com">
              <FaGoogle />
            </a>
            <a href="https://www.youtube.com/#!">
              <FaYoutube />
            </a>
          </div>
          <div>
            <p className="footer_center">
              Design By <span>$D$</span>{" "}
            </p>
          </div>
          <div className="footer-text">
            All Right Designed by &copy; Private-Limited sds-2024
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
