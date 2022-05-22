import React from "react";
import customerServices from "../Services/CustomerServices"
import authServices from "../Services/AuthServices"
const Medicine = ({ item }) => {
 function addToCart(_id)
 {
    customerServices.addToCart(_id).then((data) => {
    authServices.showSuccessAlert("Prooduct added to cart successfully");
     
    })
    .catch((err) => {
      authServices.showErrorAlert(err.response.data.message);
    });
 }
  return (
    <div>
      <div className="card shadow-lg" id="MedicineCard">
        <img
          className="card-img-top "
          id="productImg"
          src={item.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
{item.description.length>15?<> <p className="card-text ">
          {item.description.slice(0,15)}
            <span id="dots">...</span>
            <span id="more">
            {item.description.slice(11)}
            </span>
            <a href="#" className="ms-1" onClick={window["handleReadMore"]} id="myBtn">
            Read more
          </a>
          </p></>:<>  <p className="card-text">{item.description}</p></>}
         
          

        

          <div className="d-flex">
            <a className="btn btn-primary col-6" onClick={(e) => {addToCart(item._id)}}>
              Add to cart
            </a>
            <p className="card-text col-6 mt-1 ms-5">
              <strong>{item.price}PKR</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Medicine;
