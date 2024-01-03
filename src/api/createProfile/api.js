import {api} from "@/api/axiosConfig";

export default {
  async getLinkedProfiles(gender) {
    return (await api.get('/profile/humans', {
      params: {
        gender
      },
    })).data
  },
  async createProfile(body) {
    return (await api.post('/profile/humans', body, {
      "Content-Type": 'multipart/form-data'
    })).data
  },
}