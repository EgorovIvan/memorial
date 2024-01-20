import {api} from "@/api/axiosConfig";

export default {
  async getUser() {
    return (await api.get('/cabinet/user')).data
  },
}