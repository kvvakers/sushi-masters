import axios from "axios";
import { Token } from "@/utils/Token";

const httpProtocol = import.meta.env.VUE_APP_HTTP_PROTOCOL || "http";
const httpsProtocol = import.meta.env.VUE_APP_HTTPS_PROTOCOL || "https";

axios.defaults.baseURL = "https://sushi-masters.onrender.com/api/v1";

axios.defaults.http = import.meta.env.NODE_ENV === "production" ? false : httpProtocol === "http";
axios.defaults.https = import.meta.env.NODE_ENV === "production" ? true : httpsProtocol === "https";

axios.interceptors.request.use((config) => {
  const isFormData = config.data instanceof FormData;

  if (!isFormData) {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
  } else {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  const token = Token.get();
  const authorizationToken = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorizationToken;
  return config;
});

export default axios;
