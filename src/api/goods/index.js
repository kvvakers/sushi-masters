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
