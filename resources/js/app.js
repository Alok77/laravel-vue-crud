import Vue from 'vue';
import Home from './components/Home.vue';
import App from './App.vue';
import View from './components/View.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Edit from './components/Edit.vue'

//Toaster for message
import Toaster from 'v-toaster'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 1000});

//sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

//import vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//import vue-axios
import VueAxios from 'vue-axios';

import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.use(Vuetify);

//top-progress bar
import vueTopprogress from 'vue-top-progress'
Vue.use(vueTopprogress);

const routes = [

    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/view',
        name: 'view',
        component: View,
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    root:  '/'
});

// Vue.router = router;
// App.router = Vue.router;

// initialize vue instance

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});