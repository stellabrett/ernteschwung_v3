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
    image-alt="Jungpflanzen"
    image-position="right"
  >
    <template #title>
      Jungpflanzen
    </template>

    <template #text>
      <p class="leading-relaxed">
 Von Anfang Mai bis Anfang Juni kannst Du bei uns ab Hof Jungpflanzen aus torffreier Anzucht für deinen eigenen Hausgarten beziehen. Neben einem breiten Sortiment an Gemüsejungpflanzen erhältst Du auch verschiedene Blumenpflanzen, die Deinen Garten noch weiter verschönern. Komm zu unseren Jungpflanzenmärkten und lerne uns und den Hof kennen. Gerne bieten wir Dir auf Anfrage auch abseits der Märkte ein breites Sortiment an Pflanzen an.
      </p>
    </template>

  </Card>
</template>
