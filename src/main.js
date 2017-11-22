import Vue from 'vue'
import App from './App'
import { Swipe, SwipeItem } from 'mint-ui';
import router from './router'


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
