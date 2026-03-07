<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DarkMode from '@/components/DarkMode.vue'
import Icon from '@/components/Icon.vue'

const route = useRoute()
const isOpen = ref(false)

const navLinks = [
  { name: 'Home', hash: '#home' },
  { name: 'SoLaWi', hash: '#solawi' },
  { name: 'Gemüsekiste', hash: '#gemuesekiste' },
  { name: 'Jungpflanzen', hash: '#jungpflanzen' },
  { name: 'Ausflüge/Exkursionen', hash: '#exkursionen' },
  { name: 'Wiesenheu', hash: '#wiesenheu' },
  { name: 'Über uns', hash: '#ueber-uns' },
  { name: 'Kontakt', hash: '#kontakt' }
]

const linkTo = (hash: string) => {
  // On home: just the hash; on other pages: navigate to home + hash
  if (route.path === '/') return hash
  return '/' + hash
}

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
        <router-link to="/" class="flex items-center space-x-2 shrink-0">
       <!--    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent">
            <span class="text-white font-bold text-lg">E</span>
          </div> -->
          <div class="flex h-14 ">
            <img src="@/assets/images/Logo_Schriftzug_freigestellt_klein.png" alt="Logo Ernteschwung"  />
          </div>
<!--           <span class="hidden sm:inline text-xl font-bold text-primary dark:text-white">Ernteschwung</span>
 -->          
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1 overflow-x-auto">
          <router-link
            v-for="link in navLinks"
            :key="link.hash"
            :to="linkTo(link.hash)"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-accent transition-colors"
          >
            {{ link.name }}
          </router-link>
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
            <Icon v-if="!isOpen" name="menu" class="w-6 h-6" />
            <Icon v-else name="close" class="w-6 h-6 " />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="isOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-2"
      >
        <router-link
          v-for="link in navLinks"
          :key="link.hash"
          :to="linkTo(link.hash)"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-accent transition-colors"
          @click="closeMenu"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
