import { BASE_URL } from "@/utils/constants";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// handling global api-call error with axios
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call error:", error);
    // Optionally, you can handle specific error statuses here
    return Promise.reject(error);
  }
);

// You can add interceptors here if needed
// axiosInstance.interceptors.request.use(config => {
//   // Do something before request is sent
//   return config;
// }, error => {
//   // Do something with request error
//   return Promise.reject(error);
// });

export default axiosInstance;
