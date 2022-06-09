import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authServices from "../Services/AuthServices";
import alert from "../Services/Alert";
import customerServices from "../Services/CustomerServices";
const PatientDescription = () => {
  let navigate = useNavigate();
  const location = useLocation();
  var method = () => {};
  const [comboxItems, setComboBoxItems] = useState([]);
  const [comboxValue, setComboBoxValue] = useState("");
  const [comboxQty, setComboBoxqty] = useState("");
  const [presList, setPresList] = useState([]);
  const [textareaString, setTextAreaString] = useState("");
  const [updatePatient, setUpdatePatient] = useState({});
  const [formHeading, setFormHeading] = useState("");
  const [btnText, setBtnText] = useState("");
  const [data, setData] = React.useState({
    username: location.state.patient.username,
    age: "",
    dateTime: "",
    symptoms: "",
    diagnosis: "",
    prescription: presList,
    rescheduleVisit: "",
  });
  function handleData(key, value) {
    setData({ ...data, [key]: value });
  }

  function handleDetails(e) {
    e.preventDefault();
    console.log({ patientId: location.state.patient._id, data: data });

    method()
      .then((res) => {
        console.log(res.data);
        alert.showSuccessAlert("Description added successfully!");
        navigate("/patientsDetail");
      })
      .catch((err) => alert.showErrorAlert(err.response.data.msg));
  }

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd + "T00:00";
  };
  const limitFutureDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear() + 1;
    return yyyy + "-" + mm + "-" + dd + "T00:00";
  };
  React.useEffect(() => {
    customerServices
      .getProducts()
      .then((data) => setComboBoxItems(data))
      .catch((err) => alert.showErrorAlert(err.response.data.message));
  }, []);
  React.useEffect(() => {
    console.log(location.state.formTitle);
    if (location.state.btnText === "Update") {
      setUpdatePatient(location.state.patient);
      setFormHeading(location.state.formTitle);
      setBtnText(location.state.btnText);
      console.log(updatePatient);
      method = () =>
        new Promise((resolve, reject) => {
          axios
            .put(
              "https://ar-medicare-backend.herokuapp.com/api/doctor/patientDetail/" +
                authServices.getLoggedInUser()._id,
              { patientId: location.state.patient._id, data: data }
            )
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
        });
    } else if (location.state.btnText === "Add") {
      setUpdatePatient(location.state.patient);
      setFormHeading(location.state.formTitle);
      setBtnText(location.state.btnText);
      console.log(updatePatient);
      method = () =>
        new Promise((resolve, reject) => {
          axios
            .post(
              "https://ar-medicare-backend.herokuapp.com/api/doctor/patientDetail/" +
                authServices.getLoggedInUser()._id,
              { patientId: location.state.patient._id, data: data }
            )
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
        });
    }
  }, []);
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
            <h2 className="mt-3">{formHeading}</h2>
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
                  value={updatePatient.age}
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
                  value={updatePatient.dateTime}
                  type="datetime-local"
                  class="form-control"
                  id="exampleInputPassword1"
                  min={disablePastDate()}
                  max={limitFutureDate()}
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
                  value={updatePatient.symptoms}
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
                  value={updatePatient.diagnosis}
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
                <div className="row">
                  <div className="col-lg-8 ">
                    <input
                      list="browsers"
                      className="form-control"
                      onChange={(e) => {
                        setComboBoxValue(e.target.value);
                      }}
                    />
                    <datalist id="browsers">
                      {comboxItems != undefined ? (
                        comboxItems.map((value) => (
                          <option value={value.title} />
                        ))
                      ) : (
                        <></>
                      )}
                    </datalist>
                  </div>

                  <div className="col-lg-4">
                    <input
                      type="number"
                      placeholder="qty"
                      required
                      className="form-control"
                      onChange={(e) => {
                        setComboBoxqty(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <input
                  type="button"
                  className="btn btn-primary mt-2"
                  value="Add"
                  onClick={(e) => {
                    setPresList([
                      ...presList,
                      {
                        title: comboxValue,
                        quantitty: comboxQty,
                      },
                    ]);
                    setTextAreaString(
                      textareaString + comboxValue + " " + comboxQty + "\n"
                    );

                    console.log(presList);
                  }}
                />
              </div>

              <div class="mb-2 col-lg-9">
                <textarea
                  name="message"
                  rows="4"
                  cols="30"
                  className="form-control"
                  value={textareaString}
                  required
                ></textarea>
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Reschedule Visit
                </label>
                <input
                  value={updatePatient.rescheduleVisit}
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
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientDescription;
