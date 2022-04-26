import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
const Medicine = ({ item }) => {
  return (
    <div>
      <div className="card shadow-lg">
        <img
          className="card-img-top productImg"
          src={item.imgSrc}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <a className="btn btn-primary col-6">Add to cart</a>
          <p className="card-text col-6 d-inline">
            <strong>{item.price}PKR</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Medicine;
