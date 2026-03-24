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
    image-alt="Ausflüge und Exkursionen"
    image-position="right"
    bg-class="bg-purple-50 dark:bg-gray-800"
  >
    <template #title>
      Ausflüge/ Exkursionen
    </template>

    <template #text>
      <p class="leading-relaxed">
       Gerne bieten wir dir eine Führung durch unseren Marktgarten und unsere Jungpflanzenanzucht an. Dabei kannst du und deine Gruppe mehr über kleinstrukturierte Gemüseproduktion, Bodenfruchtbarkeit, Solidarische Landwirtschaft und Marktgärtnerei erfahren. Gerne gestalten wir auch eine angepasste Führung für Kinder. Im Anschluss bieten wir gerne eine Verkostung des saisonalen Gemüsesortiments an. Dauer ca. 1,5h. Preis auf Anfrage. 
      </p>
    </template>

  </Card>
</template>
