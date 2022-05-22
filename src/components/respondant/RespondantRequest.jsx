import React from "react";
const RespondantRequest = ({ request }) => {
  return (
    <div>
      
      <div class="card my-3 shadow-lg" style={{ maxWidth: "540px" }}>
        <div className="row">
          <div class="col-3 d-inline my-4">
            <img
              src={request.img}
              class="img-fluid rounded-circle ms-2"
              alt="..."
            />
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">{request.username}</h5>
              <p class="card-text">
                <a>{request.data.disease}</a>
              </p>
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <button className="btn btn-primary m-3">Accept</button>
            <button className="btn btn-danger m-3">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RespondantRequest;
