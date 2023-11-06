import {defineStore} from "pinia";

export const useRegistrationStore = defineStore('registration', {
  state: () => {
    return {
      visibleRegistrationPopup: false,
    }
  },
  getters: {},
  actions: {
    setVisibleRegistrationPopup(value) {
      this.visibleRegistrationPopup = value
    }
  },
})