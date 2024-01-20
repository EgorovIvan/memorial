import {useClientStore} from "@/store/clientStore/useClientStore";

export default async function (to, from, next) {
  const clientStore = useClientStore()

  try {
    await clientStore.getUser()
  } catch (e) {
    if (e.response?.status === 401) {
      next('/login')
    }
  }

  next()
}
