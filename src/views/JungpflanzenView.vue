<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader
      image-src="https://picsum.photos/seed/ernteschwung-jungpflanzen/1200/800"
      image-alt="Jungpflanzen"
      subtext="Alles rund um Anzucht, Sortiment und Verfügbarkeit unserer Jungpflanzen."
    />
    <div class="rounded-lg border border-tertiary/30 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
      <p class="mb-6 text-gray-600 dark:text-gray-300">
        Infos zu Anzucht, Sortiment und Verfügbarkeit werden hier erscheinen.
      </p>
    </div>
  </div>
</template>
