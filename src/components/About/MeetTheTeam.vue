<template>
    <section class="meet-the-team">
      <div class="container">
        <h2 class="section-title">Meet Our Team</h2>
        <p class="section-subtitle">
          Our team is dedicated to providing the best learning experience for our students. Get to know the people behind our courses!
        </p>
  
        <div class="team-grid">
          <!-- Team Member 1 -->
          <div class="team-member">
            <div class="profile-image">
              <img src="https://example.com/team-member1.jpg" alt="John Doe" />
            </div>
            <h3>John Doe</h3>
            <p class="title">CEO & Founder</p>
            <p class="bio">
              John is passionate about education and technology, leading the team with vision and dedication.
            </p>
            <div class="social-links">
              <a href="https://linkedin.com/in/johndoe" target="_blank">
                <!-- <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" /> -->
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/johndoe" target="_blank">
                <!-- <img src="https://example.com/twitter-icon.png" alt="Twitter" /> -->
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
  
          <!-- Team Member 2 -->
          <div class="team-member">
            <div class="profile-image">
              <img src="https://example.com/team-member2.jpg" alt="Jane Smith" />
            </div>
            <h3>Jane Smith</h3>
            <p class="title">Chief Technology Officer</p>
            <p class="bio">
              Jane brings technical expertise and leads our innovation-driven approach to education.
            </p>
            <div class="social-links">
              <a href="https://linkedin.com/in/janesmith" target="_blank">
                <!-- <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" /> -->
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/janesmith" target="_blank">
                <!-- <img src="https://example.com/github-icon.png" alt="GitHub" /> -->
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
  
          <!-- Team Member 3 -->
          <div class="team-member">
            <div class="profile-image">
              <img src="https://example.com/team-member3.jpg" alt="Robert Brown" />
            </div>
            <h3>Robert Brown</h3>
            <p class="title">Lead Instructor</p>
            <p class="bio">
              Robert is an experienced instructor dedicated to creating engaging learning experiences.
            </p>
            <div class="social-links">
              <a href="https://linkedin.com/in/robertbrown" target="_blank">
                <!-- <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" /> -->
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/robertbrown" target="_blank">
                <!-- <img src="https://example.com/twitter-icon.png" alt="Twitter" /> -->
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
  
          <!-- Team Member 4 -->
          <div class="team-member">
            <div class="profile-image">
              <img src="https://example.com/team-member4.jpg" alt="Emily Green" />
            </div>
            <h3>Emily Green</h3>
            <p class="title">Marketing Director</p>
            <p class="bio">
              Emily drives our marketing strategies and ensures we reach the right audience effectively.
            </p>
            <div class="social-links">
              <a href="https://linkedin.com/in/emilygreen" target="_blank">
                <!-- <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" /> -->
                <i class="fab fa-linkedin-in"></i>
              </a>
                <a href="https://instagram.com/emilygreen" target="_blank">
                    <!-- <img src="https://example.com/instagram-icon.png" alt="Instagram" /> -->
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "MeetTheTeam"
  };
  </script>
  
  <style scoped>
  .meet-the-team {
    padding: 60px 20px;
    background-color: #f9f9f9;
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
    color: #666;
  }
  
  .team-grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px;
  }
  
  .team-member {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .team-member:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .profile-image img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  .team-member h3 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .team-member .title {
    font-size: 1rem;
    color: #777;
    margin-bottom: 15px;
    font-style: italic;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: left;
  }
  
  .bio {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
    text-align: left;
  }
  
  .social-links a {
    margin: 0 10px;
    text-decoration: none;
  }
  
  .social-links img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  
  .social-links i {
    font-size: 30px;
    color: #007bff;
    margin: 0 10px;
    transition: color 0.3s ease;
  }
  
  .social-links i:hover {
    color: #0056b3;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .team-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .team-grid {
      grid-template-columns: 1fr;
    }
  
    .team-member {
      padding: 20px;
    }
  }
  </style>
  