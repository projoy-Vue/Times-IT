<template>
  <section class="course-overview">
    <h2>Course Overview</h2>
    <div class="overview-grid">
      <div class="description">
        <h3>About This Course</h3>
        <p>{{ course.description }}</p>
      </div>
      
      <div class="key-features">
        <h3>What's Included</h3>
        <ul>
          <li v-for="(feature, index) in course.overview.keyFeatures" :key="index">
            <i class="fas fa-check-circle"></i> {{ feature }}
          </li>
        </ul>
      </div>

      <div class="objectives">
        <h3>Learning Objectives</h3>
        <ol>
          <li v-for="(objective, index) in course.overview.objectives" :key="index">
            {{ objective }}
          </li>
        </ol>
      </div>

      <div class="prerequisites">
        <h3>Requirements</h3>
        <ul>
          <li v-for="(requirement, index) in course.overview.prerequisites" :key="index">
            <i class="fas fa-book"></i> {{ requirement }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('courses', ['getCourseById']),
    course() {
      return this.getCourseById(Number(this.$route.params.id)) || {};
    }
  }
};
</script>

<style scoped>
.course-overview {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2d3436;
}

.description {
  line-height: 1.6;
  color: #636e72;
  font-size: 1.1rem;
}
.description p {
  line-height: 1.6;
  color: #636e72;
}

ul, ol {
  padding-left: 1.5rem;
}

.key-features li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2d3436;
}

.key-features i {
  color: #00b894;
}

.prerequisites li {
  margin-bottom: 0.8rem;
  color: #636e72;
}

.prerequisites i {
  color: #6c5ce7;
  margin-right: 0.5rem;
}

.objectives li {
  margin-bottom: 0.8rem;
  padding-left: 1rem;
  position: relative;
}

.objectives li::before {
  content: "✓";
  position: absolute;
  left: -1rem;
  color: #00b894;
}

@media (max-width: 768px) {
  .course-overview {
    padding: 1rem;
  }

  .overview-grid {
    grid-template-columns: 1fr;
  }
  .description{
  }
  .description p {
    font-size: 1rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
}
</style>