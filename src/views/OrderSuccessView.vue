<script setup lang="ts">
import Icon from '@/components/Icon.vue'
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-20 text-center">
    <div class="rounded-2xl bg-white p-10 shadow-md dark:bg-gray-800">
      <div class="mb-6 text-5xl">🎉</div>
      <h1 class="mb-3 text-3xl font-bold text-green-800 dark:text-green-200">
        Vielen Dank für deine Vorbestellung!
      </h1>
      <p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
        Wir melden uns bei dir mit einer Bestätigung. Die Bezahlung erfolgt bei Abholung vor Ort.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link
          to="/vorbestellen"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-lg"
        >
          Neue Bestellung aufgeben
        </router-link>

        <router-link
          to="/"
          class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          <Icon name="arrow_left" class="h-4 w-4" />
          Zurück zur Startseite
        </router-link>
      </div>
    </div>
  </div>
</template>
