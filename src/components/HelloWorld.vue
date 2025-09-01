<script setup lang="ts">
// 将服务类型的组件 放到实例上调用
// import { ElMessage } from "element-plus";
import { useSettingStore } from "@/store/setting";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
console.log(isDark);
const handleChangeDrk = useToggle(isDark);
defineProps<{ msg: string }>();

// const { proxy } = getCurrentInstance();
import audioUrl from "../assets/2.mp3";
const count = ref(0);

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

onMounted(() => {
  testRef.value?.click();
  setTimeout(() => {
    handleWarn();
  }, 3000);
});

const testRef = ref<null | HTMLElement>(null);

const handleWarn = () => {
  isDialogShow.value = true;
  nextTick(() => {
    audioRef.value?.play().then(() => {
      ismuted.value = false;
    });
  });
};

const ismuted = ref(true);
const isDialogShow = ref(false);
const audioRef = ref<HTMLAudioElement | null>();
</script>

<template>
  <div ref="testRef">藏起来</div>
  <h1>10秒后警告 弹窗出现</h1>
  <el-dialog v-model="isDialogShow">
    <audio
      :src="audioUrl"
      ref="audioRef"
      controls
      type="audio/mpeg"
      :muted="ismuted"
    ></audio>
  </el-dialog>

  <div @click="handleChangeDrk()">{{ isDark ? "dark" : "light" }}</div>
  <el-color-picker v-model="theme" />
  <h1 style="background-color: var(--el-color-primary-dark-2)">{{ msg }}</h1>
  <el-button @click="handleWarn">嘻嘻移动上去有惊喜哦</el-button>
  <div class="test-box">哈哈哈 我测试一下unocss怎么玩呢</div>
  <div class="card text-blue" bg-red>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="scss">
.test-box {
  --at-apply: w-[var(--sidebar-width)] inline-block;
}

.read-the-docs {
  color: #888;
}
</style>
