// store/modules/PopularCourses.js
import coursesData from "@/assets/courses.json";

export default {
  namespaced: true,
  state: {
    allCourses: [],
  },
  mutations: {
    SET_COURSES(state, courses) {
      state.allCourses = courses;
    },
  },
  actions: {
    fetchCourses({ commit }) {
      commit("SET_COURSES", coursesData);
    },
  },
  getters: {
    popularCourses: (state) => {
      return state.allCourses.filter(course => course.isPopular);
    },
  },
};