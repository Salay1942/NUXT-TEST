<script setup lang="ts">
const { logout } = useAuth()
</script>

<template>
  <div class="flex min-h-screen">
    <aside class="bg-slate-900 text-white w-44 p-3">
      <h1 class="font-bold px-2 pb-2">Admin Panel</h1>
      <ul>
        <li>
          <div @click="logout" class="admin-link-list">ออกจากระบบ</div>
        </li>
      </ul>
    </aside>

    <main class="p-3">
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>