<script setup lang="ts">
import TinyMceEditor from '@tinymce/tinymce-vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:model-value', html: string)
}>()
</script>

<template>
  <ClientOnly>
    <TinyMceEditor
      api-key="oosy6smjevo140qa117t4d4c088sbvw55laer5kfqgu8rddy"
      :init="{
        height: 500,
        menubar: false,
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      }"
      :model-value="props.modelValue"
      @update:model-value="emit('update:model-value', $event)"
    ></TinyMceEditor>
  </ClientOnly>
</template>