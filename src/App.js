import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import RequestMapper from "./components/RequestMapper";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import Privacy from "./components/Privacy";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div className="container-fluid px-0">
        <Navbar></Navbar>

        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacyPolicy" element={<Privacy />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/requests" element={<RequestMapper />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
