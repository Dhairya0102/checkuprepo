import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://checkuprepo.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;