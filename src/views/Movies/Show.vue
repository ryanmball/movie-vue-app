<template>
  <div class="movies-show">
    <h3>{{ movie.title }}</h3>
    <p>
      {{ movie.plot }}<br />
      {{ movie.year }}<br />
      {{ movie.director }}<br />
    </p>
    <router-link :to="`/movies/${movie.id}/edit`">
      <button>Edit</button>
    </router-link>
    <button v-on:click="movieDestroy()">Delete</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
      destroyMessage: "",
    };
  },
  created: function () {
    axios.get(`movies/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.movie = response.data;
    });
  },
  methods: {
    movieDestroy: function () {
      if (confirm("Are you sure you want to delete this movie?")) {
        axios.delete(`/movies/${this.movie.id}`).then((response) => {
          console.log(response.data);
          this.destroyMessage = response.data;
          this.$router.push("/movies");
        });
      }
    },
  },
};
</script>
