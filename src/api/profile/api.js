import {api} from "@/api/axiosConfig";

export default {
  async getProfileInfo() {
    return (await api.get('/cabinet/user')).data
  },

  async changeProfile({ username, email, password, confirmPassword, avatar = '' }) {
    const body = new FormData()
    body.append('username', username)
    body.append('email', email)
    body.append('password', password)
    body.append('password_confirmation', confirmPassword)
    body.append('avatar', avatar)
    body.append('_method', 'PUT')
    return (await api.post('/cabinet/user', body, {
      "Content-Type": 'multipart/form-data'
    })).data
  },
}