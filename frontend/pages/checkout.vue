<script setup lang="ts">
const { carts } = useCart()

const input = reactive({
  receiver: '',
  telephone: '',
  address: ''
})

const totalPrice = computed(() => {
  return carts.value.reduce((prev, cur) => {
    return prev + (cur.amount * cur.price)
  }, 0)
})
</script>

<template>
  <div class="w-96 mx-auto border p-3 rounded">
    <form class="space-y-2">
      <label class="block">
        <div class="mb-1">ชื่อผู้รับสินค้า:</div>
        <input v-model="input.receiver" class="input w-full" type="text">
      </label>
      <label class="block">
        <div class="mb-1">เบอร์โทรศัพท์:</div>
        <input v-model="input.telephone" class="input w-full" type="tel">
      </label>
      <label class="block">
        <div class="mb-1">ที่อยู่การจัดส่ง:</div>
        <textarea v-model="input.address" class="input w-full" rows="4"></textarea>
      </label>
      <div class="bg-blue-100 text-blue-800 p-3 rounded">
        รายการสินค้า:
        <ul class="list-disc pl-5 mt-3">
          <li v-for="cart of carts">
            <div>
              {{ cart.title }} (จำนวน: {{ cart.amount }} ชิ้น)
            </div>
            <div>
              <strong>ราคา:</strong> {{ (cart.price * cart.amount).toLocaleString() }} บาท
            </div>
          </li>
        </ul>
        <div class="mt-3">
          <strong>สรุปราคาทั้งหมด:</strong> <u>{{ totalPrice.toLocaleString() }} บาท</u>
        </div>
      </div>
      <div>
        <button class="btn is-primary">ยืนยันที่อยู่การจัดส่ง / ชำระเงิน</button>
      </div>
    </form>
  </div>
</template>