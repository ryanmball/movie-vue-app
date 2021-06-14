<template>
  <div class="movies-index">
    <h1>{{ message }}</h1>
    <!-- <p>{{ movies }}</p> -->
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>{{ movie.title }}</h3>
      <p>
        {{ movie.plot }}<br />
        Year created: {{ movie.year }}<br />
        Director: {{ movie.director }}<br />
      </p>
      <router-link :to="`/movies/${movie.id}`">
        <button>More Detail</button>
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Here is a list of movies!",
      movies: [],
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
