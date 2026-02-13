<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

// feel free to update this with an svg directory of your choice
const icon = defineAsyncComponent(async () => {
  if (props.name == '') {
    return await new Promise(() => {})
  }
  try {
    return await import(`@/assets/icons/${props.name}.svg`)
  } catch {
    console.error('Icon props error')
  }
})
</script>

<template>
  <component :is="icon" class="fill-current" />
</template>

<style scoped></style>
