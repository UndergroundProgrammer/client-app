import React from "react";
import Medicine from "./Medicine";
import customerServices from "../Services/CustomerServices";
import RiseLoader from "react-spinners/RiseLoader";
const MedicineList = () => {
  const [loading,setLoading]=React.useState(false);
  const [items, setItems] = React.useState([]);
  function getData() {
    setLoading(true);
    customerServices
      .getProducts()
      .then((data) => {
       
        console.log(data);
        setItems(data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(getData, []);
  return (
    <div
      className="container
"
      id="medicines"
    >
      <h1>Medicines</h1>
      <div className="d-flex justify-content-center">
               <RiseLoader color={"#2237ac"} loading={loading} css={"margin-top:300px"} />
               </div>
      {items.length == 0 && !loading? (
        <p>There ar no medicines</p>
      ) : (
        <div className="row cardLayOut" id="medicineList">
          {items.map((item, key) => (
            <div className="col-lg-3 col-md-5 col-sm-8 col-10 ">
              <Medicine key={key} item={item} />
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicineList;
