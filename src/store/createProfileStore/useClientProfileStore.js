import {defineStore} from "pinia";
import api from "@/api/createProfile/api";

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
        additionalPhotos: [],
        deathCertificate: null,
        description: '',
        religion: '',
        access: 'public',
      },
    }
  },

  getters: {
    getDeathCertificateName() {
      return this.profile.deathCertificate?.name;
    },
    getFullName() {
      return `${this.profile.lastname} ${this.profile.name} ${this.profile.surname}`
    },
    getUserBackground() {
      return window.URL.createObjectURL(this.profile.photo);
    },
    getFormattedDataForRequest() {
      const body = new FormData()
      body.append('first_name', this.profile.name)
      body.append('last_name', this.profile.surname)
      body.append('middle_name', this.profile.lastname)
      body.append('gender', 'male')
      body.append('date_birth', this.profile.dateBirth)
      body.append('date_death', this.profile.dateDeath)
      body.append('birth_place', this.profile.placeBirth)
      body.append('burial_place', this.profile.burialPlace)
      body.append('father_id', null)
      body.append('mother_id', null)
      body.append('spouse_id', null)
      body.append('description', this.profile.description)
      body.append('access', this.profile.access)
      body.append('avatar', this.profile.photo)
      this.profile.additionalPhotos.forEach((photo) => body.append('gallery[]', photo))
      body.append('banner', null)
      body.append('death_certificate', this.profile.deathCertificate)
      body.append('hobbies', null)
      body.append('religion', this.profile.religion)
      body.append('burial_coords', null)
      body.append('as_draft', false)
      body.append('burial_coords.lat', null)
      body.append('burial_coords.ing', null)

      return body;
    }
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
    addAdditionalPhoto(file) {
      this.profile.additionalPhotos.push(file)
    },
    setDeathCertificate(file) {
      this.profile.deathCertificate = file;
    },
    setDescription(value) {
      this.profile.description = value;
    },
    setReligion(value) {
      this.profile.religion = value;
    },
    setAccess(value) {
      this.profile.access = value;
    },
    async createProfile() {
      await api.createProfile(this.getFormattedDataForRequest)
    }
  },
});