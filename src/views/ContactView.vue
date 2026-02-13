<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '@/components/FormInput.vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Hier kann die Formular-Logik implementiert werden
}
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <h1 class="mb-2 text-4xl font-bold text-primary dark:text-white">Kontakt</h1>
    <p class="mb-8 text-gray-600 dark:text-gray-300">
      Haben Sie Fragen oder möchten Sie mehr über unsere Angebote erfahren? Schreiben Sie uns!
    </p>

    <form @submit.prevent="handleSubmit" class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <FormInput
        v-model="formData.name"
        label="Name"
        placeholder="Ihr vollständiger Name"
        :required="true"
      />

      <FormInput
        v-model="formData.email"
        label="E-Mail"
        type="email"
        placeholder="ihre.email@beispiel.de"
        :required="true"
      />

      <FormInput
        v-model="formData.subject"
        label="Betreff"
        placeholder="Worum geht es?"
        :required="true"
      />

      <FormInput
        v-model="formData.message"
        label="Nachricht"
        :multiline="true"
        :rows="6"
        placeholder="Ihre Nachricht an uns..."
        :required="true"
      />

      <button
        type="submit"
        class="w-full rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 dark:bg-accent dark:hover:bg-accent/90 dark:focus:ring-accent/50"
      >
        Nachricht senden
      </button>
    </form>

    <div class="mt-8 grid gap-6 sm:grid-cols-2">
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">E-Mail</h3>
        <p class="text-gray-600 dark:text-gray-300">info@ernteschwung.de</p>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">Telefon</h3>
        <p class="text-gray-600 dark:text-gray-300">+49 (0) XXX XXXXXX</p>
      </div>
    </div>
  </div>
</template>
