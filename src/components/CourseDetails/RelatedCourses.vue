<template>
  <section class="related-courses" aria-label="Related courses">
    <div class="section-header">
      <h2 class="section-title">You Might Also Like</h2>
      <router-link to="/courses" class="view-all">View All Courses →</router-link>
    </div>
    
    <div class="courses-container">
      <div class="courses-grid">
        <article 
          v-for="course in relatedCourses" 
          :key="course.id" 
          class="course-card"
          role="article"
        >
          <router-link 
            :to="course.link" 
            class="course-link"
            :aria-label="`View ${course.title} course details`"
          >
            <div class="card-media">
              <img 
                :src="course.thumbnail || '/images/placeholder-course.jpg'" 
                :alt="course.title"
                class="course-thumbnail"
                loading="lazy"
              >
              <div class="card-badges">
                <span class="category-badge">{{ course.category }}</span>
                <span v-if="course.isPopular" class="popular-badge">Popular</span>
              </div>
            </div>
            
            <div class="card-content">
              <h3 class="course-title">{{ course.title }}</h3>
              
              <div class="course-metadata">
                <div class="metadata-item">
                  <i class="fas fa-clock" aria-hidden="true"></i>
                  <span>{{ course.duration }}</span>
                </div>
                <div class="metadata-item">
                  <i class="fas fa-user-graduate" aria-hidden="true"></i>
                  <span>{{ course.enrollmentCount || '1.2k' }} enrolled</span>
                </div>
              </div>
              
              <div class="course-pricing">
                <div class="price-container">
                  <span class="current-price">${{ course.discountPrice || course.price }}</span>
                  <span v-if="course.discountPrice" class="original-price">${{ course.price }}</span>
                </div>
                <div class="rating">
                  <i 
                    v-for="star in 5" 
                    :key="star" 
                    class="fas fa-star" 
                    :class="{ 'filled': star <= (course.rating || 4.5) }"
                    aria-hidden="true"
                  ></i>
                  <span class="sr-only">Rating: {{ course.rating || 4.5 }} out of 5 stars</span>
                </div>
              </div>
            </div>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('courses', ['getCourseById', 'courses']),
    currentCourse() {
      return this.getCourseById(Number(this.$route.params.id)) || {};
    },
    relatedCourses() {
      const fallbackCourses = this.courses.filter(c => c.id !== this.currentCourse.id);
      return this.courses
        .filter(course => 
          (course.category === this.currentCourse.category || 
           course.difficulty === this.currentCourse.difficulty) && 
          course.id !== this.currentCourse.id
        )
        .slice(0, 4)
        .concat(fallbackCourses) // Fallback if not enough related
        .slice(0, 4);
    }
  }
};
</script>

<style scoped>
.course-link {
  text-decoration: none;
  color: inherit;
}
.related-courses {
  padding: 4rem 1rem;
  background: #f9fafb;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 2rem;
}

.section-title {
  font-size: 1.8rem;
  color: #1a1a1a;
}

.view-all {
  color: #6c5ce7;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.view-all:hover {
  opacity: 0.8;
}

.courses-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.course-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

.card-media {
  position: relative;
  height: 200px;
}

.course-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: linear-gradient(45deg, #f6f7f9, #eef1f4);
}

.card-badges {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
}

.category-badge,
.popular-badge {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.category-badge {
  background: rgba(108, 92, 231, 0.95);
  color: white;
}

.popular-badge {
  background: #00b894;
  color: white;
}

.card-content {
  padding: 1.5rem;
}

.course-title {
  font-size: 1.1rem;
  line-height: 1.4;
  color: #1a1a1a;
  margin: 0 0 1rem;
  height: 3.2em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.course-metadata {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.metadata-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.course-pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-container {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.current-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
}

.original-price {
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #ffd700;
}

.fa-star {
  font-size: 0.9rem;
}

.fa-star.filled {
  color: #ffd700;
}

.fa-star:not(.filled) {
  color: #e0e0e0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .courses-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .courses-container {
    overflow-x: auto;
    padding-bottom: 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .courses-grid {
    display: flex;
    width: max-content;
    gap: 1rem;
    padding: 0 1rem;
  }

  .course-card {
    flex: 0 0 85%;
    scroll-snap-align: start;
  }

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #6c5ce7;
    border-radius: 4px;
  }
}

@media (max-width: 480px) {
  .course-card {
    flex: 0 0 90%;
  }

  .card-media {
    height: 180px;
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