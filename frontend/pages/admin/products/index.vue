<script setup lang="ts">
import Product from '~~/interface/Product'

definePageMeta({
  layout: 'admin',
  middleware: ['only-admin']
})

const { data } = await useFetch<{ products: Product[] }>('http://localhost:3000/api/admin/products', {
  headers: useRequestHeaders(['cookie'])
})
</script>

<template>
  <div>
    <h2 class="font-xl font-bold">รายการสินค้าทั้งหมด</h2>
    <hr class="my-2">
    <NuxtLink class="inline-block btn is-primary" to="/admin/products/create">เพิ่มสินค้า</NuxtLink>
    <div class="overflow-x-auto relative mt-3">
      <table class="w-full">
        <thead>
          <tr>
            <th class="p-1 border">ID</th>
            <th class="p-1 border">ชื่อสินค้า</th>
            <th class="p-1 border">ราคาสินค้า</th>
            <th class="p-1 border"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product of data?.products">
            <td class="p-1 border">{{ product.id }}</td>
            <td class="p-1 border">{{ product.title }}</td>
            <td class="p-1 border">{{ product.price }}</td>
            <td class="p-1 border">
              <NuxtLink class="text-blue-600 underline" :to="`/admin/products/${product.id}`">แก้ไข</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>