import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faListUl,
  faBoxOpen,
  faUserAlt,
  faCheckCircle,
  faTimesCircle,
  faCalendarPlus,
  faHourglassEnd,
  faUserCircle,
  faPlusCircle,
  faMinusCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos'
import 'aos/dist/aos.css';
import App from './App.vue'
import router from './router'

AOS.init();
library.add(faListUl, faBoxOpen, faUserAlt, faCheckCircle, faTimesCircle, faCalendarPlus, faHourglassEnd, faUserCircle, faPlusCircle, faMinusCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
