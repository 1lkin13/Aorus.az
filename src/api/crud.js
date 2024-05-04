import axios from "axios";

export default axios.create({
  baseURL: process.env.NODE_ENV==="production"?import.meta.env.VITE_PRODUCTION_API:import.meta.env.VITE_DEVELOPMENT_API
});
