import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/products', 
      name: 'products',
      component: () => import('../components/ProductTable.vue')},
      {
        path:'/AddProduct',
        name:'AddProduct',
        component: () => import('../components/AddingData.vue')
      },
      {
        path:'/vendors',
        name:'vendors',
        component: () => import('../components/Vendors.vue')
      },
      {
      path:'/roles',
      name:'roles',
      component: () => import('../components/Roles.vue')
    },
    {
      path:'/addroles',
      name:'addroles',
      component: () => import('../components/AddRoles.vue')
    },
    {
      path:'/users',
      name:'users',
      component: () => import('../components/Users.vue')
    }
    ,
    {
      path:'/addusers',
      name:'addusers',
      component: () => import('../components/AddUser.vue')
    }
    ,
    {
      path:'/addvendors',
      name:'addvendors',
      component: () => import('../components/AddVendors.vue')
    },
    {
      path:'/:id/editvendors',
      name:'editvendors',
      component: () => import('../components/EditVendors.vue')
    },
    {
      path:'/:id/edituser',
      name:'edituser',
      component: () => import('../components/EditUser.vue')
    },
    {
      path:'/:id/editrole',
      name:'editrole',
      component: () => import('../components/EditRoles.vue')
    },
    
    {
      path:'/contacts',
      name:'contacts',
      component: () => import('../components/Contacts.vue')
    },
    {
      path:'/addcontacts',
      name:'addcontacts',
      component: () => import('../components/AddContacts.vue')
    }
    ,
    {
      path:'/:id/editcontacts',
      name:'editcontacts',
      component: () => import('../components/EditContacts.vue')
    }
   
  ]
})

export default router
