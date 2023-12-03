import {api} from "@/api/axiosConfig";

export default {
  async getProfileInfo() {
    return (await api.get('/cabinet/user')).data
  },

  async changeProfile({ username, email, password, confirmPassword, avatar }) {
    return (await api.post('/cabinet/user', {
      username,
      email,
      password: password || null,
      password_confirmation: confirmPassword || null,
      avatar: avatar || null,
      _method: 'PUT'
    })).data
  },
}