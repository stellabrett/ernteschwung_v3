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
      <p>
  Von Anfang Mai bis Anfang Juni kannst du bei uns ab Hof Jungpflanzen aus torffreier Anzucht für deinen eigenen Hausgarten beziehen. Neben einem breiten Sortiment an Gemüsejungpflanzen erhältst du auch verschiedene Blumenpflanzen, die deinen Garten noch weiter verschönern. Auf Anfrage bieten wir dir gerne auch vor Anfang Mai und nach Anfang Juni verschiedene Jungpflanzen an. Komm zu einem unserer Jungpflanzenmärkte am Hof und lerne uns und den Hof kennen. 
      </p>
    </template>

  </Card>
</template>
