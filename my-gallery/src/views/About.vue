<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{id}}</p>
    <img v-bind:src="image.url" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "about",
  data: function() {
    return {
      ip: ""
    };
  },
  props: ["id"],
  computed: {
    image() {
      return this.$store.getters.image(this.id);
    }
  }
};
</script>