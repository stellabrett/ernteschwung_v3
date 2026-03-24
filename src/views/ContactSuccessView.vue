<script setup lang="ts">
import ButtonPrimary from '@/components/_ui_components/ButtonPrimary.vue'
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-20 text-center">
    <div class="rounded-xl bg-white p-10 shadow-md dark:bg-gray-800">
      <div class="mb-6 text-5xl" aria-hidden="true">✉️</div>
      <h1 class="mb-3 text-3xl font-bold text-secondary dark:text-accent">
        Nachricht gesendet!
      </h1>
      <p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
        Vielen Dank für deine Nachricht. Wir melden uns so schnell wie möglich bei dir.
      </p>

      <router-link to="/" class="inline-block">
        <ButtonPrimary title="Zurück zur Startseite" icon-prefix="arrow_left" />
      </router-link>
    </div>
  </div>
</template>
