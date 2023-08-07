import { createRouter, createWebHistory } from "vue-router";

import Card from "@/pages/Card.vue";
import Link2 from "@/pages/Link2.vue";
import Link3 from "@/pages/Link3.vue";
import Product from "@/pages/Product.vue";

export const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Card", component: Card },
    { path: "/Link2", name: "Link2", component: Link2 },
    { path: "/Link3", name: "Link3", component: Link3 },
    { path: "/Product/:id", name: "ProductPage", component: Product },
  ],
});
