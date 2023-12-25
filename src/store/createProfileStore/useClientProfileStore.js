import {defineStore} from "pinia";

export const useCreateProfileStore = defineStore('createProfile', {
  state: () => {
    return {
      profile: {
        photo: null,
      },
    }
  },

  getters: {
  },

  actions: {
    setPhoto(photo) {
      this.profile.photo = photo;
    }
  },
});