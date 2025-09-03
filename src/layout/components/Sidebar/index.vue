<template>
  <el-menu
    class="sidebar-menu"
    border-none
    default-active="/"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :collapse="false"
  >
    <SidebarItem
      v-for="route in routes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    ></SidebarItem>
  </el-menu>
</template>

<script setup lang="ts">
import variables from "@/style/variables.module.scss";
import { routes } from "@/router";
console.log(variables);
</script>

<style lang="scss" scoped></style>
