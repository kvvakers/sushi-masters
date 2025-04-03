import axios from "@/api/index";

export const registrate = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post("auth/register", payload)
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API /auth/register err", err);
        reject(err);
      });
  });
};

export const authorizate = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post("auth/login", payload)
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API /auth/login err", err);
        reject(err);
      });
  });
};
