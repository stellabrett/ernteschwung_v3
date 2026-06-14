<script setup lang="ts">
interface UpcomingItem {
  imageSrc: string;
  imageAlt: string;
}

defineProps<{
  items: UpcomingItem[];
}>();
</script>

<template>
  <section class="rounded-xl bg-white p-6 md:p-8 shadow-md dark:bg-gray-800">
    <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
      Aktuelles
    </h2>

    <div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
      <article
        v-for="item in items"
        :key="item.imageAlt"
        class="overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-700/50"
      >
        <img
          :src="item.imageSrc"
          :alt="item.imageAlt"
          class="w-full object-contain"
        />
      </article>
    </div>
  </section>
</template>
