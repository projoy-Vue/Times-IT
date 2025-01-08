<template>
    <section class="course-overview">
      <h2 class="section-title">About the Course</h2>
      <p class="course-description">
        {{ description }}
      </p>
      <ul class="course-highlights">
        <li v-for="(highlight, index) in highlights" :key="index">
          <span class="highlight-icon">✔️</span>
          {{ highlight }}
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      description: {
        type: String,
        required: true,
        default: "This course is designed to provide a comprehensive understanding of Vue.js and help you build professional web applications with ease."
      },
      highlights: {
        type: Array,
        required: true,
        default: () => [
          "Master Vue.js concepts from beginner to advanced levels",
          "Build real-world web applications step-by-step",
          "Gain lifetime access to course materials and updates",
          "Earn a professional certification upon completion",
        ]
      }
    }
  };
  </script>
  
  <style scoped>
  .course-overview {
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    margin: 2rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }
  
  .course-description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-align: justify;
    color: #555;
  }
  
  .course-highlights {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .course-highlights li {
    font-size: 1rem;
    color: #444;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #ffffff;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    flex: 1 1 calc(45% - 1rem);
  }
  
  .highlight-icon {
    color: #4caf50;
    font-size: 1.2rem;
  }
  </style>
  