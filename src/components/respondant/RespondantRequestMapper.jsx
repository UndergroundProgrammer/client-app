import doctorServices from "../Services/DoctorServices";
import respondantServices from "../Services/RespondantServices";
import authServices from "../Services/AuthServices";
import React from "react";
import RespondantRequest from "./RespondantRequest";
const RespondantRequestMapper = () => {
  const [requests, setRequests] = React.useState([]);
  function setData() {
    respondantServices
      .getPatients(authServices.getLoginUser()._id)
      .then((data) => {
        setRequests(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(setData, []);
  return (
    <div className="container" id="requestsPage">
      <h1 style={{ marginTop: "5rem" }}>Requests</h1>
      {requests.length == 0 ? (
        <p>There ar no requests</p>
      ) : (
        <div className="row cardLayOut justify-content-center">
          {requests.map((request, key) => (
            <div className="col-lg-5 ">
              <RespondantRequest key={key} request={request} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RespondantRequestMapper;
