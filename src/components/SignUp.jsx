import React from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  let navigate = useNavigate();
  const [data, setData] = React.useState({
    accountType: "Customer",
    name: "",
    email: "",
    password: "",
    specialization: "",
    phoneNumber: "",
    city: "",
    imgUrl: "",
  });
  function handleData(key, value) {
    setData({ ...data, [key]: value });
  }
  return (
    <section className="login-form shadow-lg">
      <div className="container">
        <div className="row from-row">
          <div className="col-lg-5 d-flex align-items-center text-center form-brand ">
            <div>
              <h1>AR MEDICARE</h1>
              <h3>Pakistan's Medicare is now online</h3>
            </div>
          </div>
          <div className="col-lg-7 px-5">
            <h2 className="mt-3">Sign up</h2>
            <form>
              <div className="form-group mb-2 col-lg-9">
                <label className="form-label " for="accountType">
                  Select Account Type
                </label>
                <select
                  id="accountType"
                  className="form-control dropdownMenu"
                  onChange={(e) => {
                    handleData("accountType", e.target.value);
                  }}
                >
                  <option value="Customer">Customer</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Respondant">Respondant</option>
                  <option value="Pharmicst">Pharmicst</option>
                </select>
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("name", e.target.value);
                  }}
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    handleData("email", e.target.value);
                  }}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("password", e.target.value);
                  }}
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("phoneNumber", e.target.value);
                  }}
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  city
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("city", e.target.value);
                  }}
                />
              </div>
              {data.accountType === "Doctor" ? (
                <div class="mb-2 col-lg-9">
                  <label for="exampleInputPassword1" class="form-label">
                    Specialization
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      handleData("specialization", e.target.value);
                    }}
                  />
                </div>
              ) : (
                <></>
              )}
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  upload an image
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("imgUrl", e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary signIn-btn mb-5"
                onClick={() => navigate("/dashboard")}
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
