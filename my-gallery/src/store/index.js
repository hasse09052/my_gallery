import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    loadImages(state) {
      let images = [];
      axios
        .get("https://wfc-2019.firebaseapp.com/images?limit=200&offset=")
        .then(response => {
          state.images = response.data.data.images.sort((old, next) => {
            return (old.postDatetime - next.postDatetime);
          });
        })
        .catch(reason => {
          console.log("失敗");
        });
    },
  },
  actions: {},
  getters: {
    images(state) {
      return state.images
    },
    image(state) {
      return (id) => state.images.find((el) => el.id === id)
    }
  },
  modules: {}
})