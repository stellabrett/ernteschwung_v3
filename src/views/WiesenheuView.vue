<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader
      image-src="https://picsum.photos/seed/ernteschwung-wiesenheu/1200/800"
      image-alt="Wiesenheu"
      subtext="Wiesenheu in hoher Qualität – Informationen zu Formaten und Abholung."
    />
    <div class="rounded-lg border border-tertiary/30 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
      <p class="mb-6 text-gray-600 dark:text-gray-300">
        Details zu Qualität, Ballenformaten und Abholung folgen.
      </p>
    </div>
  </div>
</template>
