import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [

  {
    path: '/',
    name: 'Contact List',
    component: () => import(/* webpackChunkName: "Contact" */ '../components/contact/Contact.vue'),
  },
  {
    path: '/contact',
    name: 'Contact Info',
    component: () => import(/* webpackChunkName: "Contact List" */ '../components/contactList/ContactList.vue'),
  },
  {
    path: '/favourite',
    name: 'Favourite Contact',
    component: () => import(/* webpackChunkName: "Favourite Contact" */ '../components/favourite/Favourite.vue'),
  },
];

const router = new VueRouter({
  routes, mode: 'history',

});

export default router;
