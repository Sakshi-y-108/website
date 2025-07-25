import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);

    navigate("/");
  };

  return (
    <div className="container w-100 login_main">
      <div className="row justify-content-center w-100">
        <div className="col-md-6 col-lg-4">
          <div className="card mt-5">
            <div className="card-body form_card_body">
              <h1 className="card-title text-center fs-1 text-warning text-uppercase">
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group w-100 form_login">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control fs-3"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group mt-3 form_login">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control fs-3"
                    placeholder="Password"
                    maxLength={10}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form_button">
                  <button
                    type="submit"
                    className="btn btn-outline-success mt-4 px-4 py-2 fs-2 fw-bold"
                  >
                    Login
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

export default Login;
