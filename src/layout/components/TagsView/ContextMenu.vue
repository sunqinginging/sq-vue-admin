<template>
  <div class="contextmenu-container">
    <div class="contextmenu-item" @click="handleRefresh">刷新</div>
    <div
      class="contextmenu-item"
      @click="removeTagsView(TagOperateType.RIGHT, index)"
    >
      关闭右侧
    </div>
    <div
      class="contextmenu-item"
      @click="removeTagsView(TagOperateType.REST, index)"
    >
      关闭其他
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemsStore } from "@/store/sysmtem";
import { TagOperateType } from "../../../store/sysmtem";

const { index } = defineProps<{
  index: number;
}>();
console.log(index);
const router = useRouter();
const handleRefresh = () => {
  router.go(0);
};
const systemStore = useSystemsStore();
const { removeTagsView } = systemStore;
</script>

<style lang="scss" scoped>
.contextmenu-container {
  position: fixed;
  width: 120px;
  border: 1px solid;
  z-index: 1000;
  border-radius: 6px;
  @apply bg-white border-black 'dark:bg-black border-white';
}

.contextmenu-item {
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
