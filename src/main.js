import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate';
import Vuetify, { VLayout } from 'vuetify/lib';


//Import Layout
import BasicHome from "@/layout/BasicHome";

//Validation Form
Vue.use(Vuelidate)

//Layout Connection
Vue.use(Vuetify, {components: { VLayout }});
Vue.component('basichome-layout', BasicHome);
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
