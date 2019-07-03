
import Vue from 'vue'
import App from '../view/App.vue'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../lib/mui/dist/css/mui.min.css'
import '../css/index.less'
import {Header, Swipe, SwipeItem } from 'mint-ui'
import '../../lib/mui/examples/hello-mui/css/icons-extra.css'


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header);
Vue.use(VueRouter)
Vue.use(VueResource)
var app = new Vue({
    el:'#app',
    data(){
        return {
            msg: 'hellow vue'
        }
    },
    render:c=> c(App),
    router,
   
})