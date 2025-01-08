// src/store/modules/statistics.js
import data from '@/assets/statistics.json';
const state = {
    // Your statistics module state
    courseStats: data
  };

  const getters = {
      //Your statistics module getters
      courseStats(state) {
        return state.courseStats;
      },
  };

  const actions = {
    // Your statistics actions
    async fetchCourseStats({ commit }) {
      // Your logic for fetching course stats

      // ...
      
      const stats = []; // Your fetched stats
      commit('SET_COURSE_STATS', stats);
    }
  };

  const mutations = {
    // Your statistics mutations
    SET_COURSE_STATS(state, stats) {
      state.courseStats = stats;
    },
  };

  export default {
    namespaced: true, // VERY IMPORTANT: This makes it namespaced!
    state,
    getters,
    actions,
    mutations,
  };