import React from "react";
import customerServices from "../Services/CustomerServices";
import StakeholderMapper from "./StakeholderMapper";
const Stakeholder = ({ stakeholder, dataType }) => {
  function sendRequest(_id) {
    var method = () => {};
    if (dataType == "Doctors") method = customerServices.requestDoctor;
    else if (dataType == "Respondants")
      method = customerServices.requestRespondant;

    method(_id, customerServices.getLoginUserId())
      .then((data) => {
        console.log(data);
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
