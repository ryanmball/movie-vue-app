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
    <small
      v-if="newMovieParams.plot.length > 0 && newMovieParams.plot.length < 101"
      >{{ 100 - newMovieParams.plot.length }} Characters Remaining <br
    /></small>
    <small class="text-danger" v-if="newMovieParams.plot.length > 100"
      >Limit Exceeded <br
    /></small>
    <input type="text" v-model="newMovieParams.year" placeholder="year" /><br />
    <input
      type="text"
      v-model="newMovieParams.director"
      placeholder="director"
    /><br />
    <input type="submit" v-on:click="movieCreate()" />
  </div>
</template>

<style>
.text-danger {
  color: red;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newMovieParams: {
        plot: "",
      },
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
