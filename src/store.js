import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import pathify from './pathify';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AutomaticNegativeThoughts: [],
    CognitiveErrors: [],
    RationalAlternativeThoughts: []
  },
  mutations: {
    
  },
  actions: {

  },
  plugins: [createPersistedState(), pathify.plugin]
})
