<template>
  <section class="hero-section">
    <div class="hero-content">
      <nav class="breadcrumb">
        <span><a href="/">Home</a> > <a href="/courses">Courses</a> > {{ courseTitle }}</span>
      </nav>
      <h1 class="course-title">{{ courseTitle }}</h1>
      <p class="course-tagline">{{ courseTagline }}</p>
      <button class="enroll-button" @click="enroll">Start Learning Today</button>
    </div>
    <div class="hero-image">
      <img :src="heroImage" alt="Course Hero Image" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    courseTitle: {
      type: String,
      required: true,
      default: "Master Vue.js - Build Professional Web Apps"
    },
    courseTagline: {
      type: String,
      required: true,
      default: "Learn Vue.js from the ground up and build powerful web applications."
    },
    heroImage: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/600x400" // Replace with actual course image URL
    },
  },
  methods: {
    enroll() {
      alert("Enrollment process initiated!");
      // Navigate to the enrollment section or page here
    },
  },
};
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: linear-gradient(to right, #4caf50, #81c784);
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 50%;
  padding: 1rem;
}

.breadcrumb {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #e0f2f1;
}

.breadcrumb a {
  color: #ffffff;
  text-decoration: none;
}

.course-title {
  font-size: 2.5rem;
  margin: 1rem 0;
  font-weight: bold;
}

.course-tagline {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.enroll-button {
  padding: 0.8rem 1.5rem;
  background: #ffffff;
  color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
}

.enroll-button:hover {
  background: #f1f8e9;
  transform: scale(1.05);
}

.hero-image {
  max-width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    padding: 1rem;
  }

  .hero-content {
    max-width: 100%;
    padding: 0.5rem;
  }

  .hero-image {
    max-width: 100%;
    margin-top: 1rem;
  }
}
</style>
