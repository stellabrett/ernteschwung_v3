<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about-view">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          About
        </h1>
      </div>
    </header>
    
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <h2 class="text-2xl font-semibold mb-4">About This Project</h2>
            <p class="text-gray-600 mb-4">
              This project uses the following technologies:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Vue 3 with Composition API</li>
              <li>Vite for fast development and building</li>
              <li>TypeScript with strict configuration</li>
              <li>Tailwind CSS v4 for styling</li>
              <li>Vue Router for navigation</li>
            </ul>
            <RouterLink 
              to="/" 
              class="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
