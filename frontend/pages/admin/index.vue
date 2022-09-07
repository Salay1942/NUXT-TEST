<script setup lang="ts">

definePageMeta({
  layout: false,
  middleware: (to, from) => {
    const { admin } = useAuth()
    if (admin.value) {
      return navigateTo('/admin/dashboard', {
        redirectCode: 302
      })
    }
  }
})

const { checkAdmin } = useAuth()
const router = useRouter()

const input = reactive({
  username: '',
  password: ''
})

const loading = ref(false)

async function onLoginAsAdmin() {
  loading.value = true
  try {
    const res = await $fetch<{ message: string }>('/api/admin/login', {
      method: 'post',
      body: input
    })
    await checkAdmin()
    alert(res.message)
    router.push('/admin/dashboard')
  } catch (error) {
    alert(error.data.message)
  }
  loading.value = false
}
</script>

<template>
  <div class="flex min-h-screen justify-center items-center">
    <form @submit.prevent="onLoginAsAdmin" class="w-64 shadow p-3 space-y-3">
      <div>
        <h1 class="text-xl font-bold mb-4">Admin Panel</h1>
      </div>
      <label class="block">
        <div class="mb-1">ชื่อผู้ใช้งาน:</div>
        <input v-model="input.username" class="input w-full" type="text">
      </label>
      <label class="block">
        <div class="mb-1">รหัสผ่าน:</div>
        <input v-model="input.password" class="input w-full" type="password">
      </label>
      <div>
        <button :disabled="loading" class="btn is-primary w-full mt-2">เข้าสู่ระบบ</button>
      </div>
    </form>
  </div>
</template>