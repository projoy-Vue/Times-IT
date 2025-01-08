<template>
    <section class="call-to-action">
      <div class="container">
        <h2 class="cta-title">Ready to Start Your Learning Journey?</h2>
        <p class="cta-description">
          Join our community of learners and start advancing your skills today! We offer top-rated courses
          for all levels. Whether you're a beginner or an expert, we have the perfect program for you.
        </p>
        <div class="cta-button-container">
          <router-link to="/courses" class="cta-button">Browse Our Courses</router-link>
          <router-link to="/contact" class="cta-button secondary">Contact Us</router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CallToAction"
  };
  </script>
  
  <style scoped>
  .call-to-action {
    background-color: #007bff;
    color: #fff;
    padding: 60px 20px;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .cta-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .cta-description {
    font-size: 1.25rem;
    margin-bottom: 40px;
    color: #f1f1f1;
  }
  
  .cta-button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .cta-button {
    background-color: #fff;
    color: #007bff;
    padding: 15px 30px;
    font-size: 1.125rem;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #0056b3;
    color: #fff;
    transform: translateY(-5px);
  }
  
  .cta-button.secondary {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
  
  .cta-button.secondary:hover {
    background-color: #fff;
    color: #007bff;
  }
  
  @media (max-width: 768px) {
    .cta-title {
      font-size: 2rem;
    }
  
    .cta-description {
      font-size: 1rem;
    }
  
    .cta-button-container {
      flex-direction: column;
      gap: 10px;
    }
  }
  </style>
  