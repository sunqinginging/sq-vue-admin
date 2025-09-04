<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Sidebar></Sidebar>
    </div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">
          <Breadcrumb></Breadcrumb>
        </div>
        <div class="tags-container">
          <TagsView></TagsView>
        </div>
      </div>
      <div class="app-main">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>
.app-wrapper {
  --at-apply: flex w-full h-full overflow-hidden;

  .sidebar-container {
    --at-apply: bg-[var(--menu-bg)];
    :deep(.sidebar-menu:not(.el-menu--collapse)) {
      --at-apply: w-[var(--sidebar-width)];
    }
  }

  .main-container {
    --at-apply: flex-1 flex flex-col;
  }

  .header {
    --at-apply: h-[84px];
    .navbar {
      --at-apply: h-[var(--narbar-height)];
    }

    .tags-container {
      --at-apply: h-[var(--tagsview-height)];
    }
  }

  .app-main {
    --at-apply: flex-1 relative overflow-hidden;
    min-height: calc(100% - 84px);
  }
}
/* https://cn.vuejs.org/guide/built-ins/transition.html#transition-modes */
/* 过渡的时候position: absolute 以避免二者同时存在时出现的布局问题 */
.fade-enter-active,
.fade-leave-active {
  --at-apply: transition-all duration-500 pos-absolute;
}

.fade-enter-from {
  --at-apply: translate-x-[50px] opacity-0;
}

.fade-leave-to {
  --at-apply: translate-x-[-50px] opacity-0;
}
</style>
