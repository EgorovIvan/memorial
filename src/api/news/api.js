import {api} from "@/api/axiosConfig";

export default {
  async getFeed() {
    return (await api.get('/feed')).data
  },
}