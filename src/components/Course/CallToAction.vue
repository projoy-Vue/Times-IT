<template>
    <section class="call-to-action">
      <div class="cta-content">
        <h2 class="cta-heading">Start Your Learning Journey Today!</h2>
        <p class="cta-text">
          Unlock your potential with our expertly crafted courses. Join thousands of learners and start achieving your goals today!
        </p>
        <button class="cta-button" @click="navigateToSignUp">Start Learning Today</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      navigateToSignUp() {
        // Example: redirect to the sign-up page or course listing page
        this.$router.push({ name: 'sign-up' }); // Adjust based on your route name
      }
    }
  };
  </script>
  
  <style scoped>
  .call-to-action {
    background: #f8f8f8;
    color: rgb(17, 14, 14);
    text-align: center;
    padding: 50px 20px;
    border-radius: 10px;
    /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); */
    margin: 40px 0;
  }
  
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cta-heading {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .cta-text {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.5;
  }
  
  .cta-button {
    background-color: #ff5733;
    color: white;
    font-size: 1.2rem;
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #e04e28;
  }
  
  @media (max-width: 768px) {
    .cta-heading {
      font-size: 1.6rem;
    }
  
    .cta-text {
      font-size: 1rem;
    }
  
    .cta-button {
      font-size: 1rem;
      padding: 12px 25px;
    }
  }
  </style>
  