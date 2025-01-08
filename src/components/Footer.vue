<template>
    <footer class="footer">
      <div class="container">
        <!-- Footer Top Section -->
        <div class="footer-top">
          <div class="footer-logo">
            <h3 class="footer-logo-text">IT Academy</h3>
          </div>
  
          <div class="footer-links">
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
  
          <div class="footer-social">
            <ul>
              <li><a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#" class="social-icon"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a></li>
              <li><a href="#" class="social-icon"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
           <hr>
        <!-- Footer Bottom Section -->
        <div class="footer-bottom">
          <p>&copy; 2025 IT Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  /* Footer Section Styling */
  .footer {
    background-color: #003d99;
    color: white;
    padding: 40px 20px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .footer-logo-text {
    font-size: 2rem;
    font-weight: bold;
    color: #ffc107;
    margin: 0;
  }
  
  .footer-links ul,
  .footer-social ul {
    display: flex;
    gap: 20px;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  
  .footer-links li,
  .footer-social li {
    margin: 10px 0;
  }
  
  .footer-links a,
  .footer-social a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.1rem;
  }
  
  .footer-links a:hover,
  .footer-social a:hover {
    color: #ffc107;
  }
  
  .footer-social .social-icon {
    font-size: 1.5rem;
    margin-right: 15px;
  }
  
  .footer-social .social-icon:last-child {
    margin-right: 0;
  }
  
  .footer-social .social-icon i {
    transition: transform 0.3s ease;
  }
  
  .footer-social .social-icon i:hover {
    transform: scale(1.2);
  }
  
  hr {
    border: none;
    border-top: 1px solid #c2bdbd;
    margin: 20px 0;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
  }
  
  .footer-bottom p {
    font-size: 1rem;
    color: #e0e0e0;
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .footer-top {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-logo-text {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 20px;
    }
  
    .footer-links ul {
      display: flex;
      justify-content: center;
    }
  
    .footer-links li {
      margin: 0 10px;
    }
  
    .footer-social ul {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }
  
  @media (max-width: 768px) {
    .footer-logo-text {
      font-size: 1.8rem;
    }
  
    .footer-links a,
    .footer-social a {
      font-size: 1rem;
    }
  
    .footer-bottom p {
      font-size: 0.9rem;
    }
  }
  </style>
  