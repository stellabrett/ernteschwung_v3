<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="hello-world bg-white shadow rounded-lg p-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-2">
      {{ message }}
    </h2>
    <p class="text-gray-600">
      This is an example component with TypeScript props.
    </p>
  </div>
</template>
