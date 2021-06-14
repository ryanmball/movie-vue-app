<template>
  <div class="actors-show">
    <h3>{{ actor.first_name }} {{ actor.last_name }}</h3>
    <p>
      Age: {{ actor.age }} <br />
      Known for: {{ actor.known_for }}
    </p>
    <router-link :to="`/actors/${actor.id}/edit`">
      <button>Edit</button>
    </router-link>
    <button v-on:click="actorDestroy()">Delete</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "",
      actor: {},
    };
  },
  created: function () {
    axios.get(`/actors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.actor = response.data;
    });
  },
  methods: {
    actorDestroy: function () {
      axios.delete(`/actors/${this.actor.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/actors");
      });
    },
  },
};
</script>
