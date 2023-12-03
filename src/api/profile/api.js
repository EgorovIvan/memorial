import {api} from "@/api/axiosConfig";

export default {
  async getProfileInfo() {
    return (await api.get('/api/v1/cabinet/user')).data
  },
}