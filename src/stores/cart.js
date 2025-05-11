import { defineStore } from "pinia";
import { getCartList } from "@/api/cart";
import { withErrorHandling } from "@/api/error";
import { postCartList } from "@/api/cart";

export const useCartStore = defineStore("cart", {
  state: () => ({
    _cartList: [],
  }),
  getters: {
    cartList() {
      return this._cartList;
    },
  },
  actions: {
    addToCart(sushiId, quantity = 1) {
      const item = this._cartList.find(i => i.id === sushiId);
      if (item === undefined) {
        this._cartList.push({
          sushiId,
          quantity,
        });
      } else {
        item.quantity = quantity;
      }

      return this.postCart();
    },
    postCart() {
      return withErrorHandling(
        postCartList(this._cartList)
      )
        .then((res) => {
          this._cartList = res.data;
          console.log(this._cartList)
        })
        .catch((err) => {
          console.log("addToCart error ", err);
        });
    },
    fetchCart() {
      if (this._cartList.length) {
        return Promise.resolve(this._cartList);
      }
      return withErrorHandling(
        getCartList()
      )
        .then((res) => {
          this._cartList = res.data;
        })
        .catch((err) => {
          console.log("fetchCart error ", err);
        });
    },

    setCart(cartList) {
      this._cartList = cartList;
    },
  },
});
