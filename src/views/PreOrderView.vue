<script setup lang="ts">
import { ref, computed } from "vue";
import FormInput from "@/components/FormInput.vue";
import Icon from "@/components/Icon.vue";

const pickupLocations = [
  {
    name: "Ernteschwung Hof",
    address: "Entschendorf 35, 8321 St. Margarethen",
    hours: "Freitags von 12–20 Uhr",
  },
  {
    name: "Sommerberg",
    address: "Takern I 128, 8321 St. Margarethen",
    hours: "Freitags, 14–20 Uhr",
  },
  {
    name: "Graz Mohoga",
    address: "Moserhofgasse 51, 8010 Graz",
    hours: "Freitags, 10:30–11:30 Uhr",
  },
  {
    name: "Gleisdorf Biosphäre",
    address: "Ludersdorf 85, 8200 Gleisdorf",
    hours: "Freitags, 9:00–10:00 Uhr",
  },
];

const successRedirectUrl = `${location.origin}/vorbestellen/danke`;

const form = ref({
  name: "",
  email: "",
  phone: "",
  weeks: 1,
  pickupLocation: "",
  message: "",
  dsgvoAccepted: false,
});

const submitting = ref(false);
const errorMessage = ref("");
const touched = ref(false);
const dsgvoOpen = ref(false);
const agbOpen = ref(false);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[\d\s\-/().]{6,20}$/;

const errors = computed(() => ({
  name:
    touched.value && form.value.name.trim() === ""
      ? "Name ist erforderlich."
      : "",
  email:
    touched.value && form.value.email.trim() === ""
      ? "E-Mail ist erforderlich."
      : touched.value && !emailRegex.test(form.value.email.trim())
        ? "Bitte eine gültige E-Mail-Adresse eingeben."
        : "",
  phone:
    touched.value && form.value.phone.trim() === ""
      ? "Telefonnummer ist erforderlich."
      : touched.value && !phoneRegex.test(form.value.phone.trim())
        ? "Bitte eine gültige Telefonnummer eingeben."
        : "",
  pickupLocation:
    touched.value && form.value.pickupLocation === ""
      ? "Bitte einen Abholort wählen."
      : "",
  dsgvoAccepted:
    touched.value && !form.value.dsgvoAccepted
      ? "Bitte stimme der Datenschutzerklärung zu."
      : "",
}));

const pricePerWeek = 26;
const totalPrice = computed(() => form.value.weeks * pricePerWeek);

// Saison: 17. April bis 5. Dezember
const currentYear = new Date().getFullYear();
const seasonFirstPickup = new Date(currentYear, 3, 17); // 17. April
const seasonLastPickup = new Date(currentYear, 11, 5); // 5. Dezember

function getNextPickupFriday() {
  const now = new Date();
  const day = now.getDay();
  let daysUntilFri = (5 - day + 7) % 7;
  const daysUntilWed = (3 - day + 7) % 7;
  if (daysUntilWed === 0 && now.getHours() >= 20) {
    daysUntilFri += 7;
  } else if (day > 3) {
    daysUntilFri = daysUntilFri === 0 ? 7 : daysUntilFri;
  }
  const fri = new Date(now);
  fri.setDate(now.getDate() + daysUntilFri);
  return fri;
}

const seasonOver = computed(() => getNextPickupFriday() > seasonLastPickup);

const nextWednesday = computed(() => {
  let fri = getNextPickupFriday();
  if (fri < seasonFirstPickup) fri = new Date(seasonFirstPickup);
  if (fri > seasonLastPickup) return "";
  const wed = new Date(fri);
  wed.setDate(fri.getDate() - 2);
  return wed.toLocaleDateString("de-AT", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
});

const nextFriday = computed(() => {
  let fri = getNextPickupFriday();
  if (fri < seasonFirstPickup) fri = new Date(seasonFirstPickup);
  if (fri > seasonLastPickup) return "";
  return fri.toLocaleDateString("de-AT", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
});

const isFormValid = computed(() => {
  return (
    form.value.name.trim() !== "" &&
    emailRegex.test(form.value.email.trim()) &&
    phoneRegex.test(form.value.phone.trim()) &&
    form.value.pickupLocation !== "" &&
    form.value.weeks >= 1 &&
    form.value.weeks <= 8 &&
    form.value.dsgvoAccepted
  );
});

function decrementWeeks() {
  if (form.value.weeks > 1) form.value.weeks--;
}

function incrementWeeks() {
  if (form.value.weeks < 8) form.value.weeks++;
}

function handleSubmit(event: Event) {
  touched.value = true;

  if (!isFormValid.value) {
    event.preventDefault();
    return;
  }

  submitting.value = true;
}
</script>

<template>
  <div
    class="mx-auto max-w-3xl px-4 py-12 bg-white rounded-md dark:bg-gray-900"
  >
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
      Erntefrisches Bio-Gemüse direkt vom Feld – jede Woche 5–8 verschiedene
      Sorten für 2 Personen.
    </p>

    <!-- Saison beendet -->
    <div
      v-if="seasonOver"
      class="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center dark:border-gray-700 dark:bg-gray-800"
    >
      <p class="text-lg font-semibold text-gray-900 dark:text-white">
        Die Gemüsekisten-Saison ist beendet.
      </p>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        Ab April sind wieder Vorbestellungen möglich.
      </p>
    </div>

    <!-- Info-Banner -->
    <div
      v-if="!seasonOver"
      class="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-900/30"
    >
      <div class="flex items-start gap-3">
        <Icon
          name="light"
          class="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400"
        />
        <div class="text-sm text-amber-800 dark:text-amber-200">
          <p class="font-semibold">Bestellfrist: Mittwoch, 20:00 Uhr</p>
          <p>
            Nächste Bestellfrist: <strong>{{ nextWednesday }}, 20:00 Uhr</strong
            ><br />
            Erste Abholung: <strong>{{ nextFriday }}</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- Bestell-Formular -->
    <form
      v-if="!seasonOver"
      action="https://form.taxi/s/c3ir6vze"
      method="POST"
      @submit="handleSubmit"
      class="space-y-6"
    >
      <!-- Form.taxi Meta -->
      <input
        type="hidden"
        name="_subject"
        value="Neue Gemüsekisten-Vorbestellung"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_next" :value="successRedirectUrl" />
      <!-- Versteckte Werte -->
      <input type="hidden" name="Wochen" :value="form.weeks" />
      <input type="hidden" name="Abholort" :value="form.pickupLocation" />
      <input type="hidden" name="Gesamtpreis" :value="`€${totalPrice},–`" />

      <!-- Persönliche Daten -->
      <fieldset
        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      >
        <legend
          class="px-2 text-lg font-semibold text-gray-900 dark:text-white"
        >
          Deine Daten
        </legend>

        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <FormInput
            v-model="form.name"
            name="Name"
            label="Name"
            placeholder="Dein vollständiger Name"
            :required="true"
            :error="errors.name"
          />
          <FormInput
            v-model="form.email"
            name="E-Mail"
            label="E-Mail"
            type="email"
            placeholder="deine.email@beispiel.at"
            :required="true"
            :error="errors.email"
          />
        </div>

        <FormInput
          v-model="form.phone"
          name="Telefon"
          label="Telefon"
          type="tel"
          placeholder="+43 ..."
          :required="true"
          :error="errors.phone"
        />
      </fieldset>

      <!-- Anzahl Wochen -->
      <fieldset
        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      >
        <legend
          class="px-2 text-lg font-semibold text-gray-900 dark:text-white"
        >
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
            aria-label="Woche verringern"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-lg font-bold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            −
          </button>

          <div class="text-center" aria-live="polite">
            <span class="text-3xl font-bold text-primary dark:text-accent">
              {{ form.weeks }}
            </span>
            <span class="ml-1 text-gray-600 dark:text-gray-400">
              {{ form.weeks === 1 ? "Woche" : "Wochen" }}
            </span>
          </div>

          <button
            type="button"
            @click="incrementWeeks"
            :disabled="form.weeks >= 8"
            aria-label="Woche erhöhen"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-lg font-bold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            +
          </button>
        </div>

        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Preis:
          <strong class="text-gray-900 dark:text-white"
            >€{{ pricePerWeek }},–</strong
          >
          pro Woche
          <span v-if="form.weeks > 1">
            · Gesamt:
            <strong class="text-gray-900 dark:text-white"
              >€{{ totalPrice }},–</strong
            >
          </span>
        </p>
      </fieldset>

      <!-- Abholort -->
      <fieldset
        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      >
        <legend
          class="px-2 text-lg font-semibold text-gray-900 dark:text-white"
        >
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
            :class="
              form.pickupLocation === location.name
                ? 'border-primary bg-primary/5 dark:border-accent dark:bg-accent/10'
                : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500'
            "
          >
            <input
              type="radio"
              name="pickupLocation"
              :value="location.name"
              v-model="form.pickupLocation"
              class="mt-1 h-4 w-4 accent-primary dark:accent-accent"
            />
            <div>
              <span class="font-medium text-gray-900 dark:text-white">{{
                location.name
              }}</span>
              <span class="block text-xs text-gray-500 dark:text-gray-400">{{
                location.address
              }}</span>
              <span class="block text-xs text-gray-500 dark:text-gray-400">{{
                location.hours
              }}</span>
            </div>
          </label>
        </div>
        <p
          v-if="errors.pickupLocation"
          class="mt-2 text-sm text-red-600 dark:text-red-500"
        >
          {{ errors.pickupLocation }}
        </p>
      </fieldset>

      <!-- Anmerkungen -->
      <fieldset
        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      >
        <legend
          class="px-2 text-lg font-semibold text-gray-900 dark:text-white"
        >
          Anmerkungen (optional)
        </legend>

        <div class="mt-4">
          <FormInput
            v-model="form.message"
            name="Anmerkungen"
            label=""
            :multiline="true"
            :rows="3"
            placeholder="Anmerkungen, Wünsche, Fragen ..."
          />
        </div>
      </fieldset>

      <!-- Zusammenfassung -->
      <div
        class="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50"
      >
        <h3 class="mb-3 font-semibold text-gray-900 dark:text-white">
          Zusammenfassung
        </h3>
        <dl class="grid grid-cols-2 gap-2 text-sm">
          <dt class="text-gray-600 dark:text-gray-400">Dauer:</dt>
          <dd class="font-medium text-gray-900 dark:text-white">
            {{ form.weeks }} {{ form.weeks === 1 ? "Woche" : "Wochen" }}
          </dd>

          <dt class="text-gray-600 dark:text-gray-400">Abholort:</dt>
          <dd class="font-medium text-gray-900 dark:text-white">
            {{ form.pickupLocation || "–" }}
          </dd>

          <dt class="text-gray-600 dark:text-gray-400">Gesamtpreis:</dt>
          <dd class="text-lg font-bold text-primary dark:text-accent">
            €{{ totalPrice }},–
          </dd>

          <dt class="text-gray-600 dark:text-gray-400">Zahlung:</dt>
          <dd class="font-medium text-gray-900 dark:text-white">
            Bar bei Abholung
          </dd>
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
              :aria-expanded="dsgvoOpen"
              class="font-medium text-primary underline hover:text-primary/80 dark:text-accent dark:hover:text-accent/80"
            >
              Datenschutzerklärung
            </button>
            und den
            <button
              type="button"
              @click.prevent="agbOpen = !agbOpen"
              :aria-expanded="agbOpen"
              class="font-medium text-primary underline hover:text-primary/80 dark:text-accent dark:hover:text-accent/80"
            >
              Allgemeinen Bestellbedingungen
            </button>
            zu.
          </span>
        </label>

        <!-- Datenschutztext -->
        <div
          v-if="dsgvoOpen"
          class="rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-relaxed text-gray-600 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
        >
          <p class="mb-3 font-semibold text-gray-900 dark:text-white">
            Datenschutzerklärung
          </p>
          <p class="mb-2">
            Wenn Du uns über das Formular auf dieser Website kontaktierst oder
            eine Vorbestellung übermittelst, werden die von Dir eingegebenen
            personenbezogenen Daten (z.&nbsp;B. Name, E-Mail-Adresse,
            Telefonnummer sowie Ihre Angaben zur Bestellung) zur Bearbeitung
            Deiner Anfrage und für mögliche Anschlussfragen verarbeitet.
          </p>
          <p class="mb-2">
            Die Verarbeitung der Daten erfolgt auf Grundlage von Art.&nbsp;6
            Abs.&nbsp;1 lit.&nbsp;b DSGVO (Verarbeitung zur Durchführung
            vorvertraglicher Maßnahmen).
          </p>
          <p class="mb-2">
            Für die technische Abwicklung des Formularversands nutzen wir den
            Dienst Form.taxi der:
          </p>
          <p class="mb-2">
            Form.taxi GmbH<br />
            Königsbrücker Straße 76<br />
            01099 Dresden<br />
            Deutschland
          </p>
          <p class="mb-2">
            Die von Dir eingegebenen Daten werden zur Übermittlung der Anfrage
            über die Server von Form.taxi verarbeitet. Mit dem Anbieter besteht
            ein Vertrag zur Auftragsverarbeitung gemäß Art.&nbsp;28 DSGVO.
          </p>
          <p class="mb-2">
            Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage bzw.
            Vorbestellung verwendet und nicht ohne Ihre Einwilligung an Dritte
            weitergegeben.
          </p>
          <p class="mb-2">
            Deine Daten werden nur so lange gespeichert, wie dies zur
            Bearbeitung Deiner Anfrage erforderlich ist oder gesetzliche
            Aufbewahrungspflichten bestehen.
          </p>
          <p>
            Du hast jederzeit das Recht auf Auskunft über Deine gespeicherten
            personenbezogenen Daten sowie auf Berichtigung, Löschung oder
            Einschränkung der Verarbeitung gemäß den geltenden
            Datenschutzbestimmungen.
          </p>
        </div>

        <!-- AGB-Text -->
        <div
          v-if="agbOpen"
          class="rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-relaxed text-gray-600 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
        >
          <p class="mb-3 font-semibold text-gray-900 dark:text-white">
            Allgemeine Bestellbedingungen für Gemüsekisten
          </p>

          <p class="mb-1 font-semibold">1. Geltungsbereich</p>
          <p class="mb-3">
            Diese Bestellbedingungen gelten für Vorbestellungen von Gemüsekisten
            über das Formular auf unserer Website.
          </p>

          <p class="mb-1 font-semibold">2. Vorbestellung</p>
          <p class="mb-3">
            Die über das Formular übermittelte Bestellung stellt zunächst eine
            unverbindliche Anfrage dar. Ein verbindlicher Kaufvertrag kommt erst
            zustande, nachdem wir die Bestellung per E-Mail oder telefonisch
            bestätigt haben.
          </p>

          <p class="mb-1 font-semibold">3. Abholung</p>
          <p class="mb-3">
            Die Gemüsekisten sind an der bei der Bestellung ausgewählten
            Abholstation zum vereinbarten Termin abzuholen.
          </p>

          <p class="mb-1 font-semibold">4. Bezahlung</p>
          <p class="mb-3">
            Die Bezahlung erfolgt bei Abholung der Ware vor Ort in bar oder über
            die vor Ort angebotenen Zahlungsmethoden.
          </p>

          <p class="mb-1 font-semibold">5. Stornierung</p>
          <p class="mb-3">
            Eine Stornierung der Vorbestellung ist bis spätestens 24 Stunden vor
            dem vereinbarten Abholtermin möglich.
          </p>

          <p class="mb-1 font-semibold">6. Nichtabholung</p>
          <p class="mb-3">
            Nicht abgeholte Gemüsekisten können in Rechnung gestellt werden,
            sofern keine rechtzeitige Stornierung erfolgt ist.
          </p>

          <p class="mb-1 font-semibold">7. Saisonale Abweichungen</p>
          <p class="mb-3">
            Der Inhalt der Gemüsekisten richtet sich nach saisonaler
            Verfügbarkeit. Änderungen im Sortiment sind möglich.
          </p>

          <p class="mb-1 font-semibold">8. Kontakt</p>
          <p>
            Bei Fragen zu Ihrer Bestellung kontaktiere uns bitte per E-Mail oder
            telefonisch.
          </p>
        </div>

        <p
          v-if="errors.dsgvoAccepted"
          class="text-sm text-red-600 dark:text-red-500"
        >
          {{ errors.dsgvoAccepted }}
        </p>
      </div>

      <!-- Fehler-Nachricht -->
      <div
        v-if="errorMessage"
        class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300"
      >
        {{ errorMessage }}
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="submitting"
        class="w-full rounded-lg bg-primary px-6 py-3 text-center text-sm font-medium text-white shadow-lg transition hover:bg-primary/90 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-accent dark:hover:bg-accent/90 dark:focus:ring-accent/50"
      >
        {{ submitting ? "Wird gesendet..." : "Vorbestellen" }}
      </button>

      <p class="text-center text-xs text-gray-500 dark:text-gray-400">
        Ihre Vorbestellung ist unverbindlich. Wir melden uns zur Bestätigung
        telefonisch oder per E-Mail. Die Bezahlung erfolgt bei Abholung vor Ort.
      </p>
    </form>
  </div>
</template>
