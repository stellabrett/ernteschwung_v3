<script setup lang="ts">
import { ref, computed } from 'vue'
import FormInput from '@/components/FormInput.vue'
import Icon from '@/components/Icon.vue'

const pickupLocations = [
  { name: 'Ernteschwung Hof', address: 'Entschendorf 35, 8321 St. Margarethen' },
  { name: 'Mohoga', address: 'Moserhofgasse 51, 8010 Graz' },
  { name: 'Biosphäre', address: 'Ludersdorf 85, 8200 Gleisdorf' },
  { name: 'Sommerberg', address: 'Takern I 128, 8321 St. Margarethen' }
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  weeks: 1,
  pickupLocation: '',
  message: '',
  dsgvoAccepted: false
})

const submitted = ref(false)
const submitting = ref(false)
const touched = ref(false)
const dsgvoOpen = ref(false)
const agbOpen = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\+?[\d\s\-/().]{6,20}$/

const errors = computed(() => ({
  name: touched.value && form.value.name.trim() === '' ? 'Name ist erforderlich.' : '',
  email: touched.value && form.value.email.trim() === ''
    ? 'E-Mail ist erforderlich.'
    : touched.value && !emailRegex.test(form.value.email.trim())
      ? 'Bitte eine gültige E-Mail-Adresse eingeben.'
      : '',
  phone: touched.value && form.value.phone.trim() !== '' && !phoneRegex.test(form.value.phone.trim())
    ? 'Bitte eine gültige Telefonnummer eingeben.'
    : '',
  pickupLocation: touched.value && form.value.pickupLocation === '' ? 'Bitte einen Abholort wählen.' : '',
  dsgvoAccepted: touched.value && !form.value.dsgvoAccepted ? 'Bitte stimme der Datenschutzerklärung zu.' : ''
}))

const pricePerWeek = 26
const totalPrice = computed(() => form.value.weeks * pricePerWeek)

const nextWednesday = computed(() => {
  const now = new Date()
  const day = now.getDay() // 0=So, 1=Mo, ..., 3=Mi
  let daysUntilWed = (3 - day + 7) % 7
  // Wenn heute Mittwoch ist und nach 20 Uhr, nächste Woche
  if (daysUntilWed === 0 && now.getHours() >= 20) {
    daysUntilWed = 7
  }
  // Wenn heute nach Mittwoch, nächste Woche
  if (daysUntilWed === 0) daysUntilWed = 0
  const wed = new Date(now)
  wed.setDate(now.getDate() + daysUntilWed)
  return wed.toLocaleDateString('de-AT', { weekday: 'long', day: 'numeric', month: 'long' })
})

const nextFriday = computed(() => {
  const now = new Date()
  const day = now.getDay()
  let daysUntilFri = (5 - day + 7) % 7
  // Wenn Bestellfrist (Mi 20 Uhr) schon vorbei, nächste Woche Freitag
  const daysUntilWed = (3 - day + 7) % 7
  if (daysUntilWed === 0 && now.getHours() >= 20) {
    daysUntilFri += 7
  } else if (day > 3) {
    // Nach Mittwoch → nächste Woche Freitag
    daysUntilFri = daysUntilFri === 0 ? 7 : daysUntilFri
  }
  const fri = new Date(now)
  fri.setDate(now.getDate() + daysUntilFri)
  return fri.toLocaleDateString('de-AT', { weekday: 'long', day: 'numeric', month: 'long' })
})

const isFormValid = computed(() => {
  return (
    form.value.name.trim() !== '' &&
    emailRegex.test(form.value.email.trim()) &&
    (form.value.phone.trim() === '' || phoneRegex.test(form.value.phone.trim())) &&
    form.value.pickupLocation !== '' &&
    form.value.weeks >= 1 &&
    form.value.weeks <= 8 &&
    form.value.dsgvoAccepted
  )
})

function decrementWeeks() {
  if (form.value.weeks > 1) form.value.weeks--
}

function incrementWeeks() {
  if (form.value.weeks < 8) form.value.weeks++
}

function handleSubmit() {
  touched.value = true
  if (!isFormValid.value) return
  submitting.value = true

  // Formspree-Anbindung folgt – Daten werden hier geloggt
  console.log('Vorbestellung:', {
    ...form.value,
    totalPrice: totalPrice.value
  })

  setTimeout(() => {
    submitting.value = false
    submitted.value = true
  }, 500)
}

function resetForm() {
  form.value = {
    name: '',
    email: '',
    phone: '',
    weeks: 1,
    pickupLocation: '',
    message: '',
    dsgvoAccepted: false
  }
  submitted.value = false
  touched.value = false
}
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <!-- Zurück-Link -->
    <router-link
      to="/#gemuesekiste"
      class="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-primary dark:text-gray-400 dark:hover:text-accent"
    >
      <Icon name="arrow_left" class="h-4 w-4" />
      Zurück zur Übersicht
    </router-link>

    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
      Gemüsekiste vorbestellen
    </h1>
    <p class="mb-8 text-gray-600 dark:text-gray-300">
      Erntefrisches Bio-Gemüse direkt vom Feld – jede Woche 5–8 verschiedene Sorten für 2 Personen.
    </p>

    <!-- Info-Banner -->
    <div class="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-900/30">
      <div class="flex items-start gap-3">
        <Icon name="light" class="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
        <div class="text-sm text-amber-800 dark:text-amber-200">
          <p class="font-semibold">Bestellfrist: Mittwoch, 20:00 Uhr</p>
          <p>
            Nächste Bestellfrist: <strong>{{ nextWednesday }}, 20:00 Uhr</strong><br />
            Erste Abholung: <strong>{{ nextFriday }}</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- Erfolgs-Nachricht -->
    <div v-if="submitted" class="rounded-lg border border-green-200 bg-green-50 p-8 text-center dark:border-green-700 dark:bg-green-900/30">
      <div class="mb-4 text-4xl">🎉</div>
      <h2 class="mb-2 text-xl font-bold text-green-800 dark:text-green-200">
        Vielen Dank für deine Vorbestellung!
      </h2>
      <p class="mb-6 text-green-700 dark:text-green-300">
        Wir melden uns bei dir mit einer Bestätigung. Die Bezahlung erfolgt bei Abholung vor Ort.
      </p>
      <button
        @click="resetForm"
        class="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
      >
        Neue Bestellung aufgeben
      </button>
    </div>

    <!-- Bestell-Formular -->
    <form v-else @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Persönliche Daten -->
      <fieldset class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <legend class="px-2 text-lg font-semibold text-gray-900 dark:text-white">
          Deine Daten
        </legend>

        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <FormInput
            v-model="form.name"
            label="Name"
            placeholder="Dein vollständiger Name"
            :required="true"
            :error="errors.name"
          />
          <FormInput
            v-model="form.email"
            label="E-Mail"
            type="email"
            placeholder="deine.email@beispiel.at"
            :required="true"
            :error="errors.email"
          />
        </div>

        <FormInput
          v-model="form.phone"
          label="Telefon (optional)"
          type="tel"
          placeholder="+43 ..."
          :error="errors.phone"
        />
      </fieldset>

      <!-- Anzahl Wochen -->
      <fieldset class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <legend class="px-2 text-lg font-semibold text-gray-900 dark:text-white">
          Dauer wählen
        </legend>

        <p class="mt-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
          Wie viele Wochen möchtest du die Gemüsekiste erhalten? (1–8 Wochen)
        </p>

        <div class="flex items-center gap-4">
          <button
            type="button"
            @click="decrementWeeks"
            :disabled="form.weeks <= 1"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-lg font-bold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            −
          </button>

          <div class="text-center">
            <span class="text-3xl font-bold text-primary dark:text-accent">
              {{ form.weeks }}
            </span>
            <span class="ml-1 text-gray-600 dark:text-gray-400">
              {{ form.weeks === 1 ? 'Woche' : 'Wochen' }}
            </span>
          </div>

          <button
            type="button"
            @click="incrementWeeks"
            :disabled="form.weeks >= 8"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-lg font-bold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            +
          </button>
        </div>

        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Preis: <strong class="text-gray-900 dark:text-white">€{{ pricePerWeek }},–</strong> pro Woche
          <span v-if="form.weeks > 1">
            · Gesamt: <strong class="text-gray-900 dark:text-white">€{{ totalPrice }},–</strong>
          </span>
        </p>
      </fieldset>

      <!-- Abholort -->
      <fieldset class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <legend class="px-2 text-lg font-semibold text-gray-900 dark:text-white">
          Abholort wählen
        </legend>

        <p class="mt-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
          Wo möchtest du deine Gemüsekiste abholen? (jeweils Freitags)
        </p>

        <div class="grid gap-3 sm:grid-cols-2">
          <label
            v-for="location in pickupLocations"
            :key="location.name"
            class="flex cursor-pointer items-start gap-3 rounded-lg border-2 p-4 transition"
            :class="form.pickupLocation === location.name
              ? 'border-primary bg-primary/5 dark:border-accent dark:bg-accent/10'
              : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500'"
          >
            <input
              type="radio"
              name="pickupLocation"
              :value="location.name"
              v-model="form.pickupLocation"
              class="mt-1 h-4 w-4 accent-primary dark:accent-accent"
            />
            <div>
              <span class="font-medium text-gray-900 dark:text-white">{{ location.name }}</span>
              <span class="block text-xs text-gray-500 dark:text-gray-400">{{ location.address }}</span>
            </div>
          </label>
        </div>
        <p v-if="errors.pickupLocation" class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.pickupLocation }}
        </p>
      </fieldset>

      <!-- Anmerkungen -->
      <fieldset class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <legend class="px-2 text-lg font-semibold text-gray-900 dark:text-white">
          Anmerkungen (optional)
        </legend>

        <div class="mt-4">
          <FormInput
            v-model="form.message"
            label=""
            :multiline="true"
            :rows="3"
            placeholder="Anmerkungen, Wünsche, Fragen ..."
          />
        </div>
      </fieldset>

      <!-- Zusammenfassung -->
      <div class="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
        <h3 class="mb-3 font-semibold text-gray-900 dark:text-white">Zusammenfassung</h3>
        <dl class="grid grid-cols-2 gap-2 text-sm">
          <dt class="text-gray-600 dark:text-gray-400">Dauer:</dt>
          <dd class="font-medium text-gray-900 dark:text-white">{{ form.weeks }} {{ form.weeks === 1 ? 'Woche' : 'Wochen' }}</dd>

          <dt class="text-gray-600 dark:text-gray-400">Abholort:</dt>
          <dd class="font-medium text-gray-900 dark:text-white">{{ form.pickupLocation || '–' }}</dd>

          <dt class="text-gray-600 dark:text-gray-400">Gesamtpreis:</dt>
          <dd class="text-lg font-bold text-primary dark:text-accent">€{{ totalPrice }},–</dd>

          <dt class="text-gray-600 dark:text-gray-400">Zahlung:</dt>
          <dd class="font-medium text-gray-900 dark:text-white">Bar bei Abholung</dd>
        </dl>
      </div>

      <!-- Datenschutz & AGB -->
      <div class="space-y-2">
        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            v-model="form.dsgvoAccepted"
            class="mt-1 h-4 w-4 accent-primary dark:accent-accent shrink-0"
          />
          <span class="text-sm text-gray-600 dark:text-gray-300">
            Ich stimme der
            <button
              type="button"
              @click.prevent="dsgvoOpen = !dsgvoOpen"
              class="font-medium text-primary underline hover:text-primary/80 dark:text-accent dark:hover:text-accent/80"
            >Datenschutzerklärung</button>
            und den
            <button
              type="button"
              @click.prevent="agbOpen = !agbOpen"
              class="font-medium text-primary underline hover:text-primary/80 dark:text-accent dark:hover:text-accent/80"
            >Allgemeinen Bestellbedingungen</button>
            zu.
          </span>
        </label>

        <!-- Datenschutztext -->
        <div
          v-if="dsgvoOpen"
          class="rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-relaxed text-gray-600 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
        >
          <p class="mb-3 font-semibold text-gray-900 dark:text-white">Datenschutzerklärung</p>
          <p class="mb-2">
            Wenn Sie uns über das Formular auf dieser Website kontaktieren oder eine Vorbestellung übermitteln, werden die von Ihnen eingegebenen personenbezogenen Daten (z.&nbsp;B. Name, E-Mail-Adresse, Telefonnummer sowie Ihre Angaben zur Bestellung) zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen verarbeitet.
          </p>
          <p class="mb-2">
            Die Verarbeitung der Daten erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (Verarbeitung zur Durchführung vorvertraglicher Maßnahmen).
          </p>
          <p class="mb-2">
            Für die technische Abwicklung des Formularversands nutzen wir den Dienst Form.taxi der:<br />
            Form.taxi GmbH, Königsbrücker Straße 76, 01099 Dresden, Deutschland.
          </p>
          <p class="mb-2">
            Die von Ihnen eingegebenen Daten werden zur Übermittlung der Anfrage über die Server von Form.taxi verarbeitet. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art.&nbsp;28 DSGVO.
          </p>
          <p class="mb-2">
            Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage bzw. Vorbestellung verwendet und nicht ohne Ihre Einwilligung an Dritte weitergegeben.
          </p>
          <p class="mb-2">
            Ihre Daten werden nur so lange gespeichert, wie dies zur Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
          </p>
          <p>
            Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gemäß den geltenden Datenschutzbestimmungen.
          </p>
        </div>

        <!-- AGB-Text -->
        <div
          v-if="agbOpen"
          class="rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-relaxed text-gray-600 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
        >
          <p class="mb-3 font-semibold text-gray-900 dark:text-white">Allgemeine Bestellbedingungen für Gemüsekisten</p>

          <p class="mb-1 font-semibold">1. Geltungsbereich</p>
          <p class="mb-3">Diese Bestellbedingungen gelten für Vorbestellungen von Gemüsekisten über das Formular auf unserer Website.</p>

          <p class="mb-1 font-semibold">2. Vorbestellung</p>
          <p class="mb-3">Die über das Formular übermittelte Bestellung stellt zunächst eine unverbindliche Anfrage dar. Ein verbindlicher Kaufvertrag kommt erst zustande, nachdem wir die Bestellung per E-Mail oder telefonisch bestätigt haben.</p>

          <p class="mb-1 font-semibold">3. Abholung</p>
          <p class="mb-3">Die Gemüsekisten sind an der bei der Bestellung ausgewählten Abholstation zum vereinbarten Termin abzuholen.</p>

          <p class="mb-1 font-semibold">4. Bezahlung</p>
          <p class="mb-3">Die Bezahlung erfolgt bei Abholung der Ware vor Ort in bar oder über die vor Ort angebotenen Zahlungsmethoden.</p>

          <p class="mb-1 font-semibold">5. Stornierung</p>
          <p class="mb-3">Eine Stornierung der Vorbestellung ist bis spätestens 24 Stunden vor dem vereinbarten Abholtermin möglich.</p>

          <p class="mb-1 font-semibold">6. Nichtabholung</p>
          <p class="mb-3">Nicht abgeholte Gemüsekisten können in Rechnung gestellt werden, sofern keine rechtzeitige Stornierung erfolgt ist.</p>

          <p class="mb-1 font-semibold">7. Saisonale Abweichungen</p>
          <p class="mb-3">Der Inhalt der Gemüsekisten richtet sich nach saisonaler Verfügbarkeit. Änderungen im Sortiment sind möglich.</p>

          <p class="mb-1 font-semibold">8. Kontakt</p>
          <p>Bei Fragen zu Ihrer Bestellung kontaktieren Sie uns bitte per E-Mail oder telefonisch.</p>
        </div>

        <p v-if="errors.dsgvoAccepted" class="text-sm text-red-600 dark:text-red-500">
          {{ errors.dsgvoAccepted }}
        </p>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="!isFormValid || submitting"
        class="w-full rounded-lg bg-primary px-6 py-3 text-center text-sm font-medium text-white shadow-lg transition hover:bg-primary/90 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-accent dark:hover:bg-accent/90 dark:focus:ring-accent/50"
      >
        {{ submitting ? 'Wird gesendet...' : 'Vorbestellen' }}
      </button>

      <p class="text-center text-xs text-gray-500 dark:text-gray-400">
        Ihre Vorbestellung ist unverbindlich. Wir melden uns zur Bestätigung telefonisch oder per E-Mail.
        Die Bezahlung erfolgt bei Abholung vor Ort.
      </p>
    </form>
  </div>
</template>
