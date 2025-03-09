<template>
  <section class="course-curriculum">
    <h2>Course Curriculum</h2>
    
    <div class="curriculum-stats">
      <div class="stat-item">
        <i class="fas fa-layer-group"></i>
        <span>{{ course.curriculum.length }} Modules</span>
      </div>
      <div class="stat-item">
        <i class="fas fa-book-open"></i>
        <span>{{ totalLessons }} Lessons</span>
      </div>
      <div class="stat-item">
        <i class="fas fa-clock"></i>
        <span>{{ totalDuration }}</span>
      </div>
    </div>

    <div class="modules-container">
      <div 
        v-for="(module, index) in course.curriculum" 
        :key="module.title"
        class="module-card"
      >
        <div class="module-header" @click="toggleModule(index)">
          <div class="module-info">
            <h3>Module {{ module.module }}: {{ module.title }}</h3>
            <div class="module-meta">
              <span>{{ module.lessons.length }} Lessons</span>
              <span>{{ module.duration }}</span>
            </div>
          </div>
          <button class="toggle-button">
            {{ isModuleOpen(index) ? '−' : '+' }}
          </button>
        </div>

        <transition name="module-expand">
          <div v-show="isModuleOpen(index)" class="module-content">
            <div 
              v-for="(lesson, lIndex) in module.lessons" 
              :key="lIndex"
              class="lesson-item"
            >
              <div class="lesson-info">
                <span class="lesson-number">{{ lIndex + 1 }}.</span>
                <div class="lesson-details">
                  <h4>{{ lesson.title }}</h4>
                  <div class="lesson-meta">
                    <span>{{ lesson.duration }}</span>
                    <span class="lesson-type">{{ lesson.type }}</span>
                  </div>
                </div>
              </div>
              <div class="lesson-actions">
                <button 
                  v-if="lesson.resources" 
                  class="resource-btn"
                  @click="downloadResources(lesson.resources)"
                >
                  <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      expandedModules: []
    };
  },
  computed: {
    ...mapGetters('courses', ['getCourseById']),
    course() {
      return this.getCourseById(Number(this.$route.params.id)) || {};
    },
    totalLessons() {
      return this.course.curriculum?.reduce((acc, mod) => acc + mod.lessons.length, 0) || 0;
    }
  },
  methods: {
    isModuleOpen(index) {
      return this.expandedModules.includes(index);
    },
    toggleModule(index) {
      const currentIndex = this.expandedModules.indexOf(index);
      if (currentIndex > -1) {
        this.expandedModules.splice(currentIndex, 1);
      } else {
        this.expandedModules.push(index);
      }
    },
    downloadResources(resources) {
      // Implement download logic
    }
  }
};
</script>

<style scoped>
.course-curriculum {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.curriculum-stats {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #636e72;
}

.stat-item i {
  color: #6c5ce7;
}

.module-card {
  margin-bottom: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.module-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.module-header:hover {
  background: #f8f9fa;
}

.module-info h3 {
  margin: 0;
  font-size: 1.1rem;
}

.module-meta {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  color: #636e72;
  font-size: 0.9rem;
}

.toggle-button {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  color: #2d3436;
}

.module-content {
  padding: 0 1.5rem;
  background: #fff;
}

.lesson-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #eee;
}

.lesson-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lesson-number {
  color: #636e72;
  width: 30px;
}

.lesson-details h4 {
  margin: 0;
  font-size: 1rem;
}

.lesson-meta {
  display: flex;
  gap: 1rem;
  margin-top: 0.3rem;
  font-size: 0.9rem;
  color: #636e72;
}

.resource-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #6c5ce7;
  padding: 0.5rem;
}

.module-expand-enter-active,
.module-expand-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.module-expand-enter-from,
.module-expand-leave-to {
  opacity: 0;
  max-height: 0;
}

@media (max-width: 768px) {
  .module-header {
    padding: 1rem;
  }
  
  .lesson-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>