import React from "react";
const DoctorAppointment = ({ appointment }) => {
  return (
    <div>
      
    <div class="card my-3 shadow-lg" style={{ maxWidth: "540px" }}>
      <div className="row">
        <div class="col-3 d-inline my-4">
          <img
            src={appointment.img}
            class="img-fluid rounded-circle ms-2"
            alt="..."
          />
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">{appointment.username}</h5>
            <p class="card-text mb-0">
              Disease
            </p>
            <p class="card-text mb-0 text-muted">
              {appointment.data.disease}
            </p>
            <hr className="m-0"/>
            <p class="card-text mb-0">
              Purpose
            </p>
            <hr className="m-0"/>
            <p class="card-text mb-0 text-muted">
            {appointment.data.address}
            </p>
            <hr className="m-0"/>
           
           
            <p class="card-text mb-0 text-muted">
             {appointment.data.date}
            </p>
            <hr className="mt-0"/>
            <div className="col-lg-12 d-flex justify-content-center">

           <button className="btn btn-primary mx-3 " onClick={()=>{}}>Chat Now</button>
              
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DoctorAppointment;
