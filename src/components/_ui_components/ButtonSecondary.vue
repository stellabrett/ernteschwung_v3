<script setup lang="ts">

import {computed} from "vue";
import Icon from "@/components/Icon.vue";

const props = defineProps<{
  title: string,
  type?: string,
  ariaLabel?: string,
  iconPrefix?: string,
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
    :type="(type as any) || 'button'"
    @click="click"
    :aria-label="ariaLabel"
    class="inline-flex items-center justify-center gap-2 rounded-lg cursor-pointer border-1 border-primary bg-transparent px-6 py-2.5 text-center text-sm font-semibold text-primary shadow-md transition-all duration-200 hover:bg-primary/10 hover:shadow-lg focus:ring-2 focus:outline-none focus:ring-primary/30 dark:border-accent dark:text-accent dark:hover:bg-accent2/10 dark:focus:ring-accent/30"
  >
    <slot name="icon-prefix">
      <Icon v-if="iconPrefix" :name="iconPrefix" class="w-4 h-4" />
    </slot>
    {{title}}
    <slot name="icon-postfix">
      <Icon v-if="iconPostfix" :name="iconPostfix" class="w-4 h-4" />
    </slot>
  </button>
</template>

<style scoped>

</style>
