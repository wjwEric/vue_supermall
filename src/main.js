import Vue from 'vue'
import App from './App.vue'
import mintUi from "mint-ui";

import "../node_modules/mint-ui/lib/style.css";
Vue.use(mintUi);
import router from "./router/index.js"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
