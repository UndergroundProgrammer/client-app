import axios from "axios";
import React from "react";
import IncDecCounter from "./IncDecCounter";
import { toast } from "react-toastify";
import customerServices from "./Services/CustomerServices";
import alert from "./Services/Alert";
import { useState } from "react";
const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  const [tData, setTData] = useState([]);
  function getData() {
    customerServices
      .getCartItems()
      .then((data) => {
        setItems(data.cart);
        setTData(data.cart);
        console.log(data.cart);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function checkOut() {
    customerServices
      .checkout(tData)
      .then((data) => {
        window.location.href = data.url;
      })
      .catch((err) => alert.showErrorAlert(err.response.data.message));
  }
  function removeItem(_id) {
    customerServices
      .removeItem(_id)
      .then((res) => {
        console.log(res);
        getData();
        alert.showSuccessAlert("Item removed Successfully");
      })
      .catch((err) => alert.showErrorAlert(err.response.data.message));
  }

  const [items, setItems] = React.useState([]);
  React.useEffect(getData, []);

  return (
    <div className="container" id="cartBody">
      <h1>My Cart</h1>
      <div id="cartTable" className="container pt-3">
        <table className="table shadow-lg ">
          <thead id="cart-header">
            <tr>
              <th scope="col">Item name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  {
                    <IncDecCounter
                      setTData={setTData}
                      items={items}
                      itemId={item._id}
                      tData={tData}
                    />
                  }
                </td>
                <td>
                  <input
                    type="button"
                    value="Remove"
                    className="btn btn-danger"
                    onClick={(e) => {
                      removeItem(item._id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container text-center">
          <button
            className="btn btn-primary signIn-btn "
            id="checkOutButton-btn"
            onClick={checkOut}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
