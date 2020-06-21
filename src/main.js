import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate';
import Vuetify, { VLayout } from 'vuetify/lib';
import VueApexCharts from 'vue-apexcharts'


//Import Layout
import BasicHome from "@/layout/BasicHome";
import AltBasicHome from "@/layout/AltBasicHome";
import Login from "@/layout/Login";

//Validation Form
Vue.use(Vuelidate)

//Layout Connection
Vue.component('apexchart', VueApexCharts)
Vue.use(Vuetify, {components: { VLayout }});
Vue.component('basichome-layout', BasicHome);
Vue.component('altbasichome-layout', AltBasicHome);
Vue.component('Login-layout', Login);
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
