import {api} from "@/api/axiosConfig";

export default {
  async getLinkedProfiles(gender) {
    return (await api.get('/profile/humans', {
      params: {
        gender
      },
    })).data
  },
}