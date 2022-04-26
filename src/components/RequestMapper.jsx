import React from "react";
import Request from "./Request";
const RequestMapper = () => {
  const [requests, setrequests] = React.useState([
    {
      name: "Arslan",
      email: "arslanahmad@gmail.com",
      imgUrl: "images/doctor1.jpg",
    },
    { name: "Ahmad", email: "ahmad@gmail.com", imgUrl: "images/doctor2.jpg" },
    { name: "Ali", email: "ali@gmail.com", imgUrl: "images/doctor3.jpeg" },
    {
      name: "Pakeeza",
      email: "pakeeza@gmail.com",
      imgUrl: "images/doctor4.jpeg",
    },
  ]);
  return (
    <div className="container">
      <h1 style={{ marginTop: "5rem" }}>Requests</h1>
      {requests.length == 0 ? (
        <p>There ar no products</p>
      ) : (
        <div className="row cardLayOut justify-content-center">
          {requests.map((request, key) => (
            <div className="col-lg-5 ">
              <Request key={key} request={request} />{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestMapper;
