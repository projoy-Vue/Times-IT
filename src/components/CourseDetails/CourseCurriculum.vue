<template>
    <section class="course-curriculum">
      <h2 class="section-title">Course Curriculum</h2>
      <p class="curriculum-intro">
        Dive into the comprehensive modules designed to help you master this course.
      </p>
      <div class="modules-container">
        <div
          v-for="(module, index) in curriculum"
          :key="index"
          class="module-card"
        >
          <div class="module-header">
            <h3 class="module-title">
              {{ module.title }}
            </h3>
            <button class="toggle-button" @click="toggleModule(index)">
              {{ expandedModules.includes(index) ? '−' : '+' }}
            </button>
          </div>
          <ul
            v-show="expandedModules.includes(index)"
            class="lessons-list"
          >
            <li v-for="(lesson, lessonIndex) in module.lessons" :key="lessonIndex">
              <span class="lesson-title">{{ lesson }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        curriculum: [
          {
            title: "Introduction to the Course",
            lessons: [
              "Welcome and Overview",
              "How to Get the Most Out of This Course",
              "Tools and Resources You'll Need",
            ],
          },
          {
            title: "Module 1: Basics and Foundations",
            lessons: [
              "What is Vue.js?",
              "Setting Up the Development Environment",
              "Understanding the Vue Instance",
            ],
          },
          {
            title: "Module 2: Advanced Topics",
            lessons: [
              "Vue Directives Deep Dive",
              "State Management with Vuex",
              "Dynamic Routing with Vue Router",
            ],
          },
          {
            title: "Final Project and Wrap-Up",
            lessons: [
              "Building a Real-World Application",
              "Final Review and Best Practices",
              "Next Steps in Your Learning Journey",
            ],
          },
        ],
        expandedModules: [],
      };
    },
    methods: {
      toggleModule(index) {
        if (this.expandedModules.includes(index)) {
          this.expandedModules = this.expandedModules.filter(
            (i) => i !== index
          );
        } else {
          this.expandedModules.push(index);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .course-curriculum {
    padding: 2rem;
    background-color: #f9f9f9;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #333;
  }
  
  .curriculum-intro {
    text-align: center;
    margin-bottom: 2rem;
    color: #666;
    font-size: 1rem;
  }
  
  .modules-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .module-card {
    background: #ffffff;
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .module-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
  }
  
  .module-title {
    margin: 0;
  }
  
  .toggle-button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.2rem 0.8rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .toggle-button:hover {
    background-color: #3e8e41;
  }
  
  .lessons-list {
    list-style-type: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  
  .lesson-title {
    display: block;
    font-size: 1rem;
    padding: 0.5rem 0;
    color: #555;
    border-bottom: 1px solid #ddd;
  }
  
  .lesson-title:last-child {
    border-bottom: none;
  }
  </style>
  