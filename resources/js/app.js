require("./bootstrap");
import "../sass/main.scss";
import { createApp } from "vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});

//import your scss here
import "../sass/main.scss";

import { createRouter, createWebHashHistory } from "vue-router";

import App from "./components/App.vue";

const Home = () => import("./components/Home.vue");
const Login = () => import("./components/Login.vue");
// const Customers = () => import("./components/Customers.vue");
// const Page404 = () => import("./components/404/404.vue");

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/:component?",
            name: "Home",
            component: Home,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
    ],
});

const app = createApp(App);

app.use(vuetify).use(router);

router.isReady().then(() => {
    app.mount("#app");
});
