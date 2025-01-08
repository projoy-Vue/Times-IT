<template>
    <section class="mission-vision" id="mission-vision">
      <div class="container">
        <!-- Mission Section -->
        <div class="section mission">
          <div class="text">
            <h2>Our Mission</h2>
            <p>
              At our academy, we strive to provide world-class IT education that empowers students to achieve their career goals. 
              Through practical learning, expert guidance, and an innovative curriculum, we aim to build a strong foundation for the next generation of IT professionals.
              Our mission is to empower individuals with the knowledge and skills needed to succeed in the ever-evolving tech industry.

            </p>
          </div>
          <div class="icon">
            <img src="https://picsum.photos/536/354" alt="Mission Icon" />
          </div>
        </div>
  
        <!-- Vision Section -->
        <div class="section vision">
           <div class="icon">
             <img src="https://picsum.photos/536/354" alt="Vision Icon" />
           </div>
          <div class="text">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be a global leader in IT education, producing highly skilled professionals who are ready to tackle the challenges of the tech industry. 
              We envision creating an inclusive learning environment that fosters innovation and lifelong learning.
            </p>
          </div>
        </div>
  
        <!-- Call to Action -->
        <div class="cta-container">
          <button @click="NavigationTopage" class="cta-button">Join Us Today</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "MissionVision",
    
    methods: {
        NavigationTopage() {
            this.$router.push("/contact");
            
        },
    },
  };
  </script>
  
  <style scoped>
  .mission-vision {
    padding: 60px 20px;
    background-color: #f9f9f9;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
  
  .mission .text, .vision .text {
    margin-right: 20px;
    margin-left: 20px;
    max-width: 600px;
  }
  
  .mission h2, .vision h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .mission p, .vision p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
  }
  
  .icon img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    
  }
  
  .cta-container {
    text-align: center;
    margin-top: 30px;
  }
  
  .cta-button {
    padding: 12px 30px;
    background-color: #f57c00;
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 30px;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  
  .cta-button:hover {
    background-color: #e65100;
  }
  
  @media (max-width: 768px) {
    .section {
      flex-direction: column;
      text-align: center;
    }
    .vision {
      flex-direction: column-reverse;
    }
  
    .icon img {
      width: 100%;
      height: 100%;
    }
  
    .mission .text, .vision .text {
      margin-left: 0;
      margin-top: 20px;
    }
  
    .cta-button {
      padding: 10px 25px;
    }
  }
  </style>
  