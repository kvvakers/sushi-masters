import axios from "@/api/index";

export const getGoods = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("sushi")
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API get /sushi error: " + err);
        reject(err);
      });
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("sushi/categories")
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API get /sushi/categories/ error: " + err);
        reject(err);
      });
  });
};

export const postGoogs = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post("sushi", payload)
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API post /sushi error: " + err);
        reject(err);
      });
  });
};
