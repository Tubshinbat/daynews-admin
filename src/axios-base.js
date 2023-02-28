import axios from "axios";

const instance = axios.create({
  baseURL: "http://admin.daynews.mn/api/",
});

instance.defaults.withCredentials = true;

export default instance;
