<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['only-admin']
})
</script>

<template>
  <div>
    <h2 class="font-xl font-bold">รายการสินค้าทั้งหมด</h2>
    <hr class="my-2">
    <NuxtLink class="inline-block btn is-primary" to="/admin/products/create">เพิ่มสินค้า</NuxtLink>
  </div>
</template>