<template>
  <svg-icon
    @click="handleToggle"
    :icon-name="
      isFullScreen
        ? 'ant-design:fullscreen-exit-outlined'
        : 'ant-design:fullscreen-outlined'
    "
    custom-class="w-2em h-2em"
  ></svg-icon>
</template>

<script setup lang="ts">
import screenfull from "screenfull";

const isFullScreen = ref(false);

const handleToggle = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  } else {
    // Safari is supported on desktop and iPad, but not on iPhone. This is a limitation in the browser, not in Screenfull.
    console.log("浏览器不支持全屏");
  }
};

const updateFullScreenStatus = () => {
  isFullScreen.value = screenfull.isFullscreen;
};

onMounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on("change", updateFullScreenStatus);
  }
});
</script>

<style lang="scss" scoped></style>
