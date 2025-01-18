import "./App.css";
import Layout from "./components/common/Layout";
import Welcome from "./pages/welcome/Welcome";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import NoPage from "./components/common/NoPage";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/userAction/Login";
import Logout from "./pages/userAction/Logout";
import Register from "./pages/userAction/Register";

const App = () => {
  return (
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
         </BrowserRouter>

  );
};

export default App;
