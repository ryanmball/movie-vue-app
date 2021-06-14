<template>
  <div class="actors">
    <div v-for="actor in actors" v-bind:key="actor.id">
      <p>
        Name: {{ actor.first_name }} {{ actor.last_name }} <br />
        Age: {{ actor.age }} <br />
        Known for: {{ actor.known_for }}
      </p>
      <router-link :to="`/actors/${actor.id}`">
        <button>Edit/Delete</button>
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
      message: "",
      actors: [],
    };
  },
  created: function () {
    axios.get("/actors").then((response) => {
      console.log(response.data);
      this.actors = response.data;
    });
  },
  methods: {},
};
</script>
