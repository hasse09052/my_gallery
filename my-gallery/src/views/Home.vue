<template>
  <main class="home">
    <div class="home__container">
      <figure v-for="item in images" v-bind:key="item.id" class="home__imgWrap">
        <router-link v-bind:to="{name: 'about', params:{id: item.id}}" class="home__link">
          <img v-lazy="item.url" v-bind:alt="item.title" class="home__img" />
          <!-- <p>{{item.postDatetime}}</p> -->
        </router-link>
      </figure>
    </div>
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

<style lang="scss" scoped>
.home {
  &__container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 3.5%;
  }

  &__imgWrap {
    width: calc(100% / 7);
    padding: 3px;
    margin: 0;

    @media screen and (max-width: 768px) {
      width: calc(100% / 4);
    }
  }

  &__img {
    width: 100%;
    height: calc(100vw / 7);
    object-fit: cover;

    @media screen and (max-width: 768px) {
      height: calc((100vw) / 4);
    }
  }
}
</style>
