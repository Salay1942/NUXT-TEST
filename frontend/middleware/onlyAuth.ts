export default defineNuxtRouteMiddleware((to, from) => {
  const { auth } = useAuth()
  if (!auth.value) {
    return navigateTo('/login', {
      redirectCode: 302
    })
  }
})