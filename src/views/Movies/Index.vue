<template>
  <div class="movies-index">
    <br />
    <h1>{{ message }}</h1>
    Search by Title: <input type="text" v-model="filter" /> <br />
    Search by Director: <input type="text" v-model="filter" />
    <div class="container">
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          class="col"
          v-for="movie in filterBy(movies, filter, 'title', 'director')"
          v-bind:key="movie.id"
        >
          <div class="card">
            <img
              :src="movie.image_url"
              class="card-img-top"
              :alt="movie.title"
            />
            <div class="card-body">
              <h5 class="card-title">{{ movie.title }}</h5>
              <p class="card-text">
                {{ movie.plot }} <br />
                Year: {{ movie.year }} <br />
                Director: {{ movie.director }}
              </p>
              <router-link :to="`/movies/${movie.id}`">
                <button type="button" class="btn btn-outline-primary btn-sm">
                  More Detail
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Here is a list of movies!",
      movies: [],
      filter: "",
    };
  },
  created: function () {
    this.movieIndex();
  },
  methods: {
    movieIndex: function () {
      axios.get("/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
  },
};
</script>
