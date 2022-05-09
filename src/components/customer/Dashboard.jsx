import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div className="container-fluid px-0">
      <div className="row container-fluid px-0 mx-auto dashboard-brand">
        <div className="px-0 col-lg-5 col-6 m-5  text-white ">
          <div className="ms-5 mt-5">
            <h1 className="">We have Best Medicare plan options for you</h1>
            <h5>Find a doctor today and book your appointment online NOW</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-3 justify-content-center">
          <div className="col-lg-4 text-center">
            <h1>Our Services</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-5  ">
            <div class="card my-3 shadow" style={{ maxWidth: "540px" }}>
              <div className="row">
                <div class="col-4 d-inline">
                  <img
                    src="images/doctoLogo.png"
                    class="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Doctors</h5>
                    <p class="card-text"></p>
                    <button
                      className="btn btn-card btn-primary"
                      onClick={() => navigate("/doctors")}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5  ">
            <div class="card my-3 shadow" style={{ maxWidth: "540px" }}>
              <div className="row">
                <div class="col-4 d-inline">
                  <img
                    src="images/nurseLogo.jpg"
                    class="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Respondants</h5>
                    <p class="card-text"></p>
                    <button className="btn btn-card btn-primary">
                      Consult Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-lg-4 text-center">
            <h1>How it Works</h1>
          </div>
        </div>
        <div className="row m-5 justify-content-center align-items-center">
          <div className="col-lg-4 d-flex justify-content-center">
            <img className="rounded-circle" src="images/doctoLogo.png" alt="" />
          </div>
          <div className="col-lg-5">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-2 work-count text-center">1</div>
              <div className="col-lg-10 col-6 mt-4 ">
                <h2>Choose from our list of specialists</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-5 justify-content-center align-items-center">
          <div className="col-lg-5">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-2 work-count text-center">2</div>
              <div className="col-lg-10 col-6 mt-4 ">
                <h2>Pick up from our list of verified doctors</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <img className="rounded-circle" src="images/doctoLogo.png" alt="" />
          </div>
        </div>
        <div className="row m-5 justify-content-center align-items-center">
          <div className="col-lg-4 d-flex justify-content-center">
            <img className="rounded-circle" src="images/doctoLogo.png" alt="" />
          </div>
          <div className="col-lg-5">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-2 work-count text-center">3</div>
              <div className="col-lg-10 col-6 mt-4 ">
                <h2>Begin your consultation</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
