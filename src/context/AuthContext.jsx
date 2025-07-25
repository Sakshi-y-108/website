import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUsername = localStorage.getItem("username");
    if (token) {
      setIsLoggedIn(true);
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  const login = async (formData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/login/",
        formData
      );
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("username", response.data.username);
      setIsLoggedIn(true);
      setUsername(response.data.username);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
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
        localStorage.removeItem("username");
        setIsLoggedIn(false);
        setUsername("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
