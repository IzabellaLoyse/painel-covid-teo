import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost/covidto/public/dados"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint)
  }
}