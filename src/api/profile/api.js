import {api} from "@/api/axiosConfig";

export default {
  async getProfileInfo() {
    return (await api.get('/cabinet/user')).data
  },
}