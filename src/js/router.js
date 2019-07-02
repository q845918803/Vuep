import account from '../view/Account.vue';
import goodlist from '../view/goodlist.vue';
import account_1 from '../view/account/account_1.vue';
import account_2 from '../view/account/account_2.vue';
import Default from '../view/default.vue';
import message from '../view/message.vue';
import VueRouter from 'vue-router';

var router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'account',
            
        },
        {
            path:'/account',
            component: account,
            children:[
                {path:'/',redirect:'account_1'},
                {path:'account_1',component:account_1},
                {path:'account_2',component:account_2}
            ]
        },
        {path:'/goodlist', component: goodlist},
        {path:'/default', component: Default},
        {path:'/message', component: message}
    ]
}) 
 
export default router;
    

