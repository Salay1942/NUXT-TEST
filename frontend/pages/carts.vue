<script setup lang="ts">
definePageMeta({
  middleware: ['only-auth']
})

const { carts, removeCart } = useCart()
</script>

<template>
  <div class="grid gap-2">
    <table class="p-3 border rounded gap-3 table-fixed">
      <tbody>
        <tr v-for="(cart, i) of carts" :key="i">
          <td class="p-2 text-right">{{ cart.title }}</td>
          <td class="p-2 w-36">
            <input v-model="cart.amount" class="input w-24" type="number" min="1"> ชิ้น
          </td>
          <td class="p-2">ราคา {{ cart.amount * cart.price }} บาท</td>
          <td class="p-2">
            <button type="button" class="btn is-danger" @click="removeCart(i)">ลบ</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-right mt-3">
      <NuxtLink to="/checkout" class="btn is-primary">ชำระเงิน</NuxtLink>
    </div>
  </div>
</template>