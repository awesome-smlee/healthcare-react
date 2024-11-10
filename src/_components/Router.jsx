import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "_pages/home";
import LoginPage from "_pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/profile" element={<Home />}></Route> */}
        <Route path="/login" element={<LoginPage />}></Route>
        {/* <Route path="/signup" element={<Home />}></Route> */}
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
