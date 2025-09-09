<template>
  <svg-icon
    :icon-name="isDark ? 'ant-design:moon-outlined' : 'ant-design:sun-outlined'"
    @click="handleTransition"
    custom-class="cursor-pointer w-2em h-2em"
  ></svg-icon>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const changeDark = useToggle(isDark);
const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

const handleTransition = async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    changeDark();
    return;
  }
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ];

  // 创建动画对象 ready指的是等待伪元素被创建
  await document.startViewTransition(async () => {
    // 回调函数
    changeDark();
    await nextTick();
  }).ready;
  // 使新视图 动画化
  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    },
  );
};
</script>

<style lang="scss" scoped>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
