import React from "react";
import Stakeholder from "./Stakeholder";
import RiseLoader from "react-spinners/RiseLoader";
const StakeholderMapper = ({ method, dataType }) => {
  const [loading,setLoading]=React.useState(false);
  const [stakeholders, setStakeholders] = React.useState([]);
  function getData() {
    setLoading(true);
    method()
      .then((data) => {
        console.log(data);
        setStakeholders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(getData, [method]);
  return (

    <div className="container" id="stakeholder">
      <h1 style={{ marginTop: "5rem" }}>{dataType}</h1>
      <div className="d-flex justify-content-center">
               <RiseLoader color={"#2237ac"} loading={loading} css={"margin-top:300px"} />
               </div>
      {stakeholders.length == 0 && !loading ? (
        <p>There is no data </p>
      ) : (
        <div className="row cardLayOut justify-content-center">
               
          {stakeholders.map((stakeholder, key) => (
            <div className="col-lg-5 ">
              <Stakeholder
                key={key}
                stakeholder={stakeholder}
                dataType={dataType}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StakeholderMapper;
