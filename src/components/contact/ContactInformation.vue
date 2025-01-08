<template>
    <section class="contact-information">
      <div class="container">
        <h2 class="section-title">Get in Touch</h2>
        <div class="info-grid">
          <!-- Address -->
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3 class="info-title">Our Address</h3>
            <p class="info-text">123 Tech Academy Street, City, Country</p>
          </div>
  
          <!-- Phone -->
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <h3 class="info-title">Phone</h3>
            <p class="info-text">
              <a href="tel:+1234567890">+123 456 7890</a>
            </p>
          </div>
  
          <!-- Email -->
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3 class="info-title">Email</h3>
            <p class="info-text">
              <a href="mailto:info@itacademy.com">info@itacademy.com</a>
            </p>
          </div>
  
          <!-- Hours -->
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3 class="info-title">Working Hours</h3>
            <p class="info-text">Mon - Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactInformation",
  };
  </script>
  
  <style scoped>
  /* Contact Information Styles */
  .contact-information {
    background-color: #f9f9f9;
    padding: 4rem 1rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #333;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .info-item {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .info-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  
  .icon {
    font-size: 2rem;
    color: #007bff;
    margin-bottom: 1rem;
  }
  
  .info-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .info-text {
    font-size: 1rem;
    color: #555;
  }
  
  .info-text a {
    color: #007bff;
    text-decoration: none;
  }
  
  .info-text a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .info-text {
      font-size: 0.95rem;
    }
  }
  </style>
  