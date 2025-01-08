<template>
    <section class="achievements">
      <div class="container">
        <h2 class="section-title">Our Achievements</h2>
        <p class="section-subtitle">
          We are proud of our achievements and the success of our students. Here are some of our key milestones.
        </p>
        <div class="achievement-grid">
          <!-- Achievement 1 -->
          <div class="achievement-card">
            <div class="icon">
              <!-- <img src="https://example.com/icon-award.png" alt="Award" /> -->
                <i class="fas fa-award"></i>
            </div>
            <h3>Top Rated Courses</h3>
            <p class="achievement-description">
              Over 1000+ students have rated our courses with 5 stars, making us a top choice in the industry.
            </p>
          </div>
  
          <!-- Achievement 2 -->
          <div class="achievement-card">
            <div class="icon">
              <!-- <img src="https://example.com/icon-graduation.png" alt="Graduation" /> -->
                <i class="fas fa-user-graduate"></i>
            </div>
            <h3>5000+ Graduates</h3>
            <p class="achievement-description">
              More than 5000 students have successfully graduated from our academy, embarking on successful careers.
            </p>
          </div>
  
          <!-- Achievement 3 -->
          <div class="achievement-card">
            <div class="icon">
              <!-- <img src="https://example.com/icon-certificate.png" alt="Certificate" /> -->
                <i class="fas fa-certificate"></i>
            </div>
            <h3>Industry Recognized Certifications</h3>
            <p class="achievement-description">
              Our certification programs are recognized by top industry players, opening doors for students in global companies.
            </p>
          </div>
  
          <!-- Achievement 4 -->
          <div class="achievement-card">
            <div class="icon">
              <!-- <img src="https://example.com/icon-globe.png" alt="Global Reach" /> -->
                <i class="fas fa-globe"></i>
            </div>
            <h3>Global Students Network</h3>
            <p class="achievement-description">
              With students from 50+ countries, we are building a global network of professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Achievements"
  };
  </script>
  
  <style scoped>
  .achievements {
    padding: 60px 20px;
    background-color: #f3f3f3;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 40px;
    color: #333;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 70px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .achievement-grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
  }
  
  .achievement-card {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    text-align: left;
    content: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .achievement-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .icon {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }
  
  .icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .icon i {
    font-size: 3rem;
    color: #007bff;
  }
  
  .achievement-card h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }
  
  .achievement-description {
    font-size: 1rem;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .achievement-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .achievement-grid {
      grid-template-columns: 1fr;
    }
  
    .achievement-card {
      padding: 20px;
    }
  }
  </style>
  