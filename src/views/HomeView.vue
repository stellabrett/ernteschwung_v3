<script setup lang="ts">
import DarkMode from '@/components/DarkMode.vue';
import { RouterLink } from 'vue-router'
</script>

<template>
 
  <div class="home-view">
    <header class="bg-white  shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Welcome to Ernteschwung V3
          <h2 class="text-primary dark:text-secondary"> Test Primary Color</h2>
        </h1>
      </div>
    </header>
    
    <main>
       <DarkMode />
       <h2 class="text-blue-300 dark:text-blue-900">Darkmode test</h2>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 bg-green-500 dark:bg-blue-900 border-dashed border-gray-200 rounded-lg p-8">
            <h2 class="text-2xl font-semibold mb-4">Vue 3 + Vite + TypeScript + Tailwind CSS v4</h2>
            <p class="text-gray-600 mb-4">
              This is a clean Vue 3 project with strict TypeScript configuration.
            </p>
            <div class="space-x-4">
              <RouterLink 
                to="/" 
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                Home
              </RouterLink>
              <RouterLink 
                to="/about" 
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                About
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
