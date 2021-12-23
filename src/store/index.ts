import Vue from 'vue';
import Vuex from 'vuex';
import Bookmarks from './Bookmarks';

const modules = {
  Bookmarks,
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
});
