<script setup lang="ts">
import {computed} from "vue";

type Props = {
  title?: string
  type?: string
  ariaLabel?: string
  loading?: boolean
}
//if aria label is not set, title is default aria label
const ariaLabel = computed(() => props.ariaLabel || props.title)

const props = withDefaults(defineProps<Props>(), {
  title: 'base',
  loading: false,
})
const emit = defineEmits(['click'])
const click = () => {
  emit('click')
}
</script>
<template>
  <button
    @click="click"
    :aria-label="ariaLabel"
    class="initial:rounded-full initial:py-2.5 initial:px-5 initial:text-center initial:gap-2 initial:h-9.5 initial:text-sm initial:items-center initial:justify-center flex cursor-pointer flex-row self-stretch leading-1.25 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
    :class="loading ? 'pointer-events-none' : ''"
  >
    <slot name="icon-prefix"></slot>
    {{ title }}
    <slot name="icon-postfix"></slot>
  </button>
</template>

<style scoped>

</style>
