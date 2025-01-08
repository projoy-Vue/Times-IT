<template>
    <section class="hero">
      <div class="hero-content">
        <!-- Headline and Subheadline -->
        <h1 class="hero-title">Empower Your Skills with IT Academy</h1>
        <p class="hero-subtitle">
          Explore a wide range of offline courses to boost your career in tech. Learn from experts and take the first step towards success.
        </p>
  
        <!-- Call-to-Action Buttons -->
        <div class="hero-buttons">
          <button @click="navgatTOcourse" class="btn primary-btn">Explore Courses</button>
          <button @click="navgatTOcontact" class="btn secondary-btn">Contact Us</button>
        </div>
      </div>
  
      <!-- Hero Image -->
      <div class="hero-image">
        <img src="https://picsum.photos/536/354" alt="Learning Illustration" />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
    methods: {
        navgatTOcontact() {
            this.$router.push("/contact");
        },
        navgatTOcourse(){
          this.$router.push("/courses");
        }
      
    }
  };
  </script>
  
  <style scoped>
  /* Hero Section Styling */
  .hero {
    margin-top: 64px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
    background: linear-gradient(90deg, #007bff, #0056d2);
    color: white;
  }
  
  /* Hero Content Styling */
  .hero-content {
    flex: 1;
    max-width: 50%;
    text-align: left;
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
    color: #f0f0f0;
  }
  
  /* Buttons Styling */
  .hero-buttons {
    display: flex;
    gap: 15px;
  }
  
  .hero-buttons .btn {
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .hero-buttons .primary-btn {
    background-color: #ffdd57;
    color: #003d99;
  }
  
  .hero-buttons .primary-btn:hover {
    background-color: #ffd633;
    transform: scale(1.05);
  }
  
  .hero-buttons .secondary-btn {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .hero-buttons .secondary-btn:hover {
    background-color: white;
    color: #0056d2;
    transform: scale(1.05);
  }
  
  /* Hero Image Styling */
  .hero-image {
    flex: 1;
    max-width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .hero {
      flex-direction: column;
      text-align: center;
      padding: 20px;
    }
  
    .hero-content {
      max-width: 100%;
      margin-bottom: 30px;
    }
  
    .hero-title {
      font-size: 2rem;
    }
  
    .hero-subtitle {
      font-size: 1rem;
    }
  
    .hero-image {
      max-width: 80%;
    }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 1.8rem;
    }
  
    .hero-subtitle {
      font-size: 0.9rem;
    }
  
    .hero-buttons .btn {
      font-size: 0.9rem;
    }
  }
  </style>
  