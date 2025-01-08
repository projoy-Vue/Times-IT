<template>
    <section class="newsletter-signup">
      <div class="container">
        <!-- Section Title -->
        <div class="newsletter-header">
          <h2 class="newsletter-title">Stay Updated with Our Latest Courses</h2>
          <p class="newsletter-subtitle">
            Subscribe to our newsletter to receive updates on new courses, offers, and industry news.
          </p>
        </div>
  
        <!-- Subscription Form -->
        <form @submit.prevent="handleSubmit" class="newsletter-form">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            :class="{'input-error': email && !isValidEmail}"
            class="newsletter-input"
            required
          />
          <button type="submit" :disabled="!isValidEmail" class="newsletter-button">
            Subscribe
          </button>
        </form>
  
        <!-- Thank You Message -->
        <p v-if="submitted" class="thank-you-message">Thank you for subscribing!</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        submitted: false,
      };
    },
    computed: {
      isValidEmail() {
        // Simple email validation regex
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
      },
    },
    methods: {
      handleSubmit() {
        this.submitted = true;
        this.email = ""; // Reset input field
      },
    },
  };
  </script>
  
  <style scoped>
  /* Newsletter Section Styling */
  .newsletter-signup {
    padding: 60px 20px;
    background-color: #003d99;
    color: white;
    text-align: center;
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .newsletter-header {
    margin-bottom: 40px;
  }
  
  .newsletter-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .newsletter-subtitle {
    font-size: 1.2rem;
    color: #e0e0e0;
  }
  
  .newsletter-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .newsletter-input {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    font-size: 1rem;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
  }
  
  .newsletter-input:focus {
    outline: none;
    border-color: #003d99;
  }
  
  .input-error {
    border-color: #f44336;
  }
  
  .newsletter-button {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    background-color: #ffc107;
    color: #003d99;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .newsletter-button:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
  
  .newsletter-button:hover:enabled {
    background-color: #ff9800;
  }
  
  .thank-you-message {
    font-size: 1.2rem;
    margin-top: 20px;
    color: #fff;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .newsletter-title {
      font-size: 2rem;
    }
  
    .newsletter-subtitle {
      font-size: 1rem;
    }
  
    .newsletter-input {
      padding: 12px;
    }
  
    .newsletter-button {
      padding: 12px;
    }
  }
  </style>
  