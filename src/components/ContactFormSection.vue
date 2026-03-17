<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '@/components/FormInput.vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

/* async function handleSubmit() {
  submitting.value = true
  errorMessage.value = ''

  try {
    const body = new FormData()
    body.append('Name', formData.value.name)
    body.append('E-Mail', formData.value.email)
    body.append('Betreff', formData.value.subject)
    body.append('Nachricht', formData.value.message)

    const response = await fetch('https://form.taxi/s/9rlq457z', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body
    })

    if (!response.ok) throw new Error('Request failed')

    submitted.value = true
  } catch {
    errorMessage.value = 'Die Nachricht konnte leider nicht gesendet werden. Bitte versuche es erneut oder kontaktiere uns direkt per E-Mail.'
  } finally {
    submitting.value = false
  }
} */

async function handleSubmit() {
  submitting.value = true
  errorMessage.value = ''

  try {
    const body = new FormData()
    body.append('name', formData.value.name)
    body.append('email', formData.value.email)
    body.append('subject', formData.value.subject)
    body.append('message', formData.value.message)

    await fetch('https://form.taxi/s/9rlq457z', {
      method: 'POST',
      body,
      redirect: 'follow'
    })

    submitted.value = true
  } catch (err) {
    errorMessage.value =
      'Die Nachricht konnte leider nicht gesendet werden. Bitte versuche es erneut.'
  } finally {
    submitting.value = false
  }
}
function resetForm() {
  formData.value = { name: '', email: '', subject: '', message: '' }
  submitted.value = false
  errorMessage.value = ''
}
</script>

<template>
  <section class="rounded-2xl bg-white p-6 md:p-8 shadow-md dark:bg-gray-800">
    <h2 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Kontakt</h2>
    <p class="mb-8 text-gray-600 dark:text-gray-300">
      Schreib uns eine Nachricht – wir melden uns so schnell wie möglich.
    </p>

    <!-- Erfolgs-Nachricht -->
    <div v-if="submitted" class="rounded-lg border border-green-200 bg-green-50 p-8 text-center dark:border-green-700 dark:bg-green-900/30">
      <div class="mb-4 text-4xl">✉️</div>
      <h3 class="mb-2 text-xl font-bold text-green-800 dark:text-green-200">Nachricht gesendet!</h3>
      <p class="mb-6 text-green-700 dark:text-green-300">Vielen Dank für deine Nachricht. Wir melden uns bald bei dir.</p>
      <button
        @click="resetForm"
        class="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
      >
        Weitere Nachricht senden
      </button>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="space-y-1">
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

      <!-- Fehler-Nachricht -->
      <div v-if="errorMessage" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300">
        {{ errorMessage }}
      </div>

      <button
        type="submit"
        :disabled="submitting"
        class="w-full rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-accent dark:hover:bg-accent/90 dark:focus:ring-accent/30"
      >
        {{ submitting ? 'Wird gesendet...' : 'Nachricht senden' }}
      </button>
    </form>
  </section>
</template>