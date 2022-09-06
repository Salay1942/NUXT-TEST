<template>
  <div class="flex flex-col min-h-screen">
    <nav class="bg-gray-800 text-white p-3">
      <div class="container">
        <div class="flex justify-between">
          <div>
            <h1 class="font-bold">Online Shopping</h1>
          </div>
          <div class="space-x-1">
            <NuxtLink to="/login" class="btn">เข้าสู่ระบบ</NuxtLink>
            <NuxtLink to="/sign-up" class="btn is-primary">สมัครสมาชิก</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <main class="py-5 grow">
      <div class="container">
        <slot></slot>
      </div>
    </main>

    <footer class="bg-gray-100 py-6">
      <div class="container">
        Copyright 2022
      </div>
    </footer>
  </div>
</template>