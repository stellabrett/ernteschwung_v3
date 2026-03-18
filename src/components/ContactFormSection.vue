<script setup lang="ts">
import FormInput from '@/components/FormInput.vue'
import ButtonPrimary from '@/components/_ui_components/ButtonPrimary.vue'

const successRedirectUrl = `${location.origin}/kontakt/danke`
</script>

<template>
  <section class="rounded-2xl bg-white p-6 md:p-8 shadow-md dark:bg-gray-800">
    <h2 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Kontakt</h2>
    <p class="mb-8 text-gray-600 dark:text-gray-300">
      Schreib uns eine Nachricht – wir melden uns so schnell wie möglich.
    </p>

    <form
      action="https://form.taxi/s/9rlq457z"
      method="POST"
      class="space-y-1"
    >
      <input type="hidden" name="_next" :value="successRedirectUrl" />

      <FormInput
        name="Name"
        label="Name"
        placeholder="Ihr vollständiger Name"
        :required="true"
      />

      <FormInput
        name="E-Mail"
        label="E-Mail"
        type="email"
        placeholder="ichwill@gemuese.at"
        :required="true"
      />

      <FormInput
        name="Betreff"
        label="Betreff"
        placeholder="Worum geht es?"
        :required="true"
      />

      <FormInput
        name="Nachricht"
        label="Nachricht"
        :multiline="true"
        :rows="6"
        placeholder="Deine Nachricht an uns..."
        :required="true"
      />

      <ButtonPrimary title="Nachricht senden" type="submit" class="w-full " />
    </form>
  </section>
</template>