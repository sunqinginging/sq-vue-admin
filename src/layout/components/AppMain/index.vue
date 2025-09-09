<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useSystemsStore } from "@/store/sysmtem";

const route = useRoute();
const systemStore = useSystemsStore();
const { addTagsView } = systemStore;
watch(
  route,
  (to) => {
    const { path, fullPath, params, query, meta, name } = to;
    addTagsView({
      path,
      fullPath,
      params,
      query,
      meta,
      name,
    });
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped></style>
