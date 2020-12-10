import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/firestore'

require('@/assets/main.scss')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2UeDDeRjFFnYy4UDZvyUcCWjDMQMBrxQ',
  authDomain: 'roadmapfree.firebaseapp.com',
  databaseURL: 'https://roadmapfree.firebaseio.com',
  projectId: 'roadmapfree',
  storageBucket: 'roadmapfree.appspot.com',
  messagingSenderId: '601072791966',
  appId: '1:601072791966:web:b18cb00ff61e0e5640e68f',
  measurementId: 'G-E10WCJVW2H'
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
