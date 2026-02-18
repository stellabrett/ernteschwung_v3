<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  imageSrc: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: '',
  imagePosition: 'left'
})

const imagePositionClass = computed(() => {
  return props.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
})
</script>

<template>
  <div 
    class="flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    :class="imagePositionClass"
  >
    <!-- Image Section -->
    <div class="w-full md:w-1/2">
      <img 
        :src="imageSrc" 
        :alt="imageAlt" 
        class="h-full w-full rounded-lg object-cover"
      />
    </div>

    <!-- Content Section -->
    <div class="flex w-full flex-col justify-center md:w-1/2">
      <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        <slot name="title" />
      </h3>
      <div class="mb-6 text-gray-600 dark:text-gray-300">
        <slot name="text" />
      </div>
      
      <!-- Optional Button Slot -->
      <div v-if="$slots['button']">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>
