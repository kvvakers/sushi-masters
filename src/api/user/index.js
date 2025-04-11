import axios from "@/api/index";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("user")
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API get /user error: " + err);
        reject(err);
      });
  });
};
