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
    image-alt="Wiesenheu"
    image-position="left"
  >
    <template #title>
      Wiesenheu
    </template>

    <template #text>
      <p class="leading-relaxed">
      Wenn im Sommer die Sonne dem Gemüse zu schaffen macht, liegt der köstliche Duft von frischem Wiesenheu über unserem Hof. Die beiden umliegenden Heuwiesen sind ein wichtiger Rückzugsort für Insekten, Hasen und viele andere Lebewesen. Durch die jährliche Mahd und anschließende Heuproduktion gewährleisten wir eine hohe Pflanzenvielfalt auf diesen Flächen. Der späte erste Schnitt eignet sich ideal als Pferdefutter oder zum Mulchen. Die handlich gepressten Kleinballen wiegen ca. 15 kg und können leicht transportiert werden.

      </p>
    </template>
  </Card>
</template>
