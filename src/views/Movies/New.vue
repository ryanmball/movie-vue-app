<template>
  <div class="movies-new">
    <h3>Create a new movie:</h3>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <input
      type="text"
      v-model="newMovieParams.title"
      placeholder="title"
    /><br />
    <input type="text" v-model="newMovieParams.plot" placeholder="plot" /><br />
    <input type="text" v-model="newMovieParams.year" placeholder="year" /><br />
    <input
      type="text"
      v-model="newMovieParams.director"
      placeholder="director"
    /><br />
    <input type="submit" v-on:click="movieCreate()" />
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newMovieParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    movieCreate: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
      this.newMovieParams = {};
    },
  },
};
</script>
