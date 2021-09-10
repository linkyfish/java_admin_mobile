// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

import { XInput } from 'vux'
Vue.component('x-input', XInput)
import { XButton } from 'vux'
Vue.component('x-button', XButton)
import { XHeader } from 'vux'
Vue.component('x-header', XHeader)

import { Grid, GridItem } from 'vux'

Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)


import { XTable } from 'vux'

Vue.component('x-table', XTable)

import { Flexbox, FlexboxItem } from 'vux'

Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)

import { Card } from 'vux'

Vue.component('card', Card) 

import { Datetime } from 'vux'

Vue.component('datetime', Datetime)


import { Group } from 'vux'

Vue.component('group', Group)

import App from './App'
const Index = () => import('./components/Index')
const Login = () => import('./components/Login')
const Agency = () => import('./components/Agency')
const Exchange = () => import('./components/Exchange')
const Player = () => import('./components/Player')
Vue.use(VueRouter)

const routes = [
		{
		  path: '/index',
		  component: Index
		},
		{
		  path: '/login',
		  component: Login
		},
		{
		  path: '/f/agency',
		  component: Agency
		},
		{
		  path: '/f/exchange',
		  component: Exchange
		},
		{
		  path: '/f/player',
		  component: Exchange
		}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
