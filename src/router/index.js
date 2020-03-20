import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import LoginUser from '../views/LoginUser.vue'
import LoginPartner from '../views/LoginPartner.vue'
import About from '../views/About.vue'
import Partner from '../views/Partner.vue'

//Partner
import PartnerProfile from '../views/partner/Profile.vue'
import PartnerDashboard from '../views/dashboard/Partner.vue'

//User
import UserProfile from '../views/user/Profile.vue'
import UserDashboard from '../views/user/Dashboard.vue'
import UserProfileSetting from '../views/user/ProfileSetting.vue'
import UserSchedule from '../views/user/Schedule.vue'
import UserPolicies from '../views/user/Policies.vue'

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
      component: Home
    },
    {
      path: '/loginuser',
      name: 'loginuser',
      component: LoginUser
    },
    {
      path: '/LoginPartner',
      name: 'loginpartner',
      component: LoginPartner
    },
    {
      path: '/Partner',
      name: 'partner',
      component: Partner
    },
    {
      path: '/Dashboard/Partner',
      name: 'dashboardpartner',
      component: PartnerDashboard
    },
    {
      path: '/User/Dashboard',
      name: 'userdashboard',
      component: UserDashboard
    },
    {
      path: '/User/ProfileSetting',
      name: 'userprofilesetting',
      component: UserProfileSetting
    },
    {
      path: '/User/Schedule',
      name: 'userschedule',
      component: UserSchedule
    },
    {
      path: '/User/Policies',
      name: 'userpolicies',
      component: UserPolicies
    },
    {
      path: '/Partner/Profile',
      name: 'partnerprofile',
      component: PartnerProfile
    },
    {
      path: '/User/Profile',
      name: 'userprofile',
      component: UserProfile
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
  ],
  //scrollBehavior() {
  //  document.getElementById('app').scrollIntoView();
  //  }

});



export default router;