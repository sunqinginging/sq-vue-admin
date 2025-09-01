<template>
  <el-menu
    router
    default-active="/"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
  >
    <SidebarItem
      v-for="route in routes"
      :key="route.path"
      :item="route"
    ></SidebarItem>
  </el-menu>
</template>

<script setup lang="ts">
import variables from "@/style/variables.module.scss";
import { routes } from "@/router";
console.log(variables);
</script>

<style lang="scss" scoped></style>
