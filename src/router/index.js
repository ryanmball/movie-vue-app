import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Users/Signup.vue";
import Login from "../views/Users/Login.vue";
import Logout from "../views/Users/Logout.vue";
import MoviesIndex from "../views/Movies/Index.vue";
import MoviesNew from "../views/Movies/New.vue";
import MoviesShow from "../views/Movies/Show.vue";
import MoviesEdit from "../views/Movies/Edit.vue";
import ActorsIndex from "../views/Actors/Index.vue";
import ActorsNew from "../views/Actors/New.vue";
import ActorsShow from "../views/Actors/Show.vue";
import ActorsEdit from "../views/Actors/Edit.vue";

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
  {
    path: "/movies/:id",
    name: "movies-show",
    component: MoviesShow,
  },
  {
    path: "/movies/:id/edit",
    name: "movies-edit",
    component: MoviesEdit,
  },
  {
    path: "/actors",
    name: "actors-index",
    component: ActorsIndex,
  },
  {
    path: "/actors/new",
    name: "actors-new",
    component: ActorsNew,
  },
  {
    path: "/actors/:id",
    name: "actors-show",
    component: ActorsShow,
  },
  {
    path: "/actors/:id/edit",
    name: "actors-edit",
    component: ActorsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
