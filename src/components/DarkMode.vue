<script setup>
import { ref, onMounted, watch } from 'vue';

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
  <button @click="toggleDark" class="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
    Modus: {{ theme }}
  </button>
</template>