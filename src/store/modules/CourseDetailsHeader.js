// Store Module: courses.js
export default {
  namespaced: true,
  state: {
    courses: [
      // Example courses
      { id: 1, title: "Master Vue.js", description: "Learn Vue.js from scratch.", duration: "10 hours", fee: 100, image: "vue-course.jpg" },
      { id: 2, title: "JavaScript Fundamentals", description: "Learn core JavaScript concepts.", duration: "8 hours", fee: 80, image: "js-course.jpg" },
    ],
    selectedCourse: null,
  },
  getters: {
    selectedCourse: (state) => state.selectedCourse,
  },
  actions: {
    selectCourse({ commit, state }, courseId) {
      const course = state.courses.find((course) => course.id === courseId);
      commit("SET_SELECTED_COURSE", course);
    },
    enrollInCourse(_, courseId) {
      console.log(`Enrolled in course with ID: ${courseId}`);
    },
  },
  mutations: {
    SET_SELECTED_COURSE(state, course) {
      state.selectedCourse = course;
    },
  },
};
