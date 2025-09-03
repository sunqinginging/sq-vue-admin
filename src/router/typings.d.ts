import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    icon?: string; // 图标
    title?: string; // 标题
    hide?: boolean; // 是否展示在菜单栏
  }
}
