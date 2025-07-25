// src/components/Logout.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        await axios.post(
          "http://127.0.0.1:8000/api/logout/logout/",
          {},
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        localStorage.removeItem("authToken");
      }
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
