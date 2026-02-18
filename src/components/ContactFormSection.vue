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
  console.log('Contact form placeholder submit:', formData.value)
}
</script>

<template>
  <section class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    <h2 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Kontakt</h2>
    <p class="mb-6 text-gray-600 dark:text-gray-300">
      Nutzen Sie das Formular für Anfragen. Die Anbindung an den Form-Service folgt im nächsten Schritt.
    </p>

    <form @submit.prevent="handleSubmit" class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
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
  </section>
</template>