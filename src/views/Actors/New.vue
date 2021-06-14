<template>
  <div class="actors-new">
    <h3>Create a new actor:</h3>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <input
      type="text"
      v-model="newActorParams.first_name"
      placeholder="first name"
    /><br />
    <input
      type="text"
      v-model="newActorParams.last_name"
      placeholder="last name"
    /><br />
    <input type="text" v-model="newActorParams.age" placeholder="age" /><br />
    <input
      type="text"
      v-model="newActorParams.known_for"
      placeholder="known for"
    /><br />
    <input type="submit" v-on:click="actorCreate()" />
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
  },
};
</script>
