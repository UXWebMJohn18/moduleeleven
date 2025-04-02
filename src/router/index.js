import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import ContactPage from "../views/ContactPage.vue";
import FactsPage from "../views/FactsPage.vue";


const routes = [
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: '/facts',
    name: 'facts',
    component: FactsPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
