import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/pages/Index.vue"),
      meta: {
        public: true,
        redirect_if_authenticated: true,
      },
    },
  ],
});
