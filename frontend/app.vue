<script lang="ts" setup>
useHead({
  titleTemplate: (title) => title ? `${title} | Online Shopping` : 'Online Shopping'
})
</script>

<template>
  <NuxtLayout>
    <Transition name="page" mode="out-in">
      <div :key="$route.fullPath">
        <NuxtPage></NuxtPage>
      </div>
    </Transition>
  </NuxtLayout>
</template>
