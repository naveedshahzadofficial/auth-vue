import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Content-Type"] = "application/json";
//axios.defaults.withCredentials = true;
//axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("authToken");

axios.defaults.baseURL = "http://smerp.test/api/v1";
