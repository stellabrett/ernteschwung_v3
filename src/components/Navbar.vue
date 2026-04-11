<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
// import DarkMode from '@/components/DarkMode.vue'
import Icon from "@/components/Icon.vue";

const route = useRoute();
const isOpen = ref(false);

const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "SoLaWi", hash: "#solawi" },
  { name: "Gemüsekiste", hash: "#gemuesekiste" },
  { name: "Jungpflanzen", hash: "#jungpflanzen" },
  { name: "Ausflüge/Exkursionen", hash: "#exkursionen" },
  { name: "Wiesenheu", hash: "#wiesenheu" },
  { name: "Über uns", hash: "#ueber-uns" },
  { name: "Kontakt", hash: "#kontakt" },
];

const linkTo = (hash: string) => {
  // On home: just the hash; on other pages: navigate to home + hash
  if (route.path === "/") return hash;
  return "/" + hash;
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    closeMenu();
  }
};

onMounted(() => document.addEventListener("keydown", handleKeydown));
onUnmounted(() => document.removeEventListener("keydown", handleKeydown));
</script>

<template>
  <!-- Skip to main content (Accessibility) -->
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-yellow focus:text-secondary focus:px-4 focus:py-2 focus:rounded-md focus:font-bold focus:shadow-md"
  >
    Zum Inhalt springen
  </a>

  <nav
    class="sticky top-0 z-50 border-b border-gray-200/50 bg-yellow/80 backdrop-blur-md shadow-sm dark:border-gray-700/80 dark:bg-gray-900/80"
    aria-label="Hauptnavigation"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center space-x-2 shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
        >
          <div class="flex h-14">
            <img
              src="@/assets/images/Logo_Schriftzug_neu.png"
              alt="Ernteschwung – zur Startseite"
              class="h-full w-auto max-w-45 object-contain"
            />
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1 overflow-x-auto">
          <router-link
            v-for="link in navLinks"
            :key="link.hash"
            :to="linkTo(link.hash)"
            :aria-current="route.hash === link.hash ? 'page' : undefined"
            class="px-3 py-2 rounded-md text-sm font-bold text-secondary hover:bg-secondary/10 hover:text-secondary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-accent transition-all duration-200 border-b-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
            :class="{
              'border-secondary dark:border-accent': route.hash === link.hash,
            }"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Right Side: Dark Mode Toggle + Mobile Menu Button -->
        <div class="flex items-center space-x-2">
          <!-- <DarkMode /> -->

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2 rounded-lg text-secondary hover:bg-secondary/10 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
            :aria-label="isOpen ? 'Menü schließen' : 'Menü öffnen'"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
          >
            <Icon
              v-if="!isOpen"
              name="menu"
              class="w-6 h-6"
              aria-hidden="true"
            />
            <Icon v-else name="close" class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="isOpen"
          id="mobile-menu"
          class="md:hidden border-t border-gray-200 dark:border-gray-700 bg-yellow/80 backdrop-blur-md dark:bg-gray-800/95 py-2"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <router-link
            v-for="link in navLinks"
            :key="link.hash"
            :to="linkTo(link.hash)"
            :aria-current="route.hash === link.hash ? 'page' : undefined"
            class="block px-3 py-2 rounded-md text-base font-bold text-secondary hover:bg-secondary/10 hover:text-secondary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-accent transition-all duration-200 border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
            :class="{
              'border-secondary dark:border-accent bg-secondary/5':
                route.hash === link.hash,
            }"
            @click="closeMenu"
          >
            {{ link.name }}
          </router-link>
        </div>
      </transition>
    </div>
  </nav>
</template>
