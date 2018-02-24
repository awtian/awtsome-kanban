import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueFire from 'vuefire'
import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyAqwaUrW-NbCLY1_WiYvR-_fKHpZvjPJ04",
  authDomain: "hacktiv8-195202.firebaseapp.com",
  databaseURL: "https://awtkanban.firebaseio.com",
  projectId: "hacktiv8-195202",
  storageBucket: "hacktiv8-195202.appspot.com",
  messagingSenderId: "95002214418"
};
firebase.initializeApp(config);

Vue.prototype.$db = firebase.database()
Vue.use(VueFire)
Vue.use(Buefy, {
  defaultIconPack: 'fas'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
