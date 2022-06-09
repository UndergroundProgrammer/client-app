import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const MedinceDetail = () => {
  const location = useLocation();
  const [medicine, setMedcine] = useState(location.state.medicine);
  debugger;
  return (
    <div>
      <div className="container" id="medicine-details">
        <div className="row from-row shadow-lg" id="appointment-form">
          <div className="col-lg-6 form-brand text-center ">
            <h2 className="mt-3">Medicine Details</h2>
            <div className="row mt-5">
              <div className="col-lg-12 ">
                <img
                  src={medicine.img}
                  alt="image"
                  id="appointmentDetailsimg"
                />
              </div>

              <div className="col-lg-12 my-3">
                <h1>{medicine.title}</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-5">
            <h5>Description</h5>
            <h6>{medicine.description}</h6>
            <hr />
            <h5>Price</h5>
            <h6>{medicine.price}</h6>
            <hr />
            <button className="btn btn-primary mt-5">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedinceDetail;
