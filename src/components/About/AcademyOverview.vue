<template>
    <section class="academy-overview">
      <div class="container">
        <h2 class="section-title">About Our Academy</h2>
        <p class="section-description">
          Our IT Academy offers world-class training programs designed to equip you with the skills to excel in the tech industry.
          We provide hands-on learning, real-world applications, and expert guidance to help you reach your full potential.
        </p>
  
        <!-- Collapsible Section for Key Features -->
        <div class="overview-item">
          <div class="overview-header" @click="toggleExpand('keyFeatures')">
            <h3 class="overview-title">Key Features</h3>
            <span class="expand-btn">{{ isExpanded.keyFeatures ? 'Hide' : 'Read More' }}</span>
          </div>
          <div v-if="isExpanded.keyFeatures" class="overview-content">
            <ul>
              <li><i class="fas fa-laptop-code"></i> Hands-on projects and real-world scenarios</li>
              <li><i class="fas fa-user-graduate"></i> Experienced instructors and personalized mentorship</li>
              <li><i class="fas fa-chalkboard-teacher"></i> Interactive learning with up-to-date curriculum</li>
              <li><i class="fas fa-briefcase"></i> Career support and job placement assistance</li>
            </ul>
          </div>
        </div>
  
        <!-- Collapsible Section for Our Programs -->
        <div class="overview-item">
          <div class="overview-header" @click="toggleExpand('ourPrograms')">
            <h3 class="overview-title">Our Programs</h3>
            <span class="expand-btn">{{ isExpanded.ourPrograms ? 'Hide' : 'Read More' }}</span>
          </div>
          <div v-if="isExpanded.ourPrograms" class="overview-content">
            <p>
              Our academy offers a range of programs to suit learners at all levels. From beginner courses in web development to advanced certifications in data science, we have something for everyone. Each program is designed to provide a thorough understanding of key concepts and practical experience.
            </p>
          </div>
        </div>
  
        <!-- Collapsible Section for Student Success -->
        <div class="overview-item">
          <div class="overview-header" @click="toggleExpand('studentSuccess')">
            <h3 class="overview-title">Student Success</h3>
            <span class="expand-btn">{{ isExpanded.studentSuccess ? 'Hide' : 'Read More' }}</span>
          </div>
          <div v-if="isExpanded.studentSuccess" class="overview-content">
            <p>
              Our students consistently achieve success through our innovative teaching methods. With access to dedicated support and a strong community, our graduates are well-prepared to succeed in their careers.
            </p>
          </div>
        </div>
  
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AcademyOverview',
    data() {
      return {
        isExpanded: {
          keyFeatures: false,
          ourPrograms: false,
          studentSuccess: false,
        }
      };
    },
    methods: {
      toggleExpand(section) {
        this.isExpanded[section] = !this.isExpanded[section];
      }
    }
  };
  </script>
  
  <style scoped>
  .academy-overview {
    background-color: #f9f9f9;
    padding: 60px 20px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .section-description {
    font-size: 1.125rem;
    color: #555;
    margin-bottom: 40px;
    line-height: 1.6;
  }
  
  .overview-item {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  }
  
  .overview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .overview-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .expand-btn {
    font-size: 1rem;
    color: #007bff;
    text-decoration: underline;
  }
  
  .overview-content {
    margin-top: 15px;
    padding-left: 20px;
  }
  
  .overview-content ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .overview-content li {
    font-size: 1.125rem;
    margin: 10px 0;
  }
  
  .overview-content i {
    color: #007bff;
    margin-right: 10px;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .section-description {
      font-size: 1rem;
    }
  
    .overview-title {
      font-size: 1.25rem;
    }
  
    .overview-content li {
      font-size: 1rem;
    }
  }
  </style>
  