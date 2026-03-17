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
    :type="(type as any) || 'button'"
    @click="click"
    :aria-label="ariaLabel"
    class="inline-flex items-center justify-center gap-2 rounded-lg cursor-pointer bg-accent px-6 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-accent/25 transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 focus:ring-2 focus:outline-none focus:ring-accent/30"
  >
    <slot name="icon-prefix">
      <icon v-if="iconPrefix" name="props.iconPrefix" class="w-4 h-4 mr-2"></icon>
    </slot>
    {{title}}
    <slot name="icon-postfix"></slot>
  </button>
</template>



<style scoped>

</style>
