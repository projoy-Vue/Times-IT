<template>
    <section class="core-values">
      <div class="container">
        <h2 class="section-title">Our Core Values</h2>
        <p class="section-subtitle">
          We believe in the power of a strong, supportive learning community where students and educators collaborate to grow together.
        </p>
  
        <div class="values-grid">
          <!-- Core Value 1 -->
          <div class="value-item">
            <div class="icon">
              <!-- <img src="https://example.com/integrity-icon.png" alt="Integrity Icon" /> -->
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Integrity</h3>
            <p>
              We uphold the highest standards of ethics and professionalism, ensuring transparency and trust in all our endeavors.
            </p>
          </div>
  
          <!-- Core Value 2 -->
          <div class="value-item">
            <div class="icon">
              <!-- <img src="https://example.com/innovation-icon.png" alt="Innovation Icon" /> -->
               <i class="fas fa-rocket"></i>
            </div>
            <h3>Innovation</h3>
            <p>
              We foster a culture of creativity, encouraging innovative solutions to meet the evolving challenges in IT education.
            </p>
          </div>
  
          <!-- Core Value 3 -->
          <div class="value-item">
            <div class="icon">
              <!-- <img src="https://example.com/excellence-icon.png" alt="Excellence Icon" /> -->
                <i class="fas fa-award"></i>
            </div>
            <h3>Excellence</h3>
            <p>
              We are committed to delivering top-tier education and resources to ensure that our students achieve their highest potential.
            </p>
          </div>
  
          <!-- Core Value 4 -->
          <div class="value-item">
            <div class="icon">
              <!-- <img src="https://example.com/community-icon.png" alt="Community Icon" /> -->
                <i class="fas fa-users"></i>
            </div>
            <h3>Community</h3>
            <p>
              We believe in the power of a strong, supportive learning community where students and educators collaborate to grow together.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CoreValues"
  };
  </script>
  
  <style scoped>
  .core-values {
    padding: 60px 20px;
    background-color: #f7f7f7;
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
  }
  
  .section-subtitle {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 60px;
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px;
  }
  
  .value-item {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .value-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .icon img {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  
  .icon i {
    font-size: 60px;
    margin-bottom: 20px;
    color: #007bff;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1rem;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .values-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .values-grid {
      grid-template-columns: 1fr;
    }
  
    .value-item {
      padding: 20px;
    }
  }
  </style>
  