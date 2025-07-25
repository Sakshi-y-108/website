import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/contacts/", formData)
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
        alert("Error submitting form!");
      });
  };

  return (
    <>
      <section className="con-section">
        <div className="con-content">
          <h1>Contact Us</h1>
          <p>This is the Contact page content.</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-left">
          <h2>Let's Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form_button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="contact-right">
          <div className="contact-item right-item1">
            <div>
              <LuPhoneCall className="contact-icon" />
            </div>
            <div>
              <h5>Have you a question? Call Us</h5>
              <p> +919990145688</p>
              <h6>Open Monday to Friday</h6>
            </div>
          </div>
          <div className="contact-item right-item2">
            <div>
              <IoMailOpenOutline className="contact-icon" />
            </div>
            <div>
              <h5>Email Address</h5>
              <p>soniyaprajapati29@gmail.com</p>
              <h6>Open Monday to Friday</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
