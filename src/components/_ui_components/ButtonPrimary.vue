<script setup lang="ts">

import {computed} from "vue";
import Icon from "@/components/Icon.vue";

const props = defineProps<{
  title: string,
  type?: string,
  ariaLabel?: string,
  iconPrefix?:  string,
  iconPostfix?: string,
}>()

const ariaLabel = computed(() => props.ariaLabel || props.title)
const emit = defineEmits(['click'])
const click = () => {
  emit('click')
}
</script>

<template>
  <button
    @click="click"
    :ariaLabel="ariaLabel"
    class="appearance-none rounded-lg cursor-pointer bg-primary text-neutral-50 outline-1 outline-primary
  hover:bg-primary-light  py-2 px-4 inline-block text-center text-sm leading-tight hover:scale-105 shadow-lg
 from-primary  to-secondary  focus:ring-4 focus:outline-none focus:ring-emerald-300  shadow-secondary/20 " >
    <slot name="icon-prefix">
      <icon v-if="iconPrefix" name="props.iconPrefix" class="w-4 h-4 mr-2"></icon>
    </slot>
    {{title}}
    <slot name="icon-postfix"></slot>
  </button>
</template>



<style scoped>

</style>
