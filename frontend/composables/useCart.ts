interface CartItem {
  id: number
  title: string
  price: number
  amount: number
}

export default () => {
  const carts = useState<CartItem[]>('carts', () => [])
  const { auth } = useAuth()
  const router = useRouter()

  onMounted(() => {
    carts.value = JSON.parse(localStorage.getItem('carts') || '[]')
  })

  watch(carts, () => {
    localStorage.setItem('carts', JSON.stringify(carts.value))
  }, { deep: true })

  function addCart(data: CartItem) {
    if (!auth.value) {
      alert('กรุณาเข้าสู่ระบบก่อนดำเนินการต่อ')
      router.push('/login')
      return
    }
    carts.value.push(data)
    alert(`คุณได้เพิ่มสินค้า ${data.title} จำนวน ${data.amount} ชิ้น`)
  }

  function removeCart(index: number) {
    carts.value.splice(index, 1)
  }

  return {
    carts,
    addCart,
    removeCart
  }
}