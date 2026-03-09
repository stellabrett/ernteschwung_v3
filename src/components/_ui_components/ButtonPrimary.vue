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
    class="inline-flex items-center gap-2 rounded-lg cursor-pointer bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 focus:ring-4 focus:outline-none focus:ring-primary/30"
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
