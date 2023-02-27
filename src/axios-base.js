import axios from "axios";

const instance = axios.create({
  baseURL: "http://daynews-admin.metaldoor.mn/api/v1/",
});

instance.defaults.withCredentials = true;

export default instance;
