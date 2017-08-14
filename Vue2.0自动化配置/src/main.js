import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import route from './router';
import 'animate.css';
import leiButton from './components/Button';
import VueResource from 'vue-resource';
import axios from 'axios';

import Mint from 'mint-ui';
Vue.use(Mint);


//编程全局公用的组件
Vue.use(VueRouter);
Vue.use(leiButton);
// Vue.use(VueResource);
Vue.prototype.$http=axios;

//创建实例，并且引入配置
const router = new VueRouter(route);


const app = new Vue({
    router,//把router放入实例
    el:"#app",
    //扩展运算符目的是能够顺利引入Vue.js
    render:h=>h(App)
});