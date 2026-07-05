<script setup lang="ts">
interface UpcomingItem {
  imageSrc: string;
  imageAlt: string;
  linkUrl?: string;
  linkText?: string;
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
        <div v-if="item.linkUrl" class="p-4">
          <p class="text-m text-gray-600 dark:text-gray-300">
            Mehr Infos unter
            <a
              :href="item.linkUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-secondary underline underline-offset-2 hover:text-primary dark:text-green-400 dark:hover:text-green-300"
              >{{ item.linkText || item.linkUrl }}</a
            >
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
