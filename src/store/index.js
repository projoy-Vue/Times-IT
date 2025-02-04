// store/index.js
import { createStore } from "vuex";
 import popularCourses from "./modules/PopularCourses";
import courseGrid from './modules/CourseGrid';
import testimonials from "./modules/testimonials";
import resources from "./modules/resources";
//import * as  relatedCourses from "./modules/relatedcourses"; // Use named imports
import CourseStatistics from "./modules/statistics";
import CourseHeroSection from "./modules/CourseHeroSection";

export default createStore({
 namespaced: true,
  modules: {

    popularCourses,
    courses: courseGrid,
    testimonials,
    resources,
    //relatedCourses,
    CourseStatistics,
    CourseHeroSection,
  },
});
  
