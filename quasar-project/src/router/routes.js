
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      {
        path: '/form',
        component: () => import('pages/form.vue')
      },
      {
        path: '/login',
        component: () => import('pages/login.vue')
      },
        {
          path: '/clientkyc',
          component: () => import('pages/clientkyc.vue')
        },
        {
          path: '/home',
          component: () => import('pages/home.vue')
        },
      
    
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/auth/LoginPage.vue') },
      { path: 'signup', component: () => import('pages/auth/SignupPage.vue') },
    ]
  },
  {
    path: '/loan',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'apply', component: () => import('pages/loan/ApplyPage.vue') },
      { path: 'basic-detail', component: () => import('pages/loan/BasicDetailPage.vue') },
      { path: 'kyc', component: () => import('pages/loan/KycPage.vue') },
      { path: 'bank-verification', component: () => import('pages/loan/BankVerificationPage.vue') },
      { path: 'emi-calulation', component: () => import('pages/loan/EmiCalculation.vue') },
      { path: 'finish', component: () => import('pages/loan/FinishPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
