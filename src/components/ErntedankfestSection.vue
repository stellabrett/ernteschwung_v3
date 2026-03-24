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
    image-alt="Erntedankfest"
    image-position="left"
    bg-class="bg-orange-50 dark:bg-gray-800"
  >
    <template #title>
      Erntedankfest
    </template>

    <template #text>
      <p class="leading-relaxed">
  Weil wir mit Leidenschaft bei der Sache sind, ist es uns ein Herzensanliegen die Ernte gebührend zu feiern. Wenn die Hagelsaison im September zu Ende geht, lassen wir das Donnergrollen
        der Sommermonate hinter uns und verbreiten den Klang von Freude, Leichtigkeit und Dankbarkeit auf unserem Hügel.
        Alle, die von uns Gemüse beziehen, NachbarInnen, Freunde, Verwandte &amp; Bekannte sind eingeladen, eine schöne
        Zeit bei uns zu verbringen. Ein Fest, das offen ist für alle und das einfach Spaß macht. Sei gerne unser Gast
        und schwing mit ein.
      </p>
    </template>
  </Card>
</template>
