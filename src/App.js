import React from "react";
import "./App.css";
import Dashboard from "./components/customer/Dashboard";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import RequestMapper from "./components/doctor/DoctorAppointmentMapper";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Faqs from "./components/Faqs";
import Privacy from "./components/Privacy";
import AboutUs from "./components/AboutUs";
import MedicineList from "./components/customer/MedicineList";
import StakeholderMapper from "./components/customer/StakeholderMapper";
import customerServices from "./components/Services/CustomerServices";
import authServices from "./components/Services/AuthServices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoctorAppointmentMapper from "./components/doctor/DoctorAppointmentMapper";
import RespondantRequestMapper from "./components/respondant/RespondantRequestMapper";
import AppointmentDetails from "./components/doctor/AppointmentDetails";

function App() {
  const [userType, setUserType] = React.useState("");
  return (
    <Router>
      <div className="container-fluid px-0">
        <Navbar
        ></Navbar>
        <ToastContainer
          autoClose={1000}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
        <Routes>
          <Route
            path="/doctors"
            element={
              <StakeholderMapper
                method={customerServices.getDoctors}
                dataType={"Doctors"}
              />
            }
          />
          <Route
            path="/respondants"
            element={
              <StakeholderMapper
                method={customerServices.getRespondants}
                dataType={"Respondants"}
              />
            }
          />
          <Route path="/medicines" element={<MedicineList />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacyPolicy" element={<Privacy />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/doctorAppointments"
            element={<DoctorAppointmentMapper />}
          />
          <Route
            path="/respondantRequests"
            element={<RespondantRequestMapper />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/appointmentDetails" element={<AppointmentDetails />} />
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
