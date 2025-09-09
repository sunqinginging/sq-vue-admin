<template>
  <div>
    <svg-icon
      iconName="ant-design:align-right-outlined"
      customClass="w-2em text-amber hover:text-red"
      @click="handleClick"
    ></svg-icon>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("handleClick");
};
</script>

<style lang="scss" scoped></style>
