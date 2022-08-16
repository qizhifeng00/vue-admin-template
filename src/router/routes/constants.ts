export const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/view/login/login.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/home',
    name: 'personal',
    meta: {
      title: '个人中心',
      hidden: true,
    },
    children: [
      {
        path: 'info',
        component: () => import('@/view/home/home.vue'),
        meta: {
          title: '个人中心',
        },
      },
    ],
  },
]
