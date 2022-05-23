import React from "react";
import customerServices from "../Services/CustomerServices"
import authServices from "../Services/AuthServices"
import alert from "../Services/Alert"
import ReadMoreReadLess from "../ReadMoreReadLess"
import {useNavigate} from "react-router-dom"

const Medicine = ({ item }) => {
  const navigate=useNavigate();
 function addToCart(_id)
 {
  //  if(!authServices.isLoggedIn())
  //  {
  //    alert.showErrorAlert("You should must Login");
  //    navigate("/login");
  //    return;
  //  }
    customerServices.addToCart(_id).then((data) => {
      console.log(data);
    alert.showSuccessAlert("Prooduct added to cart successfully");
    })
    .catch((err) => {
      alert.showErrorAlert(err.response.data.message);
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
{item.description.length>15?<><ReadMoreReadLess limit={15} children={item.description}></ReadMoreReadLess></>:<>  <p className="card-text">{item.description}</p></>}
         
          

        

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
