import Vue from 'vue';
import VueRouter from 'vue-router';
//官方的元件

//@ = src的路徑
// import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child1 from '@/components/pages/child1';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';
import Login from '@/components/pages/Login';

import Dashboard from '@/components/Dashboard';
import Products from '@/components/pages/Products';
//自訂分頁元件
Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            //避免進入不存在的頁面
            path: '*',
            redirect: 'login', //建立導向
        },
        // {
        //     name: 'HelloWorld', //元件呈現的名稱
        //     path: '/', //對應的虛擬路徑
        //     component: Home, //對應的元件
        //     meta: { requiresAuth: true }
        // },
        {
            // name: '分頁', //元件呈現的名稱
            path: '/page', //對應的虛擬路徑
            // component: Page, //對應的元件
            components: {
                default: Page,
                menu: Menu
            },
            children: [{
                name: '卡片 1',
                path: '',
                component: child1
            }, {
                name: '卡片 2',
                path: 'child2',
                component: child2
            }, {
                name: '卡片 3',
                path: 'child3',
                // path: 'child3/:id',
                component: child3
            }]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            name: 'Dashboard', //元件呈現的名稱
            path: '/admin', //對應的虛擬路徑
            component: Dashboard, //對應的元件

            children: [{
                path: 'products',
                name: 'Products',
                component: Products,
                meta: { requiresAuth: true },
            }, ]
        },
    ],
});