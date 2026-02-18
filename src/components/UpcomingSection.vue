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
  <section class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>

    <div class="grid gap-6 md:grid-cols-3">
      <article
        v-for="item in items"
        :key="item.title"
        class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <img
          :src="item.imageSrc"
          :alt="item.imageAlt"
          class="h-40 w-full object-cover"
        >
        <div class="p-4">
          <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ item.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>