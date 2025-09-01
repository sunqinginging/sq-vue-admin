import cssFunc from "css-color-function";

// 生成color 设置color
const formula: { [prop: string]: string } = {
  "primary-light-1": "color(red tint(10%))",
  "primary-light-3": "color(red tint(30%))",
  "primary-light-5": "color(red tint(50%))",
  "primary-light-7": "color(red tint(70%))",
  "primary-light-8": "color(red tint(80%))",
  "primary-light-9": "color(red tint(90%))",
  "primary-dark-2": "color(red shade(30%))",
};

const generateColors = (primary: string) => {
  const colors: Record<string, string> = {};
  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/red/g, primary);
    colors[key] = cssFunc.convert(value);
  });

  return colors;
};

const setColors = (colors: Record<string, string>) => {
  const el = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    el.style.setProperty(`--el-color-${key}`, value);
  });
};

export { generateColors, setColors };
