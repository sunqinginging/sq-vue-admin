<template>
  <el-menu
    class="sidebar-menu border-none"
    :default-active="route.path"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="setting.theme"
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
import { asyncRoutes as routes } from "@/router";
import { useSettingStore } from "@/store/setting";
import { storeToRefs } from "pinia";

const settingStore = useSettingStore();
const { setting } = storeToRefs(settingStore);

const route = useRoute();
</script>

<style lang="scss" scoped></style>
