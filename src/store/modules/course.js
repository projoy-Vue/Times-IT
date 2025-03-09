import axios from 'axios';

const state = {
  courses: []
};

const getters = {
  allCourses: (state) => state.courses,
  getCourseById: (state) => (id) => state.courses.find(course => course.id === id)
};

const actions = {
  async fetchCourses({ commit }) {
    const response = await axios.get('/src/assets/courses.json');
    commit('setCourses', response.data);
  },
  async fetchCourse({ commit }, id) {
    const response = await axios.get('/src/assets/courses.json');
    const course = response.data.find(course => course.id == id);
    commit('setCourse', course);
  }
};

const mutations = {
  setCourses: (state, courses) => (state.courses = courses),
  setCourse: (state, course) => {
    const index = state.courses.findIndex(c => c.id === course.id);
    if (index !== -1) {
      state.courses.splice(index, 1, course);
    } else {
      state.courses.push(course);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};