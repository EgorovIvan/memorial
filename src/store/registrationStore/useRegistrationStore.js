import {defineStore} from "pinia";

export const useRegistrationStore = defineStore('registration', {
  state: () => {
    return {
      visibleRegistrationPopup: false,
      visiblePasswordRecoverPopup: false,
    }
  },
  getters: {},
  actions: {
    setVisibleRegistrationPopup(value) {
      this.visibleRegistrationPopup = value
    },

    setVisiblePasswordRecoverPopup(value) {
      this.visiblePasswordRecoverPopup = value
    },
  },
})