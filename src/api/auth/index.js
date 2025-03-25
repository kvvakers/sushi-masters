import axios from "@/api/index";

export const register = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post("auth/register", payload)
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("Register err", err);
        reject(err);
      });
  });
};
