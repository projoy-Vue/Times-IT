// store/modules/testimonials.js
import testimonialsData from "@/assets/testimonials.json";

export default {
  namespaced: true,
  state: {
    allTestimonials: [],
  },
  mutations: {
    SET_TESTIMONIALS(state, testimonials) {
      state.allTestimonials = testimonials;
    },
  },
  actions: {
    fetchTestimonials({ commit }) {
      // Simulate fetching data from JSON file
      const testimonials = testimonialsData;
      commit("SET_TESTIMONIALS", testimonials);
    },
  },
};
