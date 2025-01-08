<template>
    <section class="join-community">
      <!-- Left Section: Content -->
      <div class="community-content">
        <h2 class="title">Join Our Community</h2>
        <p class="description">
          Be a part of an amazing community of learners, creators, and professionals. 
          Get access to exclusive resources, events, and networking opportunities.
        </p>
  
        <!-- Community Stats -->
        <div class="stats">
          <div class="stat-item">
            <h3>10,000+</h3>
            <p>Members</p>
          </div>
          <div class="stat-item">
            <h3>500+</h3>
            <p>Events Hosted</p>
          </div>
          <div class="stat-item">
            <h3>1,000+</h3>
            <p>Projects Shared</p>
          </div>
        </div>
  
        <!-- Call-to-Action Button -->
        <button @click="NavigationTopage" class="cta-btn">Join Now</button>
  
        <!-- Social Media Icons -->
      </div>
  
      <!-- Right Section: Visual -->
      <div class="community-image">
        <img src="https://picsum.photos/536/354"
         alt="Community Illustration" 

         />
       
      </div>
    </section>
  </template>
  <script>
  import { mapGetters } from "vuex";
  
  export default {
    computed: {
      ...mapGetters("community", ["membersCount", "eventsCount", "projectsCount"]),
    },
    methods: {
      NavigationTopage() {
        this.$router.push("/community");
      },
    },
  };
  </script>
  <style scoped>
  .join-community {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
  }
  
  .community-content {
    flex: 1;
    max-width: 50%;
    padding: 1rem;
  }
  
  .title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .description {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
  }
  
  .stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-item h3 {
    font-size: 2rem;
    color: #007bff;
  }
  
  .stat-item p {
    font-size: 1rem;
    color: #666;
  }
  
  .cta-btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-btn:hover {
    background-color: #0056b3;
  }
  
  .platform-links h4 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.platform-link {
  display: block;
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  margin: 0.5rem 0;
}


.platform-link:hover {
  text-decoration: underline;
}
  .community-image {
    flex: 1;
    max-width: 40%;
    padding: 1rem;
    text-align: center;
  }
  
  .community-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    .join-community {
      flex-direction: column;
    }
  
    .community-content {
      max-width: 100%;
    }
  
    .community-image {
      max-width: 100%;
    }
  }
  </style>
  