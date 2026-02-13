<script setup lang="ts">

import {computed} from "vue";

const props = defineProps<{
  title: string,
  type?: string,
  ariaLabel?: string,
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
    class="appearance-none cursor-pointer
    text-neutral-50 border-b-neutral-50    rounded-lg
       focus:outline-2  outline-1
  hover:bg-primary-light  py-2 px-4 inline-block text-center text-sm leading-tight hover:scale-105 shadow-lg shadow-neutral-50/30
">

    <slot name="icon-prefix"></slot>
    {{title}}
    <slot name="icon-postfix"></slot>

  </button>
</template>

<style scoped>

</style>
