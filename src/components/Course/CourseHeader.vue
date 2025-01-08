<template>
    <header class="course-header">
      <div class="content">
        <h1>Explore Our Courses</h1>
        <p>Find the perfect course to take your skills to the next level. Start learning today!</p>
        <button @click="navgatTOcontact" class="cta-button">Get Started</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "CourseHeader",
    methods: {
      navgatTOcontact() {
        this.$router.push("/contact");
      },
    },
  };
  </script>
  
  <style scoped>
  .course-header {
    position: relative;
    width: 100%;
    height: 60vh;
    background: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("/images/courses-header-bg.jpg") no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
  }
  
  .content {
    max-width: 800px;
    padding: 20px;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #ddd;
  }
  
  .cta-button {
    padding: 12px 30px;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  
    p {
      font-size: 1rem;
    }
  
    .cta-button {
      font-size: 0.9rem;
      padding: 10px 25px;
    }
  }
  </style>
  