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
import RequestDetails from "./components/respondant/RequestDetails";
import RespondantAccepted from "./components/respondant/RespondantAccepted";
import Payment from "./components/payment";
import Success from "./components/Success";
import cart from "./components/customer/cart";
import Cancel from "./components/Cancel";
import Layout from "./components/pharmacist/dashboardComponents/home/Layout";
import UpdateProduct from "./components/pharmacist/dashboardComponents/product/UpdateProduct";
import DashboardComponent from "./components/pharmacist/dashboardComponents/home/dashboard";
import AddProduct from "./components/pharmacist/dashboardComponents/product/AddProduct";
import ProductComponent from "./components/pharmacist/dashboardComponents/product/productComponent";
import PatientDescription from "./components/doctor/PatientDescription";
import PatientsDetail from "./components/doctor/PatientsDetail";

function App() {
  const [userType, setUserType] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    if (authServices.getLoggedInUser() != null) {
      var type = authServices.getLoggedInUser().userType;
      setUserType(type);
    } else {
      setUserType("patient");
    }

    setIsLoggedIn(authServices.isLoggedIn());
  }, []);

  return (
    <Router>
      {userType == "Pharmacist" && isLoggedIn ? (
        <Layout>
          <Routes>
            <Route
              path="/dashboard/products/update/:id"
              element={<UpdateProduct />}
            />
            <Route path="/" element={<DashboardComponent />} />
            <Route
              exact
              path="/dashboard/products"
              element={<ProductComponent />}
            />
            <Route
              path="/dashboard/products/addProduct"
              element={<AddProduct />}
            />
          </Routes>
        </Layout>
      ) : (
        <div className="container-fluid px-0">
          <Navbar></Navbar>
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
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart/payment" element={<Cart />} />
            <Route path="/payment/success" element={<Success />} />
            <Route path="/payment/cancel" element={<Cancel />} />
            <Route
              path="/doctorAppointments/addPatientDescription"
              element={<PatientDescription />}
            />

            <Route
              path="/doctorAppointments"
              element={<DoctorAppointmentMapper />}
            />
            <Route
              path="/respondantRequests"
              element={<RespondantRequestMapper />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/appointmentDetails"
              element={<AppointmentDetails />}
            />
            <Route path="/patientsDetail" element={<PatientsDetail />} />
            <Route path="/requestDetails" element={<RequestDetails />} />
            <Route path="/acceptedPatients" element={<RespondantAccepted />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
