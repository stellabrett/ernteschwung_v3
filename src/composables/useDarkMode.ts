import { ref, watch } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  // Initialize from localStorage or system preference
  const initDarkMode = () => {
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) {
      isDark.value = stored === 'true'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyDarkMode()
  }

  // Apply dark mode to DOM
  const applyDarkMode = () => {
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('darkMode', String(isDark.value))
  }

  // Watch for changes
  watch(isDark, () => {
    applyDarkMode()
  })

  // Toggle dark mode
  const toggle = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggle,
    initDarkMode
  }
}
