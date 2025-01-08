<template>
    <section class="about-hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>Empowering the Next Generation of IT Professionals</h1>
          <p>Where Knowledge Meets Innovation in IT Education</p>
          <a @click="scrollToSection" href="#mission-vision" class="cta-button">Learn More</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutHero",
    methods: {
      scrollToSection() {
        const targetSection = document.getElementById('mission-vision');
        if (targetSection) {
          targetSection.scrollIntoView({ inline: 'nearest', behavior: 'smooth' });
        }
      }
    }

  };
  </script>
  
  <style scoped>
  .about-hero {
    position: relative;
    width: 100%;
    height: 500px; /* Adjust height based on design */
    background-image: url('https://picsum.photos/536/354'); /* Add a suitable background image */
    background-size: cover;
    background-position: center;

  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Dark overlay for better text visibility */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hero-content {
    text-align: center;
    color: #fff;
    padding: 20px;
    max-width: 80%;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .cta-button {
    padding: 12px 30px;
    background-color: #f57c00;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 30px;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #e65100;
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }
  
    .hero-content p {
      font-size: 1rem;
    }
  
    .cta-button {
      font-size: 0.9rem;
      padding: 10px 25px;
    }
  }
  </style>
  