import axios from "axios";
const httpProtocol = import.meta.env.VUE_APP_HTTP_PROTOCOL || "http";
const httpsProtocol = import.meta.env.VUE_APP_HTTPS_PROTOCOL || "https";

axios.defaults.baseURL = "https://sushi-masters.onrender.com/api/v1";

axios.defaults.http = import.meta.env.NODE_ENV === "production" ? false : httpProtocol === "http";
axios.defaults.https = import.meta.env.NODE_ENV === "production" ? true : httpsProtocol === "https";

axios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";

  const token = JSON.parse(localStorage.getItem("access_token"));
  const authorizationToken = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorizationToken;
  return config;
});

export default axios;
