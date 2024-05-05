import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ?
  import.meta.env.VITE_PRODUCTION_API :
  import.meta.env.VITE_DEVELOPMENT_API;

const axiosInstance = axios.create({
  baseURL: baseURL
});

export { axiosInstance, baseURL };