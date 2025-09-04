import { defineStore } from "pinia";
import type { RouteLocationNormalizedLoaded } from "vue-router";

export type ITagView = Partial<RouteLocationNormalizedLoaded>;

export enum TagOperateType {
  SELF = 1, // 删除自己
  RIGHT = 2, // 关闭右侧
  REST = 3, // 关闭其他
}

export const useSystemsStore = defineStore(
  "system",
  () => {
    const tagsViewList = ref<ITagView[]>([]);

    const addTagsView = (item: ITagView) => {
      const idx = tagsViewList.value.findIndex((i) => i.path == item.path);
      if (idx == -1) {
        tagsViewList.value.push(item);
      }
    };
    const removeTagsView = (type: TagOperateType, index: number) => {
      switch (type) {
        case TagOperateType.SELF:
          tagsViewList.value.splice(index, 1);
          break;
        case TagOperateType.RIGHT:
          tagsViewList.value.splice(
            index + 1,
            tagsViewList.value.length - index - 1,
          );
          break;
        case TagOperateType.REST:
          tagsViewList.value.splice(0, index);
          tagsViewList.value.splice(
            index + 1,
            tagsViewList.value.length - index - 1,
          );
          break;
        default:
          break;
      }
    };

    return {
      tagsViewList,
      addTagsView,
      removeTagsView,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ["tagsViewList"],
    },
  },
);
