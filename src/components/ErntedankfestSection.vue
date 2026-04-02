<script setup lang="ts">
import Card from "@/components/Card.vue";

interface Props {
  imageSrc: string;
}

defineProps<Props>();
</script>

<template>
  <Card
    :image-src="imageSrc"
    image-alt="Erntedankfest"
    image-position="left"
    bg-class="bg-white dark:bg-gray-800"
  >
    <template #title> Erntedankfest </template>

    <template #text>
      <p class="leading-relaxed">
        Wir sind mit Leidenschaft bei der Sache und wollen die Ernte daher
        gebührend mit Dir feiern. Wenn im September die Hagelsaison zu Ende
        geht, vergessen wir das Donnergrollen der Sommermonate und verbreiten
        den Klang von Lebensfreude und Dankbarkeit auf unserem Hügel. Alle, die
        unser Gemüse beziehen, sowie unsere NachbarInnen, FreundInnen,
        Verwandte, Bekannte und alle, die uns und den Hof kennenlernen wollen,
        sind eingeladen, eine schöne Zeit bei uns zu verbringen. Es ist ein Fest
        für alle, das einfach Spaß macht. Sei unser Gast und schwing mit ein!
      </p>
    </template>
  </Card>
</template>
