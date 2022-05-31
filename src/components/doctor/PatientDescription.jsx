import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authServices from "../Services/AuthServices";
const PatientDescription = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = React.useState({
    username: location.state.patient.username,
    age: "",
    dateTime: "",
    symptoms: "",
    diagnosis: "",
    prescription: "",
    rescheduleVisit: "",
  });
  function handleData(key, value) {
    setData({ ...data, [key]: value });
  }

  function handleDetails(e) {
    e.preventDefault();
    console.log({ patientId: location.state.patient._id, data: data });
    axios
      .post(
        "https://ar-medicare-backend.herokuapp.com/api/doctor/patientDetail/" +
          authServices.getLoggedInUser()._id,
        { patientId: location.state.patient._id, data: data }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
            <h2 className="mt-3">Add Description</h2>
            <form onSubmit={(e) => handleDetails(e)}>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={location.state.patient.username}
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("username", e.target.value);
                  }}
                  required
                  disabled
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputEmail1" class="form-label">
                  Age
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    handleData("age", e.target.value);
                  }}
                  required
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Date and Time
                </label>
                <input
                  type="datetime-local"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("dateTime", e.target.value);
                  }}
                  required
                />
              </div>

              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Symptoms
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("symptoms", e.target.value);
                  }}
                  required
                />
              </div>

              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Diagnosis
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("diagnosis", e.target.value);
                  }}
                  required
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Prescription
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("prescription", e.target.value);
                  }}
                  required
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Reschedule Visit
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("rescheduleVisit", e.target.value);
                  }}
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary signIn-btn mb-5">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientDescription;
