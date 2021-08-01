import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Admin',
          path: '',
          component: () => import('@/views/dashboard/Admin'),
        },
        
        // Pages
        {
          name: 'Customer',
          path: '/Customer',
          component: () => import('@/views/customer/Customer'),
        },
        {
          name: 'Complaints',
          path: '/Complaints/:id',
          component: () => import('@/views/complaints/Complaints'),
        },
        {
          name: 'Warning',
          path: '/Warning',
          component: () => import('@/views/manager/Warning'),
        },
        
        {
          name: 'UpdateCustomer',
          path: '/UpdateCustomer',
          component: () => import('@/views/customer/UpdateCustomer'),
        },
        {
          name: 'Employee',
          path: '/Employee',
          component: () => import('@/views/employee/Employee'),
        },
        {
          name: 'AddEmployee',
          path: '/AddEmployee',
          component: () => import('@/views/employee/AddEmployee'),
        },
        {
          name: 'UpdateEmployee',
          path: '/UpdateEmployee',
          component: () => import('@/views/employee/UpdateEmployee'),
        },
        {
          name: 'Assistance',
          path: '/Assistance',
          component: () => import('@/views/assistance/Assistance'),
        },
        {
          name: 'Manager',
          path: '/Manager',
          component: () => import('@/views/manager/Manager'),
        },
        {
          name: 'ComplaintPage',
          path: '/ComplaintPage',
          component: () => import('@/views/customer/ComplaintPage'),
        },
        {
          name: 'customer_service',
          path: 'Customer_service',
          component: () => import('@/views/customer_service/Customer_service'),
        },
        {
          name: 'Operation_maintenance',
          path: '/Operation_maintenance',
          component: () => import('@/views/operation_maintenance/Operation_maintenance'),
        },
        {
          name: 'AddCustomer',
          path: '/AddCustomer',
          component: () => import('@/views/customer/AddCustomer'),
        },
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Login',
          path: '/Login',
          component: () => import('@/views/login/Login'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        {
          name: 'editCustomer',
          path: 'edit-customer/:id',
          component: () => import('@/views/customer/EditCustomer'),
        },
        
      ],
    },
    
  ],
})
