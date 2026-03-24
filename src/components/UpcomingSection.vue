<script setup lang="ts">
interface UpcomingItem {
  title: string
  text: string
  imageSrc: string
  imageAlt: string
}

defineProps<{
  items: UpcomingItem[]
}>()
</script>

<template>
  <section class="rounded-xl bg-white p-6 md:p-8 shadow-md dark:bg-gray-800">
    <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Aktuelles</h2>

    <div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
      <article
        v-for="item in items"
        :key="item.title"
        class="overflow-hidden rounded-xl bg-gray-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:bg-gray-700/50"
      >
        <img
          :src="item.imageSrc"
          :alt="item.imageAlt"
          class="mx-auto w-full max-w-xs object-contain"
        >
        <div class="p-5">
          <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
          <p class="text-sm text-gray-600 leading-relaxed dark:text-gray-300">{{ item.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>