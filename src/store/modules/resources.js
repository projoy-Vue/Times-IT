import resourcesData from '@/assets/resources.json';

const state = {
  ...resourcesData
};

const getters = {
  allResources: (state) => state.allResources,
  filteredResources: (state) => state.filteredResources,
  resourceTypes: (state) => state.resourceTypes,
  selectedType: (state) => state.selectedType,
};

const mutations = {
  SET_FILTERED_RESOURCES(state, resources) {
    state.filteredResources = resources;
  },
  SET_SELECTED_TYPE(state, type) {
    state.selectedType = type;
  },
};

const actions = {
  filterResources({ commit, state }, searchQuery) {
    const query = searchQuery.toLowerCase();
    const filtered = state.allResources.filter((resource) =>
      resource.title.toLowerCase().includes(query)
    );
    commit("SET_FILTERED_RESOURCES", filtered);
  },
  filterByType({ commit, state }, type) {
    commit("SET_SELECTED_TYPE", type);
    if (type === "All") {
      commit("SET_FILTERED_RESOURCES", state.allResources);
    } else {
      const filtered = state.allResources.filter(
        (resource) => resource.type === type
      );
      commit("SET_FILTERED_RESOURCES", filtered);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};