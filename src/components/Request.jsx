import React from "react";
const Request = ({ request }) => {
  return (
    <div>
      <div class="card my-3 shadow-lg" style={{ maxWidth: "540px" }}>
        <div className="row">
          <div class="col-3 d-inline my-4">
            <img
              src={request.imgUrl}
              class="img-fluid rounded-circle ms-2"
              alt="..."
            />
          </div>
          <div class="col-6">
            <div class="card-body">
              <h5 class="card-title">{request.name}</h5>
              <p class="card-text">
                <a>{request.email}</a>
              </p>
            </div>
          </div>
          <div className="col-2 d-flex align-items-center">
            <button className="btn btn-primary">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
