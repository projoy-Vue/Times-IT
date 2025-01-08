export default {
  namespaced: true, // Enable namespacing

  state: () => ({
    allcourses: [],
  }),
  getters: {
    relatedCourses: (state) => (category, currentCourseId) => {
      return state.courses
        .filter(
          (course) => course.category === category && course.id !== currentCourseId
        )
        .slice(0, 4); // Return up to 4 related courses
    },
  },
  actions: {
    fetchCourses({ commit }) {
      fetch("@/assets/courses.json")
        .then((response) => response.json())
        .then((data) => {
          commit("SET_COURSES", data);
        })
        .catch((error) => console.error("Failed to fetch courses:", error));
    },
  },
  mutations: {
    SET_COURSES(state, courses) {
      state.courses = courses;
    },
  },
};
