<script setup lang="ts">
import Product from '~~/interface/Product'

definePageMeta({
  layout: 'admin',
  middleware: ['only-admin']
})

const route = useRoute()
const router = useRouter()
const axios = useAxios()

interface Input {
  title: string
  description: string
  images: string[]
  price: number
}

const input = reactive<Input>({
  title: '',
  description: '',
  images: [],
  price: 0
})

const id = ref(-1)
const isCreate = route.params.id === 'create'
let refreshCache: () => Promise<void> | null = null
if (!isCreate) {
  // == useFetch('/api/users')
  // == useAsyncData('/api/users', () => $fetch('/api/users'))
  // != useAsyncData('/api/users', () => axios('/api/users'))
  const { data, refresh } = await useAsyncData<{ product: Product }>(
    `admin-products-${route.params.id}`,
    async () => {
      const res = await axios.get(`/api/products/${route.params.id}`)
      return res.data
    }
  )
  refreshCache = refresh
  const product = data.value.product
  // const res = await axios.get(`/api/products/${route.params.id}`)
  // const product = res.data.product
  id.value = product.id
  input.title = product.title
  input.description = product.description
  input.images = product.images.split(',')
  input.price = product.price
}

const loading = ref(false)

async function onUpsertProduct() {
  loading.value = true
  try {
    const res = await axios.post<{ message: string }>(
      '/api/admin/products',
      {
        title: input.title,
        description: input.description,
        images: input.images.join(','),
        price: input.price
      },
      {
        params: {
          id: id.value
        }
      }
    )
    if (refreshCache) {
      refreshCache()
    }
    alert(res.data.message)
    router.push('/admin/products')
  } catch (error) {
    alert(error.data.message)
  }
  loading.value = false
}
</script>

<template>
  <div>
    <h2 class="font-xl font-bold">{{ isCreate ? 'เพิ่มสินค้า' : `แก้ไขสินค้า (ID: ${id})` }}</h2>
    <hr class="my-2">
    <form @submit.prevent="onUpsertProduct" class="space-y-2">
      <label class="block">
        <div class="mb-1">ชื่อสินค้า:</div>
        <input v-model="input.title" class="w-full input" type="text">
      </label>
      <label class="block">
        <div class="mb-1">ราคา:</div>
        <input v-model="input.price" class="w-full input" type="number">
      </label>
      <div>
        <div class="mb-1">รูปภาพ:</div>
        <div v-for="(image, i) of input.images" :key="i" class="flex mb-2 gap-1">
          <input v-model="input.images[i]" class="w-full input" type="url" placeholder="กรุณาระบุลิงก์ที่อยู่ของรูปภาพ">
          <button type="button" class="btn is-danger" @click="input.images.splice(i, 1)">ลบ</button>
        </div>
        <button type="button" class="btn is-secondary" @click="input.images.push('')">เพิ่มรูปภาพ</button>
      </div>
      <label class="block">
        <div class="mb-1">คำอธิบาย:</div>
        <TRichTextEditor v-model="input.description"></TRichTextEditor>
      </label>
      <div>
        <button class="btn is-primary">บันทึก</button>
      </div>
    </form>
  </div>
</template>