<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  imageSrc?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  bgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageSrc: '',
  imageAlt: '',
  imagePosition: 'left',
  bgClass: 'bg-white dark:bg-gray-800'
})

const imagePositionClass = computed(() => {
  return props.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
})
</script>

<template>
  <div 
    class="flex flex-col gap-8 rounded-xl p-6 md:p-8 shadow-md transition-shadow duration-300 hover:shadow-lg"
    :class="[imagePositionClass, bgClass]"
  >
    <!-- Image Section -->
    <div class="w-full md:w-1/2 overflow-hidden rounded-xl">
      <slot name="image">
        <img 
          v-if="imageSrc"
          :src="imageSrc" 
          :alt="imageAlt" 
          class="h-full w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105"
        />
      </slot>
    </div>

    <!-- Content Section -->
    <div class="flex w-full flex-col justify-center md:w-1/2">
      <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        <slot name="title" />
      </h3>
      <div class="text-gray-600 leading-relaxed dark:text-gray-300">
        <slot name="text" />
      </div>
      
      <!-- Optional Button Slot -->
      <div v-if="$slots['button']" class="mt-6">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>
