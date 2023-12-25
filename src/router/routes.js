const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/contact", component: () => import("pages/ContactPage.vue") },
      { path: "/service", component: () => import("pages/ServicePage.vue") },
      { path: "/about", component: () => import("pages/AboutPage.vue") },
      { path: "/test", component: () => import("pages/testPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
