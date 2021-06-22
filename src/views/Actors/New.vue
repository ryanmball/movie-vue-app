<template>
  <div class="actors-new">
    <h3>Create a new actor:</h3>
    <ul class="no-bullets">
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <button v-if="errors[0]" @click="dismissErrors()">Dismiss Errors</button>
    <form v-on:submit.prevent>
      <label for="first">First name: </label>
      <input id="first" type="text" v-model="newActorParams.first_name" /><br />
      <label for="last">Last name: </label>
      <input id="last" type="text" v-model="newActorParams.last_name" /><br />
      <label for="age">Age: </label>
      <input id="age" type="text" v-model="newActorParams.age" /><br />
      <label for="knownFor">Known for: </label>
      <input
        id="knownFor"
        type="text"
        v-model="newActorParams.known_for"
      /><br />
      <input type="submit" v-on:click="actorCreate()" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newActorParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    actorCreate: function () {
      axios
        .post("/actors", this.newActorParams)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
      this.newActorParams = {};
    },
    dismissErrors: function () {
      this.errors = [];
    },
  },
};
</script>
