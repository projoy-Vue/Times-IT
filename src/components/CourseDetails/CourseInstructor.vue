<template>
    <section class="course-instructor">
      <h2>About the Instructor</h2>
      <div class="instructor-profile">
        <img 
          :src="course.instructor.avatar" 
          :alt="course.instructor.name"
          class="instructor-avatar"
        >
        <div class="instructor-info">
          <h3>{{ course.instructor.name }}</h3>
          <p class="instructor-bio">{{ course.instructor.bio }}</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
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
  .course-instructor {
    padding: 2rem;
    background: white;
    border-radius: 8px;
    margin-top: 2rem;
  }
  
  .instructor-profile {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 1.5rem;
  }
  
  .instructor-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .instructor-info {
    flex: 1;
  }
  
  .instructor-bio {
    color: #636e72;
    line-height: 1.6;
    margin: 1rem 0;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .social-links a {
    color: #2d3436;
    font-size: 1.2rem;
    transition: color 0.2s;
  }
  
  .social-links a:hover {
    color: #6c5ce7;
  }
  
  @media (max-width: 768px) {
    .instructor-profile {
      flex-direction: column;
      text-align: center;
    }
    
    .instructor-avatar {
      width: 120px;
      height: 120px;
    }
  }
  </style>