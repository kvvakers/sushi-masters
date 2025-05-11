import { defineStore } from "pinia";
import { getUser } from "../api/user";
import { withErrorHandling } from "@/api/error";

export const useUserStore = defineStore("user", {
  state: () => ({
    _user: undefined,
  }),
  getters: {
    user() {
      return this._user;
    },
  },
  actions: {
    fetchUser() {
      if (this._user !== undefined) {
        return Promise.resolve(this._user);
      }
      return withErrorHandling(
        getUser()
      )
        .then((res) => {
          console.log(res);
          this._user = res.data;
        })
        .catch((err) => {
          console.log("fetchUser error ", err);
        });
    },
    setUser(user) {
      this._user = user;
    },
  },
});
