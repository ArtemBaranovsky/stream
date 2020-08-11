import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        // name: 'home',
        component: require("./views/Home").default
    },
    {
        path: '/about',
        // name: 'about',
        component: require("./views/About").default
    },
    {
        path: '/contact',
        // name: 'contact',
        component: require("./views/Contact").default
    }
];

export default new VueRouter({
    routes,
    lincActiveClass: 'is-active'
})
