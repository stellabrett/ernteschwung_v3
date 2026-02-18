<script setup lang="ts">
defineProps<{
  imageSrc: string
  imageAlt?: string
  subtext: string
}>()
</script>

<template>
  <header class="mb-8 overflow-hidden rounded-xl border border-tertiary/30 bg-white dark:border-gray-700 dark:bg-gray-800">
    <div class="grid md:grid-cols-3">
      <div class="md:col-span-2">
        <img
          :src="imageSrc"
          :alt="imageAlt || 'Ernteschwung Header Bild'"
          class="h-64 w-full object-cover md:h-full"
        >
      </div>

      <div class="flex flex-col justify-center p-6 sm:p-8">
        <h1 class="mb-2 text-3xl font-bold text-primary dark:text-white">ERNTESCHWUNG</h1>
        <p class="text-gray-600 dark:text-gray-300">{{ subtext }}</p>
      </div>
    </div>
  </header>
</template>