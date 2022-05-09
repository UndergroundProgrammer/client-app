import GenericService from "./GenericService";
class AuthServices extends GenericService {
  static patientId = "";
  constructor() {
    super();
  }

  registerUser = (data) => this.post("auth/register/", data);
  login = (data) => this.post("auth/login/", data);
}
let authServices = new AuthServices();
export default authServices;
