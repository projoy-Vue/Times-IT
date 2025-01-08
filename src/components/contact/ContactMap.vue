<template>
    <section class="contact-map">
      <div class="container">
        <h2 class="section-title">Our Location</h2>
        <p class="section-subtitle">
          Visit our academy at the following address or explore our location on the map below.
        </p>
        <div class="map-container">
          <iframe
            :src="mapSrc"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="address">
          <p><strong>Address:</strong> 123 Academy Avenue, Suite 100, Cityname, Country</p>
          <p><strong>Email:</strong> contact@academy.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactMap",
    data() {
      return {
        // Replace the src link with your Google Maps Embed link
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509613!2d144.9537353153159!3d-37.81627944202143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f5a88e77%3A0x5ed8a5e3d5c97ff9!2s123%20Academy%20Avenue!5e0!3m2!1sen!2s!4v1696522317455!5m2!1sen!2s",
      };
    },
  };
  </script>
  
  <style scoped>
  /* Contact Map Styles */
  .contact-map {
    background-color: #FFFFFF;
    padding: 4rem 1rem;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .map-container {
    width: 100%;
    margin-bottom: 2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  iframe {
    border: none;
  }
  
  .address {
    font-size: 1rem;
    color: #333;
    text-align: left;
    line-height: 1.8;
  }
  
  .address p {
    margin-bottom: 0.5rem;
  }
  
  .address strong {
    color: #007bff;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .section-subtitle {
      font-size: 1rem;
    }
  
    .address {
      font-size: 0.9rem;
    }
  }
  </style>
  