<script setup lang="ts">
const { logout } = useAuth()

interface Link {
  text: string
  to: string
}

const linkList: Link[] = [
  { text: 'หน้ากระดานหลัก', to: '/admin/dashboard' },
  { text: 'แก้ไขสินค้า', to: '/admin/products' }
]
</script>

<template>
  <div class="flex min-h-screen">
    <aside class="bg-slate-900 text-white w-44 p-3">
      <h1 class="font-bold px-2 pb-2">Admin Panel</h1>
      <ul>
        <li v-for="link of linkList" :key="link.to">
          <NuxtLink class="admin-link-list" :to="link.to">{{ link.text }}</NuxtLink>
        </li>
        <li>
          <div @click="logout" class="admin-link-list">ออกจากระบบ</div>
        </li>
      </ul>
    </aside>

    <main class="p-3 grow">
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>