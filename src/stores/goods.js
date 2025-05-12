import { defineStore } from "pinia";
import { getCategories, getGoods, postGoogs } from "@/api/goods";
import { withErrorHandling } from "@/api/error";

export const useGoodsStore = defineStore("goods", {
  state: () => ({
    _goods: [],
    _categories: [],
  }),
  getters: {
    goods() {
      return this._goods;
    },
    categories() {
      return this._categories;
    },
  },
  actions: {
    fetchGoods() {
      if (this._goods.length) {
        return Promise.resolve(this._goods);
      }
      return withErrorHandling(
        getGoods()
      )
        .then((res) => {
          console.log(res);
          this._goods = res.data;
        })
        .catch((err) => {
          console.log("fetchGoods error ", err);
        });
    },
    fetchCategories() {
      if (this._categories.length) {
        return Promise.resolve(this._categories);
      }
      return withErrorHandling(
        getCategories()
      )
        .then((res) => {
          this._categories = res.data;
        })
        .catch((err) => {
          console.log("fetchCategories error ", err);
        });
    },
    postGoods(data) {
      return withErrorHandling(
        postGoogs(data)
      )
        .then((res) => {
          this._goods.push(res.data);
        })
        .catch((err) => {
          console.log("postGoods error ", err);
        });
    },

    setGoods(goods) {
      this._goods = goods;
    },
    setCategories(categories) {
      this._categories = categories;
    },
  },
});
