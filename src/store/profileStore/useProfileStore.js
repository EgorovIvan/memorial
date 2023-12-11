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
    setPhoto(photo) {
      this.user.avatar = photo
    },
    setUsername(name) {
      this.user.username = name
    },
    setEmail(email) {
      this.user.email = email
    },
    async getProfileInfo() {
      const { user } = await api.getProfileInfo()
      this.user = user
    },

    async changePhoto(photo) {
      await api.changeProfile({
        username: this.user.username,
        email: this.user.email,
        password: '',
        confirmPassword: '',
        avatar: photo,
      })
    },

    async changeProfile(password, confirmPassword) {
      await api.changeProfile({
        username: this.user.username,
        email: this.user.email,
        password,
        confirmPassword,
      })
    },
  },
})