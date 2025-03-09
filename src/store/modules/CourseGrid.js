import coursesData from "@/assets/courses.json";

const state = {
  courses: coursesData,
  filters: {
    category: "All",
    sort: "title",
    sortOrder: "asc",
    currentPage: 1,
    itemsPerPage: 6,
    selectedCourse: null,
    instructor: "All"
  }
};

const getters = {
  courses: (state) => state.courses,
  filteredCourses: (state) => {
    let filtered = state.courses;
    if (state.filters.category !== "All") {
      filtered = filtered.filter(course => course.category === state.filters.category);
    }
    return filtered.sort((a, b) => {
      const modifier = state.filters.sortOrder === "asc" ? 1 : -1;
      if (a[state.filters.sort] < b[state.filters.sort]) return -1 * modifier;
      if (a[state.filters.sort] > b[state.filters.sort]) return 1 * modifier;
      return 0;
    });
  },
  paginatedCourses: (state, getters) => {
    const start = (state.filters.currentPage - 1) * state.filters.itemsPerPage;
    const end = start + state.filters.itemsPerPage;
    return getters.filteredCourses.slice(start, end);
  },
  totalPages: (state, getters) => {
    return Math.ceil(getters.filteredCourses.length / state.filters.itemsPerPage);
  },
  categories: (state) => {
    const categories = state.courses.map((course) => course.category);
    return ["All", ...new Set(categories)];
  },
  getCourseById: (state) => (id) => {
    return state.courses.find(course => course.id === id);
  },
  selectedCourse: (state) => state.filters.selectedCourse
};

const mutations = {
  SET_CATEGORY(state, category) {
    state.filters.category = category;
    state.filters.currentPage = 1;
  },
  SET_SORT(state, { sort, sortOrder }) {
    state.filters.sort = sort;
    state.filters.sortOrder = sortOrder;
  },
  SET_PAGE(state, page) {
    state.filters.currentPage = page;
  },
  SET_SELECTED_COURSE(state, course) {
    state.filters.selectedCourse = course;
  }
};

const actions = {
  updateCategory({ commit }, category) {
    commit("SET_CATEGORY", category);
  },
  updateSort({ commit }, payload) {
    commit("SET_SORT", payload);
  },
  updatePage({ commit }, page) {
    commit("SET_PAGE", page);
  },
  fetchCourseById({ commit, getters }, id) {
    const course = getters.getCourseById(id);
    if (course) {
      commit("SET_SELECTED_COURSE", course);
    } else {
      console.error(`Course with ID ${id} not found`);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};