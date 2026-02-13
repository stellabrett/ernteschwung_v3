<script setup lang="ts">
import Card from '@/components/Card.vue';
import DarkMode from '@/components/DarkMode.vue';
import Icon from '@/components/Icon.vue';
import { RouterLink } from 'vue-router'
import placeholderImage from '@/assets/images/placeholder.jpg'
</script>

<template>
 
  <div class="home-view">
    <header class="bg-white  shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Welcome to Ernteschwung V3
          <p class="text-primary dark:text-secondary"> Test Primary Color</p>
        </h1>
      </div>
    </header>
    
    <main>    
       <div class="h-500px">
         <icon name="light" class="w-6 h-6 text-gray-500" />
       </div>
       <DarkMode />
<Card
  :image-src="placeholderImage"
  image-alt="Beschreibung"
  image-position="left"
>
  <template #title>
<p class="text-2xl font-bold text-primary mb-4">Card Title</p>
  </template>
  
  <template #text>
 <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </template>
  
  <template #button>
    <a href="/link" class="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-white">
      Mehr erfahren
    </a>
  </template>
</Card>
  
      
      
     </main>
  </div>
</template>
