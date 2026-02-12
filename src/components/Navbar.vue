<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
const isDark = ref(false)

const navLinks = [
  { name: 'Startseite', to: '/' },
  { name: 'SoLaWi', to: '/solawi' },
  { name: 'Jungpflanzen', to: '/jungpflanzen' },
  { name: 'Exkursionen', to: '/exkursionen' },
  { name: 'Wiesenheu', to: '/wiesenheu' },
  { name: 'Kontakt', to: '/contact' }
]

onMounted(() => {
  const html = document.documentElement
  isDark.value = html.classList.contains('dark')
  
  // Beobachte Änderungen am HTML Element
  const observer = new MutationObserver(() => {
    isDark.value = html.classList.contains('dark')
  })
  
  observer.observe(html, { attributes: true, attributeFilter: ['class'] })
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const toggleDarkMode = () => {
  const html = document.documentElement
  isDark.value = !isDark.value
  if (isDark.value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
  // Save manual preference to localStorage
  localStorage.setItem('darkMode', String(isDark.value))
}
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2 flex-shrink-0">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-first to-accent flex items-center justify-center">
            <span class="text-white font-bold text-lg">E</span>
          </div>
          <span class="hidden sm:inline text-xl font-bold text-first dark:text-white">Ernteschwung</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-first dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-accent transition-colors"
            active-class="bg-first/10 text-first dark:bg-accent/10 dark:text-accent"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <!-- Right Side: Dark Mode Toggle + Mobile Menu Button -->
        <div class="flex items-center space-x-2">
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            :aria-label="isDark ? 'Light mode' : 'Dark mode'"
          >
            <svg v-if="!isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm3-7a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 11-2 0 1 1 0 012 0zM2 11a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd" />
            </svg>
          </button>

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
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-first dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-accent transition-colors"
          active-class="bg-first/10 text-first dark:bg-accent/10 dark:text-accent"
          @click="closeMenu"
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
