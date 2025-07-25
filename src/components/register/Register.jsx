import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formData
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container w-100 reg_main">
      <div className="row justify-content-center w-100">
        <div className="col-md-6 col-lg-4">
          <div className="card mt-5">
            <div className="card-body form_card_reg">
              <h3 className="card-title text-center fs-1 text-warning text-uppercase">
                Register
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group form_reg">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group  form_reg">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group  form_reg">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    maxLength={10}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group  form_reg">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    maxLength={10}
                    onChange={handleChange}
                    required
                  />
                </div>
                {!passwordMatch && (
                  <p className="text-danger mt-2">Passwords do not match!</p>
                )}
                <div className="form_button">
                  <button
                    type="submit"
                    className="btn btn-outline-success  mt-4 px-4 py-2 fs-2 fw-bold"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
