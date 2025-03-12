import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Post from "../components/Post";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post' element={<Post />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
