// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

axios.defaults.withCredentials = true
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
});
router.beforeEach((to, from, next) => {
    console.log('to', to, 'from', from, 'next', next);

    if (to.meta.requiresAuth) {
        const api = `${process.env.APIPATH}/api/user/check`;
        //this.$http是位於VUE元件下才可使用
        //這裡改用axios
        axios.post(api).then((response) => {
            console.log(response.data)
            if (response.data.success) {
                next();
            } else {
                next({
                    path: '/login',
                });
            }
        });
        //console.log('這裡需要驗證')
    } else { next(); }
});