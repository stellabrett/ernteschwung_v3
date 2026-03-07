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
    image-alt="Über uns"
    image-position="left"
  >
    <template #title>
      Über uns
    </template>

    <template #text>
      <p class="mb-4">
        Hallo ich bin Arjuna Gratt und ich lebe mit meinen drei Kindern und meiner Frau am Ernteschwung Hof in
        Entschendorf. Nach vielen Jahren der Sinnsuche in meinen 20ern spürte ich bei der Neuanlage unseres kleinen
        Gemüsegartens erstmals das Gefühl einer umfassenden Verbundenheit mit dem Boden, der uns trägt und uns ernährt.
        Diese bewegende Erfahrung führte mich schließlich zu einem Studium der Agrarwissenschaften nach Wien. Nach drei
        Jahren als Bio-Kontrollor erkannte ich, dass die Landwirtschaft für mich eine Herzensangelegenheit ist, und ich
        selbst tätig werden möchte. Im Jahr 2021 habe ich den Hof meiner Eltern übernommen. Seither verwende ich mein
        Wissen und meine Leidenschaft dazu, um einen fruchtbar blühenden und strahlenden Ort zu schaffen und zu erhalten,
        der auch einfach zum Da-Sein einlädt.
      </p>
      <p>
        Hallo ich bin Anke Breineder und ich lebe mit meinem zwei Kindern und meinem Mann in Sommerberg. Schon als Kind
        war ich von der Natur fasziniert – Sie zeigt uns stets, was wirklich wichtig ist. Als Quereinsteigerin lebe ich
        seit 2022 als Gemüsegärtnerin diese Verbindung in meinem beruflichen Alltag. Nach meiner Kinderheit und Jugend
        in der Obersteiermark führte mich mein Weg über ein Studium der Kultur- &amp; Sozialanthropologie und eine offene
        Werkstatt für Handwerk direkt in den Gemüsegarten bei Ernteschwung. 2 Jahre berufsbegleitende Ausbildung
        vertieften mein Wissen und ließen meine Begeisterung für den Gemüsebau noch weiter anwachsen. Gemeinsam mit
        Arjuna widme ich mich mit viel Herz unserer Marktgärtnerei und der Solidarischen Landwirtschaft.
      </p>
    </template>
  </Card>
</template>
