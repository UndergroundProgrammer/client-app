import React from "react";
import { Link } from "react-router-dom";
import authServices from "./Services/AuthServices";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
      <div class="container">
        <Link class="navbar-brand" href="#" to="/">
          AR MEDICARE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/doctors"
              >
                Doctors
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/respondants"
              >
                Respondants
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/medicines"
              >
                Medicines
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/medicines"
              >
                Request
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/login"
              >
                Sign in
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
