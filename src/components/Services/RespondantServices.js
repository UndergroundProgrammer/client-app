import GenericService from "./GenericService";
class RespondantServices extends GenericService {
  constructor() {
    super();
  }

  getPatients = (_id) => this.get("doctor/respondant/" + _id);
}
let respondantServices = new RespondantServices();
export default respondantServices;
