import React from "react";
import authServices from "../Services/AuthServices";
import alert from "../Services/Alert";
import customerServices from "../Services/CustomerServices";
import StakeholderMapper from "./StakeholderMapper";
import { useNavigate } from "react-router-dom";
const Stakeholder = ({ stakeholder, dataType }) => {
  let navigate = useNavigate();
  var data = {};
  function sendRequest(_id) {
    console.log(authServices.getLoginPatientId());
    if (authServices.getLoggedInUser() == undefined) {
      alert.showErrorAlert("You should must login");
      navigate("/login");
      return;
    }
    var method = () => {};
    if (dataType == "Doctors") {
      method = customerServices.requestDoctor;
      data = { doctorId: _id };
    } else if (dataType == "Respondants") {
      method = customerServices.requestRespondant;
      data = { respondantId: _id };
    }

    method(authServices.getLoginPatientId(), data)
      .then((data) => {
        alert.showSuccessAlert("Request sended Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getButtonName() {
    if (dataType === "Doctors") return "Book Appointment";
    else return "Consult Now";
  }
  return (
    <div>
      <div class="card my-3 shadow" style={{ maxWidth: "540px" }}>
        <div className="row">
          <div class="col-4 d-inline my-4 d-flex justify-content-center align-items-center">
            <img
              src={stakeholder.img}
              class="img-fluid rounded-circle ms-2"
              alt="..."
            />
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title m-0">{stakeholder.username}</h5>
              <p class="card-text m-0">{stakeholder.specialization}</p>
              <p class="card-text m-0">{stakeholder.phone}</p>
              <p class="card-text">
                <a>{stakeholder.email}</a>
              </p>
              <button
                className="btn btn-info text-white fw-bold"
                onClick={(e) => {
                  sendRequest(stakeholder._id);
                }}
              >
                {getButtonName()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stakeholder;
