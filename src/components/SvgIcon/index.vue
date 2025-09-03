<template>
  <IconifyIcon :class="svgClass" :icon="iconName"></IconifyIcon>
</template>

<script setup lang="ts">
import { Icon as IconifyIcon } from "@iconify/vue";

const { customClass } = defineProps<{
  iconName: string;
  customClass?: string;
}>();

const svgClass = computed(() => (customClass ? `icon ${customClass}` : "icon"));
</script>

<style lang="scss" scoped>
.icon {
  --at-apply: w-2em;
}
</style>
