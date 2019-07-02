import account from '../view/Account.vue';
import goodlist from '../view/goodlist.vue';
import Default from '../view/default.vue';
import vip from '../view/vip.vue';
import VueRouter from 'vue-router';

var router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'default',
            
        },
        {
            path:'/account',
            component: account,
        },
        {path:'/goodlist', component: goodlist},
        {path:'/default', component: Default},
        {path:'/vip', component: vip}
    ],
    linkActiveClass: 'mui-active'
}) 
 
export default router;
    

