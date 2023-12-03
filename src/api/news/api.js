import axios from "axios";
import {useCookie} from "@/composables/useCookie";

const path = process.env.VUE_APP_BASE_PATH
const token = useCookie().getCookie('authToken')

export default {
  async getFeed() {
    return (await axios.get(`${path}/feed`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })).data
  },
}