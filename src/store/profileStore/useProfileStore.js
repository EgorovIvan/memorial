import {defineStore} from "pinia";
import api from "@/api/profile/api";

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      user: {
        id: null,
        username: null,
        email: null,
        avatar: null,
        profiles_count: null,
        accesses_count: null,
      },
    }
  },
  getters: {},
  actions: {
    async getProfileInfo() {
      const { user } = await api.getProfileInfo()
      this.user = user
    },

    async changePhoto(photo) {
      this.user.avatar = photo
      // await api.changeProfile({
      //   username: this.user.username,
      //   email: this.user.email,
      //   avatar: photo,
      // })
    },

    async changeProfile(username) {
      this.user.username = username
      await api.changeProfile({
        username,
        email: this.user.email,
      })
    },
  },
})