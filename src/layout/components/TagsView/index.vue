<template>
  <div class="tags-view-container">
    <div
      class="tags-view__item"
      v-for="(item, index) in tagsViewList"
      :key="item.path"
      :class="{
        active: isActive(item),
      }"
      @click="handleClick(item)"
      @contextmenu.prevent="(e) => handleContextmenu(e, index)"
    >
      <span class="tags-view__item--current" v-if="isActive(item)"></span>
      <span>{{ item.meta?.title }}</span>
      <svg-icon
        icon-name="ant-design:close-outlined"
        v-if="!isActive(item)"
        @click.stop="removeTagsView(TagOperateType.SELF, index)"
      ></svg-icon>
    </div>
  </div>
  <context-menu
    v-show="isContextMenuShow"
    :index="selectIndex"
    :style="positionStyle"
  ></context-menu>
</template>

<script setup lang="ts">
import { useSettingStore } from "@/store/setting";
import { useSystemsStore, type ITagView } from "@/store/sysmtem";
import { TagOperateType } from "@/store/sysmtem";
const systemStore = useSystemsStore();
const { tagsViewList, removeTagsView } = systemStore;

const settingStore = useSettingStore();
const themeColor = computed(() => settingStore.setting.theme);
const route = useRoute();

const isActive = (item: ITagView) => {
  return item.path == route.path;
};

const router = useRouter();

const handleClick = (item: ITagView) => {
  const { fullPath } = item;
  router.push({
    path: fullPath,
  });
};

const isContextMenuShow = ref(false);
const selectIndex = ref(-1);
const positionStyle = ref<Record<string, string | number>>({
  top: 0,
  left: 0,
});

const handleContextmenu = (e: MouseEvent, index: number) => {
  console.log(index);
  const { x, y } = e;
  positionStyle.value = {
    top: y + "px",
    left: x + "px",
  };
  selectIndex.value = index;
  isContextMenuShow.value = true;
};

const hideContextmenu = () => {
  isContextMenuShow.value = false;
};

watch(isContextMenuShow, (newValue) => {
  if (newValue) {
    document.body.addEventListener("click", hideContextmenu);
  } else {
    document.body.removeEventListener("click", hideContextmenu);
  }
});
</script>

<style lang="scss" scoped>
.tags-view-container {
  --at-apply: w-100% h-100% flex flex-wrap flex-items-center;

  .tags-view__item {
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-color: v-bind(themeColor);
    font-size: 14px;
    padding: 0 8px;
    margin-right: 8px;
    border-radius: 4px;
    box-sizing: border-box;

    &.active {
      background-color: v-bind(themeColor);
    }
  }

  .tags-view__item--current {
    --at-apply: bg-black "dark:bg-white";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 4px;
  }
}
</style>
