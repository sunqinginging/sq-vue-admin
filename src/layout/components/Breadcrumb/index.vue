<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in list"
      :key="item.path"
      @click="handleClick(item)"
      style="cursor: pointer"
    >
      <span class="no-redirect" v-if="index == list.length - 1">{{
        item.meta?.title
      }}</span>
      <span class="redirect" v-else>{{ item.meta?.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import type { RouteLocationMatched } from "vue-router";
import { compile } from "path-to-regexp";
import { useSettingStore } from "@/store/setting";

const settingStore = useSettingStore();
const theme = computed(() => settingStore.setting.theme);

const route = useRoute();
const router = useRouter();
const list = ref<Partial<RouteLocationMatched>[]>([]);

const generateBreadcrumb = () => {
  let matched = route.matched;
  matched = matched.filter((item) => {
    return item.meta && item.meta.title;
  });
  list.value = matched;
};

watch(() => route.path, generateBreadcrumb, {
  immediate: true,
});

const compilePath = (path: string) => {
  const params = route.params;
  const targetPath = compile(path)(params);
  return targetPath;
};

const handleClick = (item: Partial<RouteLocationMatched>) => {
  const { path, redirect } = item;
  if (redirect) {
    router.push(redirect as string);
  }
  router.push(compilePath(path!));
};
</script>

<style lang="scss" scoped>
:deep(.redirect) {
  cursor: pointer;
  @apply color-[var(--text-regular)];

  &:hover {
    color: v-bind(theme);
  }
}

:deep(.no-redirect) {
  @apply color-[var(--text-secondary)];
}
</style>
