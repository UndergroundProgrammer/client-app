import React from "react";
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
        </div>
      </div>
    </div>
  );
};
export default Medicine;
