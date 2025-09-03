<script setup lang="ts">
import { useGenerateTheme } from "./hooks/useGenerateTheme";
useGenerateTheme();
console.log(import.meta.env.VITE_BASE_URL);
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
