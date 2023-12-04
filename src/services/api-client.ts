import axios from "axios";

const baseURL = `https://v6.exchangerate-api.com/v6/${
  import.meta.env.VITE_API_KEY
}/latest/`;

const apiClient = axios.create({
  baseURL,
});

export default apiClient;
