import {defineStore} from "pinia";

export const useCreateProfileStore = defineStore('createProfile', {
  state: () => {
    return {
      profile: {
        photo: null,
        name: '',
        surname: '',
        lastname: '',
        dateBirth: '',
        placeBirth: '',
        dateDeath: '',
        burialPlace: '',
        causeDeath: '',
      },
    }
  },

  getters: {
  },

  actions: {
    setPhoto(photo) {
      this.profile.photo = photo;
    },
    setName(name) {
      this.profile.name = name;
    },
    setSurname(name) {
      this.profile.surname = name;
    },
    setLastname(name) {
      this.profile.lastname = name;
    },
    setDateBirth(date) {
      this.profile.dateBirth = date;
    },
    setPlaceBirth(place) {
      this.profile.placeBirth = place;
    },
    setDateDeath(date) {
      this.profile.dateDeath = date;
    },
    setBurialPlace(place) {
      this.profile.burialPlace = place;
    },
    setCauseDeath(cause) {
      this.profile.causeDeath = cause;
    },
  },
});