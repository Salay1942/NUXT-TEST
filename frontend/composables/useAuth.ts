interface User {
  id: number
  email: string
  createdAt: string
}

interface Admin {
  id: number
  username: string
  createdAt: string
}

export default () => {
  const axios = useAxios()
  const router = useRouter()

  const auth = useState<User | undefined>('auth', () => undefined)
  const admin = useState<Admin | undefined>('admin', () => undefined)

  async function checkAuth() {
    const res = await axios.get<{ auth: User | undefined }>('/api/auth') // = localhost:80
    auth.value = res.data.auth
  }

  async function checkAdmin() {
    const res = await axios.get<{ admin: Admin | undefined }>('/api/admin')
    admin.value = res.data.admin
  }

  async function logout() {
    const res = await axios.get<{ message: string }>('/api/logout')
    alert(res.data.message)
    auth.value = undefined
    router.push('/')
  }

  return {
    auth,
    admin,
    logout,
    checkAuth,
    checkAdmin
  }
}