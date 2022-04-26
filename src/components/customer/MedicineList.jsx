import react from "react";
import React from "react";
import Menu from "./Menu";
import axios from "axios";
import productService from "../services/ProductsService";

const MedicineList = () => {
  //   function getData() {
  //     productService
  //       .getProducts()
  //       .then((data) => {
  //         console.log(data);
  //         setItems(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  const [items, setItems] = React.useState([]);
  React.useEffect(getData, []);
  return (
    <div className="container">
      <h1>Items</h1>
      {items.length == 0 ? (
        <p>There ar no products</p>
      ) : (
        <div className="row cardLayOut">
          {items.map((item, key) => (
            <div className="col-lg-4 col-md-5 col-sm-8 col-10 ">
              <Menu key={key} item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicineList;
