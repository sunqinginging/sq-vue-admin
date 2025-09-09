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
    meta: {
      title: "指南",
    },
    children: [
      {
        path: "user",
        name: "user",
        component: () => import("@/views/guide/user.vue"),
        meta: {
          title: "用户手册",
        },
        children: [
          {
            path: "/guide/user/:id",
            component: () => import("@/views/guide/detail.vue"),
            meta: {
              title: "用户详情",
            },
            children: [
              {
                path: "detail",
                component: () => import("@/views/guide/test.vue"),
                meta: {
                  title: "用户具体详情",
                },
              },
            ],
          },
        ],
      },
      {
        path: "/guide/install",
        name: "install",
        component: () => import("@/views/guide/install.vue"),
        meta: {
          title: "安装方法",
        },
      },
      {
        path: "https://router.vuejs.org/zh/guide/advanced/extending-router-link.html#%E6%89%A9%E5%B1%95-RouterLink",
        name: "",
        component: () => import("@/views/guide/user.vue"),
        meta: {
          title: "外部链接",
        },
      },
    ],
  },
];

export const routes = [...constantRoutes, ...asyncRoutes];

export default createRouter({
  history: createWebHistory(),
  routes,
});
