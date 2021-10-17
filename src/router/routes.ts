import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Profile.vue') }],
  },
  {
    path: '/calendar',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Calendar.vue') }],
  },
  {
    path: '/statistic',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Statistic.vue') }],
  },
  {
    path: '/goals',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Goals.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
