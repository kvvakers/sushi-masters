import axios from "@/api/index";

export const getGoods = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("sushi")
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API /sushi error: " + err);
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
        console.log("API /sushi/categories/ error: " + err);
        reject(err);
      });
  });
};
