<script setup>
import { ref, onMounted, watch } from 'vue';
import Icon from '@/components/Icon.vue';

// Zustand: 'dark', 'light', oder 'system'
const theme = ref(localStorage.getItem('theme') || 'system');

const applyTheme = () => {
  const html = document.documentElement;
  if (theme.value === 'dark') {
    html.classList.add('dark');
  } else if (theme.value === 'light') {
    html.classList.remove('dark');
  } else {
    // System-Präferenz
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
  localStorage.setItem('theme', theme.value);
};

// Toggle-Logik
const toggleDark = () => {
  if (theme.value === 'light') theme.value = 'dark';
  else if (theme.value === 'dark') theme.value = 'system';
  else theme.value = 'light';
};

// Anwenden bei Änderungen
watch(theme, applyTheme);

// Anwenden beim Laden
onMounted(() => {
  applyTheme();
  // Listener für Änderungen der System-Einstellung
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (theme.value === 'system') applyTheme();
  });
});
</script>

<template>
  <button
    @click="toggleDark"
    class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
    :aria-label="theme === 'dark' ? 'Helles Design' : theme === 'light' ? 'Dunkles Design' : 'Systemdesign'"
  >
    <Icon v-if="theme === 'dark'" name="light" class="h-5 w-5" />
    <Icon v-else name="dark" class="h-5 w-5" />
  </button>
</template>