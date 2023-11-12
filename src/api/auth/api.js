import axios from "axios";

const path = 'https://memorialbook.site/api/v1'

export default {
  async registration({ username, email, password, confirmPassword, fcmToken, deviceName, location }) {
    return (await axios.post(`${path}/auth/register`, {
      username,
      email,
      password,
      password_confirmation: confirmPassword,
      fcm_token: fcmToken,
      device_name: deviceName,
      location,
    })).data
  },
}