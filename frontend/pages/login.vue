<script setup lang="ts">
const { checkAuth } = useAuth()
const router = useRouter()

const input = reactive({
  email: '',
  password: ''
})

const loading = ref(false)

async function onLogin() {
  loading.value = true
  try {
    const res = await $fetch<{ message: string }>('/api/login', {
      method: 'post',
      body: input
    })
    await checkAuth()
    alert(res.message)
    router.push('/')
  } catch (error) {
    alert(error.data.message)
  }
  loading.value = false
}
</script>

<template>
  <div class="w-96 mx-auto shadow p-4 rounded">
    <h1 class="text-2xl font-bold">เข้าสู่ระบบ</h1>
    <hr class="my-4">
    <form class="space-y-3" @submit.prevent="onLogin">
      <label class="block">
        <div class="mb-1">ที่อยู่อีเมล:</div>
        <input v-model="input.email" class="input w-full" type="email" required>
      </label>
      <label class="block">
        <div class="mb-1">รหัสผ่าน:</div>
        <input v-model="input.password" class="input w-full" type="password" required>
      </label>
      <div>
        <button :disabled="loading" class="btn is-primary w-full mt-3">ส่งข้อมูล</button>
      </div>
    </form>
  </div>
</template>