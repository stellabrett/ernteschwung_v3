<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page-view">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-first">Wiesenheu</h1>
      </div>
    </header>

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="rounded-lg border border-third/30 bg-white p-8">
            <p class="mb-6 text-gray-600">
              Details zu Qualitat, Ballenformaten und Abholung folgen.
            </p>
            <RouterLink
              to="/"
              class="font-medium text-accent hover:text-accent/80"
            >
              ← Zur Startseite
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
