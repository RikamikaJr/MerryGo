import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import LoginUser from '../views/LoginUser.vue'
import LoginPartner from '../views/LoginPartner.vue'
import About from '../views/About.vue'
import Partner from '../views/Partner.vue'

//Partner
import PartnerProfile from '../views/partner/Profile.vue'

//Checklist

import Checklist from '../views/Checklist.vue'

//Wedding Market

import WedVenue from '../views/wedmarket/Venue.vue'

//Product

import ProdVenue from '../views/product/Venue.vue'

Vue.use(Router)
let router = new Router({
  mode :'history',
  hash: false,
  

  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/loginuser',
      name: 'loginuser',
      component: LoginUser
    },
    {
      path: '/LoginPartner',
      name: 'loginuser',
      component: LoginPartner
    },
    {
      path: '/Partner',
      name: 'partner',
      component: Partner
    },
    {
      path: '/Partner/Profile',
      name: 'partnerprofile',
      component: PartnerProfile
    },
    {
      path: '/Checklist',
      name: 'checklist',
      component: Checklist
    },
    {
      path: '/Market/WedVenue',
      name: 'wedvenue',
      component: WedVenue
    },
    {
      path: '/Product/WedVenue',
      name: 'prodvenue',
      component: ProdVenue
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]


})



export default router;