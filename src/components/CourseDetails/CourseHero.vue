<template>
  <section class="course-hero">
    <div class="hero-media">
      <img 
        :src="course.heroImage" 
        :alt="course.title"
        loading="lazy"
        class="hero-image"
      >
    </div>
    <div class="hero-content">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <router-link to="/" class="breadcrumb-link">Home</router-link>
        <span class="separator">/</span>
        <router-link to="/courses" class="breadcrumb-link">Courses</router-link>
        <span class="separator">/</span>
        <span class="current-page" aria-current="page">{{ course.title }}</span>
      </nav>
      
      <h1 class="hero-title">{{ course.title }}</h1>
      <p class="tagline">{{ course.tagline }}</p>
      
      <div class="meta-info">
        <div class="meta-item">
          <i class="fas fa-star" aria-hidden="true"></i>
          <span><span class="sr-only">Rating:</span>4.9 (1.2k reviews)</span>
        </div>
        <div class="meta-item">
          <i class="fas fa-clock" aria-hidden="true"></i>
          <span>{{ course.duration }} • {{ course.hoursPerWeek }} hrs/week</span>
        </div>
        <div class="meta-item">
          <i class="fas fa-certificate" aria-hidden="true"></i>
          <span>Certificate of Completion</span>
        </div>
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
.course-hero {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 60px;
  background: #2d3436;
  color: white;
}

.hero-media {
  position: relative;
  order: -1;
  min-height: 300px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.breadcrumb-link {
  color: #dfe6e9;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover,
.breadcrumb-link:focus {
  color: #74b9ff;
  text-decoration: underline;
}

.separator {
  color: #adadad;
}

.current-page {
  color: #74b9ff;
  font-weight: 500;
}

.hero-title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.tagline {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #dfe6e9;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 800px;
}

.meta-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.meta-item i {
  color: #74b9ff;
  font-size: 1.2em;
  min-width: 1.5em;
  text-align: center;
}

@media (min-width: 768px) {
  .course-hero {
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
  }

  .hero-media {
    height: 100%;
    position: absolute;
    width: 50%;
    right: 0;
    top: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    padding: 4rem 2rem;
    background: linear-gradient(90deg, rgba(45,52,54,1) 0%, rgba(45,52,54,0.9) 50%, rgba(0,0,0,0) 100%);
  }

  .meta-info {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-content {
    padding: 4rem;
  }

  .hero-title {
    margin-bottom: 1.5rem;
  }

  .tagline {
    margin-bottom: 2.5rem;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>