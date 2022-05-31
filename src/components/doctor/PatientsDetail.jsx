import React, { useState } from "react";
import axios from "axios";
import authServices from "../Services/AuthServices";
const PatientsDetail = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get(
        "https://ar-medicare-backend.herokuapp.com/api/doctor/doctorPatientsHistory/" +
          authServices.getLoggedInUser()._id
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  React.useEffect(getData, []);
  return (
    <div className="container" id="patientDetailTable">
      <div>
        <h1>Patients Detail</h1>
      </div>
      <div className="patient-table-wrapper">
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th className="tbl-col" scope="col">
                Name
              </th>
              <th className="tbl-col" scope="col">
                Age
              </th>
              <th className="tbl-col" scope="col">
                Symptoms
              </th>

              <th className="tbl-col" scope="col">
                Diagnosis
              </th>
              <th className="tbl-col" scope="col">
                Prescription
              </th>
              <th className="tbl-col" scope="col">
                Reschedulling visit
              </th>
              <th className="tbl-col" scope="col">
                Date Time
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((dataItem) => (
              <tr>
                <td>{dataItem.username}</td>
                <td>{dataItem.age}</td>
                <td>{dataItem.symptoms}</td>
                <td>{dataItem.diagnosis}</td>
                <td>{dataItem.prescription}</td>
                <td>{dataItem.rescheduleVisit}</td>
                <td>{dataItem.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsDetail;
