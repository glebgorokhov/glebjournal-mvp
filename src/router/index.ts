import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "User",
    component: () => import("@/views/User/User.vue"),
    children: [
      {
        path: "/user/:id",
        name: "Contents",
        component: () => import("@/views/User/views/UserContents.vue"),
      },
      {
        path: "/user/:id/edit",
        name: "Edit User",
        component: () => import("@/views/User/views/UserEdit.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
