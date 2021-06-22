<template>
  <div class="movies-new">
    <h3>Create a new movie:</h3>
    <ul class="no-bullets">
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <button v-if="errors[0]" @click="dismissErrors()">Dismiss Errors</button>
    <form v-on:submit.prevent>
      <label for="title">Title: </label>
      <input id="title" type="text" v-model="newMovieParams.title" /><br />
      <label for="plot">Plot: </label>
      <input id="plot" type="text" v-model="newMovieParams.plot" /><br />
      <label for="year">Year: </label>
      <input id="year" type="text" v-model="newMovieParams.year" /><br />
      <label for="director">Director: </label>
      <input
        id="director"
        type="text"
        v-model="newMovieParams.director"
      /><br />
      <label for="english">English: </label>
      <label for="english"><small>Yes</small></label>
      <input
        type="radio"
        name="english"
        id="english"
        value="true"
        v-model="newMovieParams.english"
      />
      <label for="english"><small>No</small></label>
      <input
        type="radio"
        name="english"
        id="english"
        value="false"
        v-model="newMovieParams.english"
      />
      <br />
      <input type="submit" v-on:click="movieCreate()" />
    </form>
  </div>
</template>

<style>
.text-danger {
  color: red;
}
ul.no-bullets {
  list-style-type: none;
  padding: 0;
  margin: 0;
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
    dismissErrors: function () {
      this.errors = [];
    },
  },
};
</script>
