<template>
  <section class="related-courses">
    <h2 class="title">Related Courses</h2>

    <div v-if="relatedCourses.length" class="course-grid">
      <div
        v-for="course in relatedCourses"
        :key="course.id"
        class="course-card"
      >
        <img
          :src="course.image"
          :alt="course.title"
          class="course-image"
          loading="lazy"
        />
        <div class="course-info">
          <h3 class="course-title">{{ course.title }}</h3>
          <p class="course-category">{{ course.category }}</p>
          <p class="course-price">$ {{ course.price }}</p>
        </div>
        <button
          @click="viewCourse(course.id)"
          class="view-course-btn"
        >
          View Details
        </button>
      </div>
    </div>

    <p v-else class="no-courses">No related courses available at the moment.</p>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    // currentCourseId: {
    //   type: Number,
    //   required: true,
    // },
  },
  computed: {
    ...mapGetters("courses", ["relatedCourses"]), // Map the namespaced getter
    relatedCourses() {
       return this.$store.getters["courses/relatedCourses"](
         this.category,
         this.currentCourseId
       );
    },
  },
  methods: {
    ...mapActions("courses", ["fetchCourses"]), // Use namespaced actions
    viewCourse(courseId) {
      this.$router.push({ name: "CourseDetails", params: { id: courseId } });
    },
  },
  created() {
    // Fetch courses when the component is created
    this.fetchCourses();
  },
};
</script>
