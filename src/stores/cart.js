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
    },
    findInCart() {
      return (id) => this._cartList.find(i => i.id === id);
    }
  },
  actions: {
    addToCart(sushiId, quantity = 1) {
      let item = this.findInCart(sushiId);
      if (item === undefined) {
        item = {
          sushiId,
          quantity,
        };
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
          this.replaceLocalItem(res.data)
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
        .then(() => this.deleteLocalItem(sushiId))
        .catch((err) => {
          console.log("deleteItem error ", err);
        });
    },

    setCart(cartList) {
      this._cartList = cartList;
    },
    deleteLocalItem(id) {
      this._cartList = this._cartList.filter(i => i.sushiId !== id);
    },
    replaceLocalItem(item) {
      this.deleteLocalItem(item.sushiId);
      this._cartList.push(item);
    }
  },
});
