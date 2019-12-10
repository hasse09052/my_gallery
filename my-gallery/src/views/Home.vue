<template>
  <main>
    <figure v-for="item in images" v-bind:key="item.id">
      <router-link v-bind:to="{name: 'about', params:{id: item.id}}" class="testClass">
        <img v-lazy="item.url" alt />
        <p>{{item.postDatetime}}</p>
      </router-link>
    </figure>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data: function() {
    return {
      test: "testテキスト"
    };
  },
  computed: {
    images() {
      return this.$store.getters.images;
    }
  },
  components: {
    HelloWorld
  }
};
</script>
