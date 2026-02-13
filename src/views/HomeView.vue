<script setup lang="ts">
import Card from '@/components/Card.vue';
import DarkMode from '@/components/DarkMode.vue';
import Icon from '@/components/Icon.vue';
import { RouterLink } from 'vue-router'
import placeholderImage from '@/assets/images/placeholder.jpg'
</script>

<template>
  <div>
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        Welcome to Ernteschwung V3
      </h1>
      <p class="text-xl text-primary dark:text-secondary">Test Primary Color</p>
    </header>
    
    <div class="space-y-8">
      <div class="flex items-center gap-4">
        <icon name="light" class="w-6 h-6 text-gray-500" />
        <DarkMode />
      </div>

      <Card
        :image-src="placeholderImage"
        image-alt="Beschreibung"
        image-position="left"
      >
        <template #title>
          Card Title
        </template>
        
        <template #text>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </template>
        
        <template #button>
          <a href="/link" class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-white hover:bg-primary/90">
            Mehr erfahren
          </a>
        </template>
      </Card>
    </div>
  </div>
</template>
