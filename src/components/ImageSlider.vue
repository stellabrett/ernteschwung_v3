<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from './Icon.vue'

interface Props {
  images: { src: string; alt?: string }[]
}

const props = defineProps<Props>()

const currentIndex = ref(0)

const currentImage = computed(() => props.images[currentIndex.value] as { src: string; alt?: string } | undefined)

const totalImages = computed(() => props.images.length)

const slideDirection = ref<'left' | 'right'>('left')

function next() {
  slideDirection.value = 'left'
  currentIndex.value = (currentIndex.value + 1) % totalImages.value
}

function prev() {
  slideDirection.value = 'right'
  currentIndex.value = (currentIndex.value - 1 + totalImages.value) % totalImages.value
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') {
    prev()
  } else if (event.key === 'ArrowRight') {
    next()
  }
}
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-lg"
    role="region"
    aria-roledescription="Bilderkarussell"
    aria-label="Bildergalerie"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <!-- Image -->
    <div class="relative aspect-4/3 w-full" aria-live="polite">
      <transition :name="slideDirection === 'left' ? 'slide-left' : 'slide-right'" mode="out-in">
        <img
          v-if="currentImage"
          :key="currentIndex"
          :src="currentImage.src"
          :alt="currentImage.alt ?? ''"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </transition>
    </div>

    <!-- Arrow Left -->
    <button
      class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-md transition hover:bg-white dark:bg-gray-800/70 dark:hover:bg-gray-800"
      @click="prev"
      aria-label="Vorheriges Bild"
    >
      <Icon name="arrow_left" class="h-6 w-6 text-gray-800 dark:text-white" />
    </button>

    <!-- Arrow Right -->
    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-md transition hover:bg-white dark:bg-gray-800/70 dark:hover:bg-gray-800"
      @click="next"
      aria-label="Nächstes Bild"
    >
      <Icon name="arrow_right" class="h-6 w-6 text-gray-800 dark:text-white" />
    </button>

    <!-- Dots Indicator -->
    <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        class="h-2.5 w-2.5 rounded-full transition"
        :class="index === currentIndex ? 'bg-white' : 'bg-white/50'"
        @click="currentIndex = index"
        :aria-label="`Bild ${index + 1}`"
      />
    </div>
  </div>
</template>

<style scoped>
/* Slide left (next) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide right (prev) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
