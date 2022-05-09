import React from "react";
import { useNavigate } from "react-router-dom";
import customerServices from "./Services/CustomerServices";
import alert from "./Services/Alert";

const SignIn = () => {
  let navigate = useNavigate();
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  function handleData(key, value) {
    setData({ ...data, [key]: value });
  }
  function login() {
    customerServices
      .login(data)
      .then((data) => {
        console.log(data._id);
        alert.showErrorAlert(data.message);
        customerServices.setLoginUserId(data._id);
      })
      .catch((err) => alert.showErrorAlert(err.message));
  }
  return (
    <section className="login-form shadow-lg">
      <div className="container">
        <div className="row from-row">
          <div className="col-lg-5 form-brand d-flex justify-content-center align-items-center">
            <div>
              <h1>AR MEDICARE</h1>
              <h3>Pakistan's Medicare is now online</h3>
            </div>
          </div>
          <div className="col-lg-7 px-5">
            <h2 className="mt-3">Login</h2>

            <form onSubmit={(e) => e.preventDefault()}>
              <div class="mb-3 col-lg-9">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => handleData("username", e.target.value)}
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
                  onChange={(e) => handleData("password", e.target.value)}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary signIn-btn mb-5"
                onClick={() => {
                  login();
                }}
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
