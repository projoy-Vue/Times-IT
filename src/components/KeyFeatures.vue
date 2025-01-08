<template>
  <section class="key-features">
    <div class="container">
      <!-- Section Title -->
      <div class="features-header">
        <h2 class="features-title">Why Choose Our IT Academy?</h2>
        <p class="features-subtitle">
          Explore the benefits of joining our offline IT courses and take your skills to the next level.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="icon-wrapper">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "fas fa-chalkboard-teacher",
          title: "Expert Instructors",
          description: "Learn from industry experts with years of experience in their fields.",
        },
        {
          icon: "fas fa-laptop-code",
          title: "Hands-on Training",
          description: "Engage in practical exercises to gain real-world skills.",
        },
        {
          icon: "fas fa-user-friends",
          title: "Collaborative Learning",
          description: "Learn alongside peers in an interactive offline environment.",
        },
        {
          icon: "fas fa-certificate",
          title: "Certification",
          description: "Receive a recognized certificate upon course completion.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Key Features Section Styling */
.key-features {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  margin-bottom: 40px;
}

.features-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #003d99;
}

.features-subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.icon-wrapper {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #003d99;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-title {
    font-size: 2rem;
  }

  .features-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    margin: 0 auto;
    max-width: 400px;
  }

  .features-title {
    font-size: 1.8rem;
  }

  .features-subtitle {
    font-size: 0.9rem;
  }
}
</style>
