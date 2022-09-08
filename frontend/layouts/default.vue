<script setup lang="ts">
const { auth, logout } = useAuth()
const showDropdown = ref(false)

const { carts } = useCart()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <nav class="bg-gray-800 text-white p-3">
      <div class="container">
        <div class="flex justify-between">
          <div>
            <NuxtLink to="/" class="font-bold">Online Shopping</NuxtLink>
          </div>
          <div class="space-x-1">
            <div v-if="auth" class="flex gap-1">
              <NuxtLink to="/carts">ตะกร้าสินค้า ({{ carts.length }})</NuxtLink>
              <div class="relative">
                <div class="inline btn" @click="showDropdown = !showDropdown">{{ auth.email }}</div>
                <div class="bg-white text-black rounded absolute right-0 mr-3 mt-1 shadow z-50" v-if="showDropdown">
                  <ul>
                    <li>
                      <NuxtLink class="dropdown-list">แก้ไขที่อยู่</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="dropdown-list">ประวัติการสั่งซื้อ</NuxtLink>
                    </li>
                    <li>
                      <span @click="logout" class="dropdown-list">ออกจากระบบ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <template v-else>
              <NuxtLink to="/login" class="btn">เข้าสู่ระบบ</NuxtLink>
              <NuxtLink to="/sign-up" class="btn is-primary">สมัครสมาชิก</NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </nav>

    <main class="py-5 grow px-2">
      <div class="container">
        <slot></slot>
      </div>
    </main>

    <footer class="bg-gray-100 py-6 px-2">
      <div class="container">
        Copyright 2022
      </div>
    </footer>
  </div>
</template>