import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Layout from "@/layout/index.vue";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          icon: "",
          title: "工作台",
        },
      },
    ],
  },
];

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/guide",
    component: Layout,
    redirect: "/guide/user",
    children: [
      {
        path: "user",
        name: "user",
        component: () => import("@/views/guide/user.vue"),
      },
    ],
  },
];

export const routes = [...constantRoutes];

export default createRouter({
  history: createWebHistory(),
  routes,
});
