<template>
  <sidebar-item-link v-if="isSingleRoute" :to="resolvePath(item.path)">
    <el-menu-item :index="resolvePath(item.path)">
      <span>图标</span>
      <span>{{ item.meta?.title }}</span>
    </el-menu-item>
  </sidebar-item-link>

  <el-sub-menu :index="item.path" v-else>
    <template #title>{{ item.meta?.title }}</template>
    <sidebar-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :base-path="child.path"
    ></sidebar-item>
  </el-sub-menu>
</template>

<script setup lang="ts">
import { isExternal } from "@/utils/validate";
import path from "path-browserify";
import type { RouteRecordRaw } from "vue-router";

const { item, basePath } = defineProps<{
  item: RouteRecordRaw;
  basePath: string;
}>();

const isSingleRoute = computed(
  () => !item.children || item.children?.length == 0,
);

// 子集的路由有可能是需要拼接处理的
const resolvePath = (childPath: string) => {
  if (isExternal(childPath)) {
    return childPath;
  }
  return path.resolve(basePath, childPath);
};

console.log(path.resolve("/guide", "user"));
</script>

<style lang="scss" scoped></style>
