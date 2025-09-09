<template>
  <div class="nav-bar">
    <Breadcrumb></Breadcrumb>
    <div class="nav-bar-right">
      <Screenfull ml-12px></Screenfull>
      <dark-mode ml-12px></dark-mode>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

.nav-bar-right {
  display: flex;
  align-items: center;
  font-size: 14px;
}
</style>
