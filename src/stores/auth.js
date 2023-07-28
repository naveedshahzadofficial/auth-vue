import axios from "axios";
import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    count: 0,
    authUser: null,
    authErrors: [],
    authErrorMsg: "",
  }),
  getters: {},
  actions: {
    async handleLogin(data) {
      this.authErrors = [];
      this.authErrorMsg = "";
      await axios
        .post("/login", {
          email: data.email,
          password: data.password,
        })
        .then((resp) => {
          console.log(resp);
          localStorage.setItem("authToken", resp.data.data.api_token);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
          } else if (error.response.status === 401) {
            this.authErrorMsg = error.response.data.message;
          }
        });
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
