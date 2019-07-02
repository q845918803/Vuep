
import Vue from 'vue';
import App from '../view/App.vue'
import VueRouter from 'vue-router'
import router from './router'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../lib/mui/dist/css/mui.min.css'
import '../css/index.less'
import {Header} from 'mint-ui'
Vue.use(VueRouter)
Vue.component(Header.name,Header);
var app = new Vue({
    el:'#app',
    data(){
        return {
            msg: 'hellow vue'
        }
    },
    render:c=> c(App),
    router
})