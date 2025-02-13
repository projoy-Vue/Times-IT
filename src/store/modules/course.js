import courses from '@/assets/courses.json'; // Your course data

export default {
  namespaced: true,
  state: {
    courses: []
  },
  mutations: {
    SET_COURSES(state, courses) {
      state.courses = courses;
    }
  },
  actions: {
    loadCourses({ commit }) {
      commit('SET_COURSES', courses);
    }
  },
  getters: {
    getCourseById: (state) => (id) => {
      return state.courses.find(course => course.id === id);
    }
  }
};