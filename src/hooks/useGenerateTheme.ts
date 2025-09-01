import { useSettingStore } from "@/store/setting";
import { generateColors, setColors } from "@/utils/color";

export const useGenerateTheme = () => {
  const store = useSettingStore();
  const theme = computed(() => store.setting.theme);

  watchEffect(() => {
    const colors = {
      primary: theme.value,
      ...generateColors(theme.value),
    };
    setColors(colors);
  });
};
