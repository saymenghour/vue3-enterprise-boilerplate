import axios from "axios";

// Global axios defaults that will be applied to every request.
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use(async (config) => {
  // Do something with request
  return config;
}, async (error: any) => {
  return Promise.reject(error);
});

axios.interceptors.response.use(async (response) => {
  return response;
}, async (error: any) => {
  return Promise.reject(error);
});