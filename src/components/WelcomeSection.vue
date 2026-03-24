<script setup lang="ts">
import Card from '@/components/Card.vue'

interface Props {
  imageSrc: string
}

defineProps<Props>()
</script>

<template>
  <Card
    :image-src="imageSrc"
    image-alt="Willkommen am Ernteschwung Hof"
    image-position="left"
  >
    <template #title>
      Willkommen am Ernteschwung Hof!
    </template>

    <template #text>
      <p class="leading-relaxed">
   Hier treffen sich DEINE Liebe zum guten Geschmack und UNSERE Begeisterung für die natürliche Vielfalt. Neben erntefrischem Bio-Gemüse aus unserem Marktgarten gibt es bei uns Jungpflanzen aus torffreier Anzucht und Wiesenheu in Kleinballen. Als Solidarische Landwirtschaft setzen wir neue Akzente in der regionalen Lebensmittelversorgung. Schwungvoll runden wir die Gemüsesaison mit unserem Erntedankfest im September ab! Gerne heißen wir Dich als Gruppe bei Exkursionen oder Ausflügen am Hof willkommen. Wir sind ein zertifizierter Bio-Betrieb und werden jährlich von der Kontrollstelle Lacon auf die Einhaltung der EU-Bio Richtlinien kontrolliert.
      </p>
    </template>
  </Card>
</template>
