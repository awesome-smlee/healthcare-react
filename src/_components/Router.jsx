import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "_pages/home";
import LoginPage from "_pages/login";
import SignupForm from "_pages/signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
