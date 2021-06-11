import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Users/Signup.vue";
import Login from "../views/Users/Login.vue";
import Logout from "../views/Users/Logout.vue";
import MoviesIndex from "../views/Movies/Index.vue";
import MoviesNew from "../views/Movies/New.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/movies",
    name: "movies-index",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "movies-new",
    component: MoviesNew,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
