import Vue from "vue";
import Vuex from "vuex";

import * as comments from "./modules/comments";
import * as articles from "./modules/articles";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles,
    comments
  }
});
