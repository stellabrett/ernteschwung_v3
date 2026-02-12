import { ref, computed } from 'vue'
import type { Ref } from 'vue'

/**
 * Example composable for managing counter state
 */
export function useCounter(initialValue = 0) {
  const count: Ref<number> = ref(initialValue)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const reset = () => {
    count.value = initialValue
  }

  const doubleCount = computed(() => count.value * 2)

  return {
    count,
    increment,
    decrement,
    reset,
    doubleCount
  }
}
