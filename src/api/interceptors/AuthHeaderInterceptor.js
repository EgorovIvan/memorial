import {useCookie} from "@/composables/useCookie";

export default function(config) {
  const token = useCookie().getCookie('authToken')
  if (token?.length !== 0) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}