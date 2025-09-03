<template>
  <component :is="componentType" v-bind="componentProp">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { isExternal } from "@/utils/validate";

const { to } = defineProps<{
  to: string;
}>();

const isExt = computed(() => isExternal(to));

const componentType = computed(() => {
  return isExt.value ? "a" : "router-link";
});

const componentProp = computed(() => {
  if (isExt.value) {
    return {
      href: to,
      target: "_blank",
    };
  } else {
    return {
      to,
    };
  }
});
</script>

<style lang="scss" scoped></style>
