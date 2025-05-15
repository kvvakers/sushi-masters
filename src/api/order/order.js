import axios from "@/api/index";

export const getOrderList = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("orders")
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API get /orders error: " + err);
        reject(err);
      });
  });
};

export const postOrder = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post("orders", payload)
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API post /orders error: " + err);
        reject(err);
      });
  });
};
