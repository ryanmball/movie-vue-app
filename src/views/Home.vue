<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>Add a movie to the list:</h2>
    <input type="text" v-model="newMovieTitle" placeholder="title"><br>
    <input type="text" v-model="newMovieYear" placeholder="year"><br>
    <input type="text" v-model="newMoviePlot" placeholder="plot"><br>
    <input type="text" v-model="newMovieDirector" placeholder="director"><br>
    <input type="text" v-model="newMovieEnglish" placeholder="english true/false"><br>
    <button v-on:click="movieCreate()">Add Movie</button>
    <p v-if="errors">ERRORS:<br> {{ errors }}</p>
    <h3>Here is a list of movies:</h3>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.plot }}</p>
      <p>{{ movie.year }}</p>
      <button v-on:click="movieShow(movie)">More Info</button>
      <!-- <p>Genres: {{ movie.genre_names }}</p> -->
    </div>
    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Info</h1>
        <p>Title: {{ currentMovie.title }}</p>
        <p>Plot: {{ currentMovie.plot }}</p>
        <p>Year: {{ currentMovie.year }}</p>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>

<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Welcome to my Movie App!",
        movies: [],
        newMovieTitle: "",
        newMovieYear: "",
        newMoviePlot: "",
        newMovieDirector: "",
        newMovieEnglish: "",
        errors: false,
        currentMovie: "",
      };
    },
    created: function () {
      this.movieIndex();
    },
    methods: {
      movieIndex: function () {
        axios.get("http://localhost:3000/movies").then(response => {
          console.log(response.data);
          this.movies = response.data;
        });
      },
      movieCreate: function () {
        var params = {
          title: this.newMovieTitle,
          year: this.newMovieYear,
          plot: this.newMoviePlot,
          director: this.newMovieDirector,
          english: this.newMovieEnglish,
        }
        axios.post("http://localhost:3000/movies", params).then(response => {
          console.log(response.data);
          this.movies.push(response.data);
          this.errors = false
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        })
        this.newMovieTitle = "";
        this.newMovieYear = "";
        this.newMoviePlot = "";
        this.newMovieDirector = "";
        this.newMovieEnglish = "";
      },
      movieShow: function(movie) {
        console.log(movie);
        this.currentMovie = movie;
        document.querySelector("#movie-details").showModal();
      }
    }
  };
</script>