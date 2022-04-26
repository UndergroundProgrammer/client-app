import React from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  let navigate = useNavigate();
  return (
    <section className="login-form shadow-lg">
      <div className="container">
        <div className="row from-row">
          <div className="col-lg-5 form-brand d-flex align-items-center">
            <div>
              <h1>AR MEDICARE</h1>
              <h3>Pakistan's Medicare is now online</h3>
            </div>
          </div>
          <div className="col-lg-7 px-5">
            <h2 className="mt-3">Login</h2>

            <form>
              <div class="mb-3 col-lg-9">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary signIn-btn mb-5"
                onClick={() => navigate("/dashboard")}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
