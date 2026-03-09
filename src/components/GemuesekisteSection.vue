<script setup lang="ts">
import { useRouter } from 'vue-router'
import Card from '@/components/Card.vue'
import Icon from './Icon.vue'
import ImageSlider from './ImageSlider.vue'
import ButtonPrimary from './_ui_components/ButtonPrimary.vue'

const imageModules = import.meta.glob('@/assets/images/*', {
  eager: true,
  import: 'default'
}) as Record<string, string>

const sliderImages = Array.from({ length: 10 }, (_, i) => ({
  src: imageModules[`/src/assets/images/${i + 2}.WebP`] ?? '',
  alt: `Gemüsekiste ${i + 1}`
}))

const router = useRouter()
function goToPreOrder() {
  router.push({ name: 'vorbestellen' })
}
</script>

<template>
  <Card
    image-alt="Gemüsekiste"
    image-position="left"
  >
    <template #image>
      <ImageSlider :images="sliderImages" />
    </template>
    <template #title>
      Gemüsekiste
    </template>

    <template #text>
<div class="flex gap-2 flex-nowrap">
    <Icon name="leave" class="mb-4 h-6 w-6 text-green-800" />
    <p>Erntefrisches Bio-Gemüse für 2 Personen</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="leave" class="mb-4 h-6 w-6 text-green-800" />
    <p>5-8 verschiedene Gemüsearten pro Woche</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="leave" class="mb-4 h-6 w-6 text-green-800" />
    <p>Für dich oder als Geschenk </p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="leave" class="mb-4 h-6 w-6 text-green-800" />
    <p>Einmalig oder für bis zu 2 Monate lang wöchentlich</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="leave" class="mb-4 h-6 w-6 text-green-800" />
    <p>Verfügbar Freitags von April-Dezember</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="leave" class="mb-4 h-6 w-6 text-green-800" />
    <p>Abholbar in Entschendorf, Sommerberg, Gleisdorf, Graz oder nach Absprache</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="leave" class="mb-4 h-6 w-6 text-green-800" />
    <p>€26,-/Woche - ohne Bindung</p>
</div>
    </template>
        <template #button>
        <ButtonPrimary title="JETZT BESTELLEN" @click="goToPreOrder" />
    </template>
  </Card>
</template>
