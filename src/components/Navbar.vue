<script setup lang="ts">
import { ref } from 'vue'
import DarkMode from '@/components/DarkMode.vue'


const isOpen = ref(false)

const navLinks = [
  { name: 'HOME', to: '#home' },
  { name: 'SoLaWi', to: '#solawi' },
  { name: 'Gemüsekiste', to: '#gemuesekiste' },
  { name: 'Jungpflanzen', to: '#jungpflanzen' },
  { name: 'Ausflüge/Exkursionen', to: '#exkursionen' },
  { name: 'Wiesenheu', to: '#wiesenheu' },
  { name: 'Über uns', to: '#ueber-uns' },
  { name: 'Kontakt', to: '#kontakt' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="#home" class="flex items-center space-x-2 shrink-0">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent">
            <span class="text-white font-bold text-lg">E</span>
          </div>
          <span class="hidden sm:inline text-xl font-bold text-primary dark:text-white">Ernteschwung</span>
          
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1 overflow-x-auto">
          <a
            v-for="link in navLinks"
            :key="link.to"
            :href="link.to"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-accent transition-colors"
          >
            {{ link.name }}
          </a>
        </div>
   
        <!-- Right Side: Dark Mode Toggle + Mobile Menu Button -->
        <div class="flex items-center space-x-2">
          <DarkMode />

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          >
            <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="isOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-2"
      >
        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-accent transition-colors"
          @click="closeMenu"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>
