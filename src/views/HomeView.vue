<script setup lang="ts">
import Card from '@/components/Card.vue'
import PageHeader from '@/components/PageHeader.vue'
import UpcomingSection from '@/components/UpcomingSection.vue'
import ContactFormSection from '@/components/ContactFormSection.vue'

const imageModules = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default'
}) as Record<string, string>

const fallbackImage = imageModules['../assets/images/placeholder.jpg'] || ''

const getImage = (fileName: string) => {
  return imageModules[`../assets/images/${fileName}`]
}

const getImageWithFallback = (primaryFile: string, fallbackFile: string) => {
  return getImage(primaryFile) || getImage(fallbackFile) || fallbackImage
}

const homeImage = getImageWithFallback('Home2.WebP', 'home.svg')
const solawiImage = getImageWithFallback('Solawi.WebP', 'solawi.svg')
const gemuesekisteImage = getImageWithFallback('gemuesekiste.WebP', 'gemuesekiste.svg')
const jungpflanzenImage = getImageWithFallback('Jungpflanzen.WebP', 'jungpflanzen.svg')
const exkursionenImage = getImageWithFallback('Exkursionen1.WebP', 'exkursionen.svg')
const wiesenheuImage = getImageWithFallback('Wiesenheu.WebP', 'wiesenheu.svg')
const ueberUnsImage = getImageWithFallback('Erntedankfest.WebP', 'ueber-uns.svg')


const upcomingItems = [
  {
    title: 'Hofführung im März',
    text: 'Einblick in Anbau, Bodenpflege und unsere aktuellen Kulturen auf dem Feld.',
    imageSrc: exkursionenImage,
    imageAlt: 'Hofführung'
  },
  {
    title: 'Jungpflanzen-Verkauf',
    text: 'Saisonstart mit robusten Jungpflanzen für Garten, Balkon und Hochbeet.',
    imageSrc: jungpflanzenImage,
    imageAlt: 'Jungpflanzen Verkauf'
  },
  {
    title: 'SoLaWi-Infoabend',
    text: 'Lernen Sie unser solidarisches Modell kennen und stellen Sie Ihre Fragen direkt vor Ort.',
    imageSrc: solawiImage,
    imageAlt: 'SoLaWi Infoabend'
  }
]

interface Section {
  id: string
  title: string
  text: string
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

const sections: Section[] = [
  {
    id: 'solawi',
    title: 'SoLaWi',
    text: 'In unserer solidarischen Landwirtschaft tragen viele gemeinsam die Verantwortung. So entstehen faire Preise, Transparenz und echte Nähe zur Produktion.',
    imageSrc: solawiImage,
    imageAlt: 'Solidarische Landwirtschaft',
    imagePosition: 'right'
  },
  {
    id: 'gemuesekiste',
    title: 'Gemüsekiste',
    text: 'Unsere Gemüsekiste bringt saisonale Frische direkt zu Ihnen. Jede Lieferung enthält abwechslungsreiche Produkte aus regionalem und naturnahem Anbau.',
    imageSrc: gemuesekisteImage,
    imageAlt: 'Gemüsekiste',
    imagePosition: 'left'
  },
  {
    id: 'jungpflanzen',
    title: 'Jungpflanzen',
    text: 'Für Garten, Balkon oder Hof bieten wir kräftige Jungpflanzen mit Fokus auf Geschmack, Robustheit und Sortenvielfalt für die Saison.',
    imageSrc: jungpflanzenImage,
    imageAlt: 'Jungpflanzen',
    imagePosition: 'right'
  },
  {
    id: 'exkursionen',
    title: 'Ausflüge/Exkursionen',
    text: 'Bei Führungen und Ausflügen teilen wir Wissen aus der Praxis. Erleben Sie Naturkreisläufe, Anbaumethoden und die Menschen hinter Ernteschwung.',
    imageSrc: exkursionenImage,
    imageAlt: 'Ausflüge und Exkursionen',
    imagePosition: 'left'
  },
  {
    id: 'wiesenheu',
    title: 'Wiesenheu',
    text: 'Unser Wiesenheu wird sorgfältig geerntet und gelagert. Das sorgt für natürliche Qualität, gute Struktur und verlässliche Versorgung.',
    imageSrc: wiesenheuImage,
    imageAlt: 'Wiesenheu',
    imagePosition: 'right'
  },
  {
    id: 'ueber-uns',
    title: 'Über uns',
    text: 'Hinter Ernteschwung steht ein Team mit Herz für ökologische Landwirtschaft. Wir arbeiten partnerschaftlich und mit Blick auf langfristige Bodenfruchtbarkeit.',
    imageSrc: ueberUnsImage,
    imageAlt: 'Über uns',
    imagePosition: 'left'
  }
]
</script>

<template>
  <div class="space-y-8">
    <section id="home" class="scroll-mt-24">
      <PageHeader
        :image-src="homeImage"
        image-alt="Ernteschwung Header"
        subtext="Faszination – Gemüse – Vielfalt – Natur"
      />
    </section>

    <UpcomingSection :items="upcomingItems" />

    <section
      v-for="section in sections"
      :id="section.id"
      :key="section.id"
      class="scroll-mt-24"
    >
      <Card
        :image-src="section.imageSrc"
        :image-alt="section.imageAlt"
        :image-position="section.imagePosition"
      >
        <template #title>
          {{ section.title }}
        </template>

        <template #text>
          <p>{{ section.text }}</p>
        </template>
      </Card>
    </section>

    <section id="kontakt" class="scroll-mt-24">
      <ContactFormSection />
    </section>
  </div>
</template>
