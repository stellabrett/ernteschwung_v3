<script setup lang="ts">
import ButtonPrimary from '@/components/_ui_components/ButtonPrimary.vue'
import ButtonSecondary from '@/components/_ui_components/ButtonSecondary.vue'
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-20 text-center">
    <div class="rounded-2xl bg-white p-10 shadow-md dark:bg-gray-800">
      <div class="mb-6 text-5xl" aria-hidden="true">🎉</div>
      <h1 class="mb-3 text-3xl font-bold text-secondary dark:text-accent">
        Vielen Dank für deine Vorbestellung!
      </h1>
      <p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
        Wir melden uns bei dir mit einer Bestätigung. Die Bezahlung erfolgt bei Abholung vor Ort.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/vorbestellen" class="inline-block">
          <ButtonPrimary title="Neue Bestellung aufgeben" />
        </router-link>

        <router-link to="/" class="inline-block">
          <ButtonSecondary title="Zurück zur Startseite"/>
        
    
        </router-link>
      </div>
    </div>
  </div>
</template>
