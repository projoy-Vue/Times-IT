import coursesData from "@/assets/courses.json";


const state = {
  courses: coursesData, // JSON courses data
  filters: {
    category: "All",      // Default filter
    sort: "title",        // Default sort
    sortOrder: "asc",     // Default sort order
    currentPage: 1,       // Default page
    itemsPerPage: 6   ,   // Items per page
    selectedCourse: null,
    instructor: "All", // New instructor filter
  }
};

const getters = {
  courses (state) {
    return state.courses;
  },
  filteredCourses(state) {
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
  paginatedCourses(state, getters) {
    const start =
      (state.filters.currentPage - 1) * state.filters.itemsPerPage;
    const end = start + state.filters.itemsPerPage;
    return getters.filteredCourses.slice(start, end);
  },
  totalPages(state, getters) {
    return Math.ceil(
      getters.filteredCourses.length / state.filters.itemsPerPage
    );
  },
  categories(state) {
    const categories = state.courses.map((course) => course.category);
    return ["All", ...new Set(categories)];
  }

};

const mutations = {
  SET_CATEGORY(state, category) {
    state.filters.category = category;
    state.filters.currentPage = 1; // Reset to page 1
  },
  SET_SORT(state, { sort, sortOrder }) {
    state.filters.sort = sort;
    state.filters.sortOrder = sortOrder;
  },
  SET_PAGE(state, page) {
    state.filters.currentPage = page;
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};