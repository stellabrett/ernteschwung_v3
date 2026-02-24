<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const iconModules = import.meta.glob('/src/assets/icons/*.svg', {
  eager: true,
  import: 'default',
  query: '?raw'
}) as Record<string, string>

const iconMarkup = computed(() => {
  if (!props.name) {
    return ''
  }

  const iconPath = `/src/assets/icons/${props.name}.svg`
  return iconModules[iconPath] || ''
})
</script>

<template>
  <span v-if="iconMarkup" class="icon" v-html="iconMarkup" />
</template>

<style scoped>
.icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
