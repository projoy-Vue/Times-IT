<template>
  <section class="popular-courses">
    <div class="container">
      <!-- Section Title -->
      <div class="courses-header">
        <h2 class="courses-title">Our Popular Courses</h2>
        <p class="courses-subtitle">
          Explore our top-rated IT courses and build your dream career today.
        </p>
      </div>

      <!-- Courses Grid -->
      <div class="courses-grid">
        <div 
          v-for="course in popularCourses" 
          :key="course.id" 
          class="course-card"
        >
          <img :src="getImagePath(course.heroImage)" :alt="course.title" class="course-image" />
          <div class="course-content">
            <h3 class="course-title">{{ course.title }}</h3>
            <p class="course-description">{{ course.description }}</p>
            <div class="course-footer">
              <span class="course-duration">{{ course.duration }}</span>
              <button class="enroll-btn">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import the mapGetters helper function from Vuex
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('popularCourses', ['popularCourses']) // Update to use the new module name
  },
  methods: {
    getImagePath (imageName) {
      try {
        return new URL(`../assets/images/${imageName}`, import.meta.url).href;
      } catch {
        return this.fallbackImage;
      }
    },
    handleImageError(event) {
      event.target.src = this.fallbackImage;
    }
  },

  created() {
    // Dispatch the action to fetch courses when the component is created
    this.$store.dispatch('popularCourses/fetchCourses'); // Update to use the new module name
  }
};
</script>


<style scoped>
/* Popular Courses Section Styling */
.popular-courses {
  padding: 60px 20px;
  background-color: #f7f8fa;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.courses-header {
  margin-bottom: 40px;
}

.courses-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #003d99;
}

.courses-subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.course-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.course-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.course-content {
  padding: 20px;
  text-align: left;
}

.course-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #003d99;
  margin-bottom: 10px;
}

.course-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-duration {
  font-size: 0.9rem;
  color: #777;
}

.enroll-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.enroll-btn:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .courses-title {
    font-size: 2rem;
  }

  .courses-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }

  .course-card {
    margin: 0 auto;
  }

  .courses-title {
    font-size: 1.8rem;
  }

  .courses-subtitle {
    font-size: 0.9rem;
  }
}
</style>
