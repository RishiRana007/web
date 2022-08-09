// eslint-disable-next-line no-unused-vars
import Home from  "./components/Home.vue";
// eslint-disable-next-line no-unused-vars
import SignUp from "./components/SignUp.vue";
import {createRouter,createWebHistory} from "vue-router";
import Login from "./components/Login";

    const routes=[
        {
            name: "Home",
            component: Home,
            path: "/"

        },
        {
            name: "SignUp",
            component: SignUp,
            path: "/signup"

        },

        {
            name: "Login",
            component: Login,
            path: "/login"

        }
    ];
            const router =createRouter({
                history: createWebHistory(),
                routes,
            });
            export default router;

