import axios from "@/api/index";

export const getCartList = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("cart")
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API get /cart error: " + err);
        reject(err);
      });
  });
};

export const postCartList = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post("cart/items", payload)
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API post /cart/items error: " + err);
        reject(err);
      });
  });
};

export const clearCartItem = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`cart/items/${id}`)
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API delete /cart/items error: " + err);
        reject(err);
      });
  });
};

export const clearCartList = () => {
  return new Promise((resolve, reject) => {
    axios
      .delete("cart")
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("API delete /cart error: " + err);
        reject(err);
      });
  });
};
