<script setup lang="ts">
import { useGenerateTheme } from "./hooks/useGenerateTheme";
import HelloWorld from "./components/HelloWorld.vue";
useGenerateTheme();
</script>

<template>
  <!-- <router-view></router-view> -->
  <HelloWorld msg="hhh"></HelloWorld>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
