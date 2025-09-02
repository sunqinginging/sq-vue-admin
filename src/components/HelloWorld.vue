<script setup lang="ts">
// 将服务类型的组件 放到实例上调用
// import { ElMessage } from "element-plus";
import { useSettingStore } from "@/store/setting";
import { useDark, useToggle } from "@vueuse/core";
import { testRequest } from "@/apis/test";
import { useAsync } from "@/hooks/useAsync";

const isDark = useDark();
console.log(isDark);
const handleChangeDrk = useToggle(isDark);
defineProps<{ msg: string }>();

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
  <div @click="handleChangeDrk()">{{ isDark ? "dark" : "light" }}</div>
  <el-color-picker v-model="theme" />
  <h1 style="background-color: var(--el-color-primary-dark-2)">{{ msg }}</h1>
  <div class="test-box">哈哈哈 我测试一下unocss怎么玩呢</div>
  <el-button type="info" :loading="loading" @click="run">点击我请求</el-button>
</template>

<style lang="scss">
.test-box {
  --at-apply: w-[var(--sidebar-width)] inline-block;
}

.read-the-docs {
  color: #888;
}
</style>
