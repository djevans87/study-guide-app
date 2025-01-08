import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import React from "react";

const App = () => {
  return (
    <>
      <NavBar />
      <Welcome />
      <Dashboard />
      <Footer />
    </>
  );
};

export default App;
