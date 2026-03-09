<script setup lang="ts">
interface Props {
  imageSrc1: string
  imageSrc2: string
}

defineProps<Props>()
</script>

<template>
  <div class="space-y-10">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center">Über uns</h2>

    <!-- Arjuna -->
    <div class="flex flex-col md:flex-row gap-8 rounded-2xl bg-white p-6 md:p-8 shadow-md dark:bg-gray-800">
      <img
        :src="imageSrc1"
        alt="Arjuna Gratt"
        class="w-full md:w-64 shrink-0 rounded-xl object-cover self-stretch ransition-transform duration-500 hover:scale-105"
      />
      <div class="flex flex-col justify-center">
        <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Arjuna Gratt</h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Hallo ich bin Arjuna Gratt und ich lebe mit meinen drei Kindern und meiner Frau am Ernteschwung Hof in
          Entschendorf. Nach vielen Jahren der Sinnsuche in meinen 20ern spürte ich bei der Neuanlage unseres kleinen
          Gemüsegartens erstmals das Gefühl einer umfassenden Verbundenheit mit dem Boden, der uns trägt und uns ernährt.
          Diese bewegende Erfahrung führte mich schließlich zu einem Studium der Agrarwissenschaften nach Wien. Nach drei
          Jahren als Bio-Kontrollor erkannte ich, dass die Landwirtschaft für mich eine Herzensangelegenheit ist, und ich
          selbst tätig werden möchte. Im Jahr 2021 habe ich den Hof meiner Eltern übernommen. Seither verwende ich mein
          Wissen und meine Leidenschaft dazu, um einen fruchtbar blühenden und strahlenden Ort zu schaffen und zu erhalten,
          der auch einfach zum Da-Sein einlädt.
        </p>
      </div>
    </div>

    <!-- Anke -->
    <div class="flex flex-col md:flex-row-reverse gap-8 rounded-2xl bg-white p-6 md:p-8 shadow-md dark:bg-gray-800">
      <img
        :src="imageSrc2"
        alt="Anke Breineder"
        class="w-full md:w-64 shrink-0 rounded-xl object-cover self-stretch ransition-transform duration-500 hover:scale-105"
      />
      <div class="flex flex-col justify-center">
        <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Anke Breineder</h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Hallo ich bin Anke Breineder und ich lebe mit meinem zwei Kindern und meinem Mann in Sommerberg. Schon als Kind
          war ich von der Natur fasziniert – Sie zeigt uns stets, was wirklich wichtig ist. Als Quereinsteigerin lebe ich
          seit 2022 als Gemüsegärtnerin diese Verbindung in meinem beruflichen Alltag. Nach meiner Kinderheit und Jugend
          in der Obersteiermark führte mich mein Weg über ein Studium der Kultur- &amp; Sozialanthropologie und eine offene
          Werkstatt für Handwerk direkt in den Gemüsegarten bei Ernteschwung. 2 Jahre berufsbegleitende Ausbildung
          vertieften mein Wissen und ließen meine Begeisterung für den Gemüsebau noch weiter anwachsen. Gemeinsam mit
          Arjuna widme ich mich mit viel Herz unserer Marktgärtnerei und der Solidarischen Landwirtschaft.
        </p>
      </div>
    </div>
  </div>
</template>
