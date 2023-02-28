import axios from "axios";

const instance = axios.create({
  baseURL: "https://admin.daynews.mn/api/",
});

instance.defaults.withCredentials = true;

export default instance;
