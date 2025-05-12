import { defineStore } from "pinia";
import { deleteCartItem, getCartList } from "@/api/cart";
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
    cartIdSet(state) {
      return new Set(state._cartList.map(i => i.sushiId));
    },
    exists() {
      return (id) => this.cartIdSet.has(id);
    }
  },
  actions: {
    addToCart(sushiId, quantity = 1) {
      let item = this.exists(sushiId);
      if (item === undefined) {
        item = {
          sushiId,
          quantity,
        };
        this.cartList.push(item);
      } else {
        item.quantity = quantity;
      }

      return this.postCart(item);
    },
    postCart(item) {
      return withErrorHandling(
        postCartList(item)
      )
        .then((res) => {
          item = res.data;
          console.log(this._cartList);
        })
        .catch((err) => {
          console.log("addToCart error ", err);
          throw new Error();
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
          this._cartList = res.data.items;
        })
        .catch((err) => {
          console.log("fetchCart error ", err);
        });
    },
    deleteItem(sushiId) {
      return withErrorHandling(
        deleteCartItem(sushiId)
      )
        .then((res) => {
          this._cartList = res.data.items;
        })
        .catch((err) => {
          console.log("deleteItem error ", err);
        });
    },

    setCart(cartList) {
      this._cartList = cartList;
    },
  },
});
