import { defineStore } from "pinia";

export const useSettingStore = defineStore(
  "setting",
  () => {
    const setting = reactive({
      theme: "#409eff",
    });

    type ISetting = typeof setting;
    const changeSetting = <T extends keyof ISetting>({
      key,
      value,
    }: {
      key: T;
      value: ISetting[T];
    }) => {
      setting[key] = value;
    };

    return {
      setting,
      changeSetting,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ["setting.theme"],
    },
    debounce: {
      changeSetting: 300,
    },
  },
);
