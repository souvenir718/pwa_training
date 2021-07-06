import Vue from "vue";
import VueRouter from "vue-router";

import main_page from "./main_page.vue";
import sub_page from "./sub_page.vue";

Vue.use(VueRouter);

export default new VueRouter({
    base: process.env.BASE_URL,
    mode: "history",
    routes: [
        { path: "/main", component: main_page },
        { path: "/sub", component: sub_page },
    ],
});
