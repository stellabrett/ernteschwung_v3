<script setup lang="ts">
import Card from '@/components/Card.vue'
import Icon from './Icon.vue';
import ButtonPrimary from './_ui_components/ButtonPrimary.vue';

interface Props {
  imageSrc: string
}

defineProps<Props>()
</script>

<template>
  <Card
    :image-src="imageSrc"
    image-alt="Gemüsekiste"
    image-position="left"
  >
    <template #title>
      Gemüsekiste
    </template>

    <template #text>
<div class="flex gap-2 flex-nowrap">
    <Icon name="light" class="mb-4 h-6 w-6 text-green-500" />
    <p>Erntefrisches Bio-Gemüse für 2 Personen</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="light" class="mb-4 h-6 w-6 text-green-500" />
    <p>5-8 verschiedene Gemüsearten pro Woche</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="light" class="mb-4 h-6 w-6 text-green-500" />
    <p>Für dich oder als Geschenk </p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="light" class="mb-4 h-6 w-6 text-green-500" />
    <p>Einmalig oder für bis zu 3 Monate lang wöchentlich</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="light" class="mb-4 h-6 w-6 text-green-500" />
    <p>Verfügbar Freitags von April-Dezember</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="light" class="mb-4 h-6 w-6 text-green-500" />
    <p>Abholbar in Entschendorf, Sommerberg, Gleisdorf, Graz oder nach Absprache</p>
</div>
<div class="flex gap-2 flex-nowrap">
    <Icon name="light" class="mb-4 h-6 w-6 text-green-500" />
    <p>€26,-/Woche - ohne Bindung</p>
</div>
    </template>
        <template #button>
        <ButtonPrimary title="JETZT BESTELLEN" />
    </template>
  </Card>
</template>
