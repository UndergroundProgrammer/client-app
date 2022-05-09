import React from "react";
import FileUploader from "../components/FileUploader";
import convertImageToBase64 from "../components/ImageBase64";
import { uploadImage } from "../components/ImageUpload";
import { useNavigate } from "react-router-dom";
import alert from "./Services/Alert";
import customerServices from "./Services/CustomerServices";
import authServices from "./Services/AuthServices";
const SignUp = () => {
  let navigate = useNavigate();
  const [imgUrl, setImgUrl] = React.useState();
  const [data, setData] = React.useState({
    userType: "patient",
    username: "",
    email: "",
    password: "",
    specialization: "",
    phone: "",
    city: "",
    img: "",
  });
  function handleData(key, value) {
    setData({ ...data, [key]: value });
  }

  const onDrop = (acceptedFiles, rejectedFiles, imgName) => {
    if (rejectedFiles.length > 0) {
      alert.showWarningAlert("Upload only one image and size limit of 1 MB");
      return;
    } else if (acceptedFiles) {
      convertImageToBase64(acceptedFiles[0], (result, success) => {
        if (success) {
          uploadImage(result, (url, success) => {
            if (success) {
              handleData("img", `${url}`);
              setImgUrl(acceptedFiles[0].name);
            }
          });
        }
      });
    }
  };
  function signUp() {
    authServices
      .registerUser(data)
      .then((data) => {
        console.log(data);
        alert.showSuccessAlert("The user registered successfully!");
        navigate("/dashboard");
      })
      .catch((err) => alert.showErrorAlert(err));
  }
  return (
    <section className="login-form shadow-lg">
      <div className="container">
        <div className="row from-row">
          <div className="col-lg-5 d-flex align-items-center text-center form-brand ">
            <div>
              <h1>AR MEDICARE</h1>
              <h3>Pakistan's Medicare is now online</h3>
            </div>
          </div>
          <div className="col-lg-7 px-5">
            <h2 className="mt-3">Sign up</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group mb-2 col-lg-9">
                <label className="form-label " for="userType">
                  Select Account Type
                </label>
                <select
                  id="userType"
                  className="form-control dropdownMenu"
                  onChange={(e) => {
                    handleData("userType", e.target.value);
                  }}
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="respondant">Respondant</option>
                  <option value="pharmicst">Pharmicst</option>
                </select>
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("username", e.target.value);
                  }}
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    handleData("email", e.target.value);
                  }}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("password", e.target.value);
                  }}
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("phone", e.target.value);
                  }}
                />
              </div>
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  city
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    handleData("city", e.target.value);
                  }}
                />
              </div>
              {data.userType === "doctor" ? (
                <div class="mb-2 col-lg-9">
                  <label for="exampleInputPassword1" class="form-label">
                    Specialization
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      handleData("specialization", e.target.value);
                    }}
                  />
                </div>
              ) : (
                <></>
              )}
              <div class="mb-2 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  upload an image
                </label>

                <FileUploader
                  placeholder={imgUrl ? imgUrl : "Click here to upload"}
                  accept={["image/jpeg", "image/png", "image/bmp"]}
                  maxFiles={1}
                  maxSize={1000000}
                  onDrop={(acceptedFiles, rejectedFiles) =>
                    onDrop(acceptedFiles, rejectedFiles, "frontSideImage")
                  }
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary signIn-btn mb-5"
                onClick={() => {
                  signUp();
                }}
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
