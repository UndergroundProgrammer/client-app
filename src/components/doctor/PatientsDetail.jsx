import React from "react";
const PatientsDetail = () => {
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
                #
              </th>
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Mark</td>
              <td>Otto sdfsdfsd f</td>
              <td>@mdo dsfdsfsdfsdfd</td>
              <td>Mark dsfsdf sdf </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsDetail;
