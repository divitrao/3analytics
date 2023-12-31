import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ChangePassword from "./pages/ChangePassword";

const ESGRoutes = () => {
  const isAuthenticated = localStorage.getItem("access_token") != null;
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/change-password"
          element={
            isAuthenticated ? <ChangePassword /> : <Navigate to={"/login"} />
          }
        />
      </Routes>
    </>
  );
};

export default ESGRoutes;
