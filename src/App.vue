<script setup lang="ts">
import { useGenerateTheme } from "./hooks/useGenerateTheme";
useGenerateTheme();
console.log(import.meta.env.VITE_BASE_URL);
</script>

<template>
  <!-- <router-view></router-view> -->
  <HelloWorld msg="hhh"></HelloWorld>
  <div btn>2323</div>
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
