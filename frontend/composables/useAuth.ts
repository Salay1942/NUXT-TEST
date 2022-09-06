export interface User {
  id: number
  email: string
  createdAt: string
}


export default () => {
  const auth = useState<User | undefined>('auth', () => undefined)

  async function checkAuth() {
    const res = await $fetch<{ auth: User | undefined }>('http://localhost:3000/api/auth', {
      headers: useRequestHeaders(['cookie'])
    }) // = localhost:80
    auth.value = res.auth
  }

  async function logout() {
    const res = await $fetch<{ message: string }>('/api/logout')
    alert(res.message)
    auth.value = undefined
  }

  return {
    auth,
    logout,
    checkAuth
  }
}