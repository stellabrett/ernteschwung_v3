<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label?: string
  name?: string
  type?: string
  modelValue?: string
  placeholder?: string
  required?: boolean
  error?: string
  multiline?: boolean
  rows?: number
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  name: '',
  type: 'text',
  modelValue: '',
  placeholder: '',
  required: false,
  error: '',
  multiline: false,
  rows: 4
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = computed(() => `input-${props.name || props.label}`.replace(/\s+/g, '-').toLowerCase())
const errorId = computed(() => `${inputId.value}-error`)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="mb-4">
    <label 
      v-if="label"
      :for="inputId"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ label }}
      <span v-if="required" class="text-red-500" aria-hidden="true">*</span>
      <span v-if="required" class="sr-only">(Pflichtfeld)</span>
    </label>
    
    <textarea
      v-if="multiline"
      :id="inputId"
      :name="name || undefined"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :aria-describedby="error ? errorId : undefined"
      :aria-invalid="error ? true : undefined"
      @input="handleInput"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-accent dark:focus:ring-accent"
      :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': error }"
    />
    
    <input
      v-else
      :id="inputId"
      :type="type"
      :name="name || undefined"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :aria-describedby="error ? errorId : undefined"
      :aria-invalid="error ? true : undefined"
      @input="handleInput"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-accent dark:focus:ring-accent"
      :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': error }"
    />
    
    <p v-if="error" :id="errorId" role="alert" class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ error }}
    </p>
  </div>
</template>
