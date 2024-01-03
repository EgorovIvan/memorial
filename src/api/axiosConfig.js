import axios from 'axios';
import AuthHeaderInterceptor from "@/api/interceptors/AuthHeaderInterceptor";

const api = axios.create({
  baseURL: 'https://memorialbook.site/api/v1',
});

api.interceptors.request.use(AuthHeaderInterceptor)

export {
  api,
}