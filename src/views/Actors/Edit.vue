<template>
  <div class="actors-edit">
    <form v-on:submit.prevent="actorUpdate()">
      <h1>Edit the selected actor</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>First name:</label>
        <input
          type="text"
          class="form-control"
          v-model="editActorParams.first_name"
        />
      </div>
      <div class="form-group">
        <label>Last name:</label>
        <input
          type="text"
          class="form-control"
          v-model="editActorParams.last_name"
        />
      </div>
      <div class="form-group">
        <label>Known for:</label>
        <input
          type="text"
          class="form-control"
          v-model="editActorParams.known_for"
        />
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input type="text" class="form-control" v-model="editActorParams.age" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <p>{{ editActorParams }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editActorParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/actors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.editActorParams = response.data;
    });
  },
  methods: {
    actorUpdate: function () {
      axios
        .patch(`/actors/${this.editActorParams.id}`, this.editActorParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/actors/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
