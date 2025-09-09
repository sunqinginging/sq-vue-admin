<script setup lang="ts">
// 将服务类型的组件 放到实例上调用
// import { ElMessage } from "element-plus";
import { useSettingStore } from "@/store/setting";
import { useDark, useToggle } from "@vueuse/core";
import { testRequest } from "@/apis/test";
import { useAsync } from "@/hooks/useAsync";

const isDark = useDark();
const handleChangeDrk = useToggle(isDark);
defineProps<{ msg: string }>();

const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

const handleDarkModeChange = (event: MouseEvent) => {
  console.log(event);
  handleTransition(event);
  // handleChangeDrk();
};

const handleTransition = async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    handleChangeDrk();
    return;
  }
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ];

  // 创建动画对象 ready指的是等待伪元素被创建
  await document.startViewTransition(async () => {
    // 回调函数
    handleChangeDrk();
    await nextTick();
  }).ready;
  // 使新视图 动画化
  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    },
  );
};

// const { proxy } = getCurrentInstance();

const settingStore = useSettingStore();
const theme = ref(settingStore.setting.theme);

watch(theme, (newValue) => {
  if (newValue !== settingStore.setting.theme) {
    settingStore.changeSetting({
      key: "theme",
      value: newValue,
    });
  }
});

const { loading, run } = useAsync<any>(
  () =>
    testRequest({
      pageIndex: 1,
      pageSize: 20,
    }),
  {},
  true,
);

onMounted(() => {
  // testRequest({
  //   pageIndex: 1,
  //   pageSize: 20,
  // }).then((data) => {
  //   console.log(data);
  // });
});
</script>

<template>
  <div @click="handleDarkModeChange">{{ isDark ? "dark" : "light" }}</div>
  <el-color-picker v-model="theme" />
  <h1 style="background-color: var(--el-color-primary-dark-2)">{{ msg }}</h1>
  <div class="test-box" bg-black dark:bg-white>
    哈哈哈 我测试一下unocss怎么玩呢
  </div>
  <el-button type="info" :loading="loading" @click="run">点击我请求</el-button>
</template>

<style lang="scss">
.test-box {
  --at-apply: w-[var(--sidebar-width)] inline-block;
}

.read-the-docs {
  color: #888;
}
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
