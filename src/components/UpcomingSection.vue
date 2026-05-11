<script setup lang="ts">
import gemuesePdf from "@/assets/pdfs/Gemüsejungpflanzen Sortiment_2026.pdf";
import blumenPdf from "@/assets/pdfs/Blumenjungpflanzen Sortiment_2026.pdf";

interface UpcomingItem {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

defineProps<{
  items: UpcomingItem[];
}>();
</script>

<template>
  <section class="rounded-xl bg-white p-6 md:p-8 shadow-md dark:bg-gray-800">
    <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
      Aktuelles
    </h2>

    <div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
      <!-- PDF Sortiment Card -->
      <article
        class="overflow-hidden rounded-xl  bg-gray-50 dark:bg-gray-700/50 p-5 flex flex-col gap-4"
      >
        <h3 class="text-lg font-semibold text-secondary dark:text-green-400">
          Hier geht es zu unserem Jungpflanzen Sortiment
        </h3>

        <div class="flex flex-col gap-3">
          <a
            :href="gemuesePdf"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:border-green-500 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Gemüsejungpflanzen Sortiment 2026
          </a>

          <a
            :href="blumenPdf"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:border-green-500 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Blumenpflanzen Sortiment 2026
          </a>
        </div>

        <p
          class="text-sm text-gray-600 leading-relaxed dark:text-gray-300 mt-auto"
        >
          Jetzt Online unter
          <a
            href="/#kontakt"
            class="font-semibold text-secondary underline underline-offset-2 hover:text-primary dark:text-green-400 dark:hover:text-green-300"
          >
            „Kontakt"
          </a>
          bestellen oder telefonisch unter
          <a
            href="tel:+4366410135 47"
            class="font-semibold text-secondary underline underline-offset-2 hover:text-primary dark:text-green-400 dark:hover:text-green-300"
          >
            06641013547
          </a>
        </p>
      </article>

      <!-- Dynamic Items (Jungpflanzen-Verkauf etc.) -->
      <article
        v-for="item in items"
        :key="item.title"
        class="overflow-hidden rounded-xl bg-gray-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:bg-gray-700/50"
      >
        <img
          :src="item.imageSrc"
          :alt="item.imageAlt"
          class="mx-auto w-full max-w-xs object-contain"
        />
        <div class="p-5">
          <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {{ item.title }}
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed dark:text-gray-300">
            {{ item.text }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
