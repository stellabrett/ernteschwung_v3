<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import UpcomingSection from '@/components/UpcomingSection.vue'
import ContactFormSection from '@/components/ContactFormSection.vue'
import SolawiSection from '@/components/SolawiSection.vue'
import GemuesekisteSection from '@/components/GemuesekisteSection.vue'
import JungpflanzenSection from '@/components/JungpflanzenSection.vue'
import ExkursionenSection from '@/components/ExkursionenSection.vue'
import WiesenheuSection from '@/components/WiesenheuSection.vue'
import WelcomeSection from '@/components/WelcomeSection.vue'
import UeberUnsSection from '@/components/UeberUnsSection.vue'
import ErntedankfestSection from '@/components/ErntedankfestSection.vue'

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

const solawiImage = getImageWithFallback('Solawi.WebP', 'solawi.svg')
const jungpflanzenImage = getImageWithFallback('Jungpflanzen.WebP', 'jungpflanzen.svg')
const exkursionenImage = getImageWithFallback('Exkursionen1.WebP', 'exkursionen.svg')
const wiesenheuImage = getImageWithFallback('Wiesenheu.WebP', 'wiesenheu.svg')
const willkommenImage = getImageWithFallback('Willkommen.WebP', 'home.svg')
const ueberUnsImage1 = getImageWithFallback('UeberUns1.WebP', 'ueber-uns.svg')
const ueberUnsImage2 = getImageWithFallback('UeberUns2.WebP', 'ueber-uns.svg')
const erntedankfestImage = getImageWithFallback('Erntedankfest.WebP', 'ueber-uns.svg')
const infotagMohogaImage = getImage('InfotagMohoga.jpg') || fallbackImage
const jungpflanzenmaerkteImage = getImage('JungpflanzenmarktFlyer.jpg') || fallbackImage


const upcomingItems = [
  {
    title: 'Hofführung im März',
    text: 'Einblick in Anbau, Bodenpflege und unsere aktuellen Kulturen auf dem Feld.',
    imageSrc: infotagMohogaImage,
    imageAlt: 'Infotag Mohoga'
  },
  {
    title: 'Jungpflanzen-Verkauf',
    text: 'Saisonstart mit robusten Jungpflanzen für Garten, Balkon und Hochbeet.',
    imageSrc: jungpflanzenmaerkteImage,
    imageAlt: 'Jungpflanzen Verkauf'
  }
]


</script>

<template>
  <div class="space-y-16 ">
    <section id="home" class="scroll-mt-24">
      <PageHeader/>
    
    </section>

    <UpcomingSection :items="upcomingItems" />

    <section id="willkommen" class="scroll-mt-24">
      <WelcomeSection :image-src="willkommenImage" />
    </section>

    <section id="solawi" class="scroll-mt-24">
      <SolawiSection :image-src="solawiImage" />
    </section>

    <section id="gemuesekiste" class="scroll-mt-24">
      <GemuesekisteSection />
    </section>

    <section id="jungpflanzen" class="scroll-mt-24">
      <JungpflanzenSection :image-src="jungpflanzenImage" />
    </section>

    <section id="erntedankfest" class="scroll-mt-24">
      <ErntedankfestSection :image-src="erntedankfestImage" />
    </section>

    <section id="exkursionen" class="scroll-mt-24">
      <ExkursionenSection :image-src="exkursionenImage" />
    </section>

    <section id="wiesenheu" class="scroll-mt-24">
      <WiesenheuSection :image-src="wiesenheuImage" />
    </section>

    <section id="ueber-uns" class="scroll-mt-24">
      <UeberUnsSection :image-src1="ueberUnsImage1" :image-src2="ueberUnsImage2" />
    </section>

    <section id="kontakt" class="scroll-mt-24">
      <ContactFormSection />
    </section>
  </div>
</template>
