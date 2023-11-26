import {defineStore} from "pinia";

export const useClientStore = defineStore('client', {
  state: () => {
    return {
      user: {
        id: null,
        email: null,
        username: null,
        avatar: null,
      },
    }
  },

  getters: {
    clientIsAuth() {
      return this.user.email !== null
    },
  },

  actions: {
    setUser({ id, email, username, avatar }) {
      this.user = {id, email, username, avatar }
    },
  },
});