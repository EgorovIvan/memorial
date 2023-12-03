import axios from 'axios';
import {useCookie} from "@/composables/useCookie";

const token = useCookie().getCookie('authToken')

const api = axios.create({
  baseURL: 'https://memorialbook.site/api/v1',
  headers: {'Authorization': `Bearer ${token}`}
});

export {
  api,
}