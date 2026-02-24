<script setup lang="ts">
import Card from '@/components/Card.vue'
import ButtonPrimary from './_ui_components/ButtonPrimary.vue';

interface Props {
  imageSrc: string
}

defineProps<Props>()
</script>

<template>
  <Card
    :image-src="imageSrc"
    image-alt="Solidarische Landwirtschaft"
    image-position="right"
  >
    <template #title>
      SoLaWi
    </template>

    <template #text>
      <p>
        Die Solidarische Landwirtschaft, auch CSA (Community Supported Agriculture) ist ein bewährtes Konzept, das eine
        unabhängige, krisenfeste und zukunftsfähige Landwirtschaft ermöglicht. Der Großteil unserer Gemüseproduktion wird
        schon im Voraus finanziert. Als ErnteteilerIn bekommst du dafür einen Anteil der Gemüseernte zugesichert. Diese
        Planungssicherheit erlaubt uns eine zielgerichtete Produktion ohne Abfälle. Bei unserer jährlichen
        Winterversammlung legen wir unser Budget offen, berichten über die Geschehnisse der vergangenen Saison und
        präsentieren die Neuerungen für das kommende Jahr. Bei freiwilligen Ernteaktionen, Gartenführungen, über unseren
        Newsletter oder beim Erntedankfest im Herbst kannst du uns, den Marktgarten und den Hof näher kennenzulernen.
        Solidarische Landwirtschaft ist ehrlich, direkt und transparent.
      </p>
    </template>

    <template #button>
        <ButtonPrimary title="JETZT ERNTETEILERIN WERDEN" />
    </template>
  </Card>
</template>
