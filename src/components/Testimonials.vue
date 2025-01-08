<template>
    <section class="testimonials">
      <div class="container">
        <!-- Section Title -->
        <div class="testimonials-header">
          <h2 class="testimonials-title">What Our Students Say</h2>
          <p class="testimonials-subtitle">
            Read real stories from our students who have transformed their careers with our courses.
          </p>
        </div>
  
        <!-- Testimonial Slider -->
        <div class="testimonials-slider">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-content">
              <p class="testimonial-text">"{{ testimonial.feedback }}"</p>
              <p class="testimonial-author">- {{ testimonial.name }}</p>
              <p class="testimonial-course">{{ testimonial.course }}</p>
            </div>
            <div class="testimonial-image">
              <img :src="testimonial.image" :alt="testimonial.name" />
            </div>
          </div>
        </div>
               <!-- Navigation Buttons -->
      <!-- <div class="testimonial-navigation">
        <button @click="prevTestimonial" :disabled="currentIndex === 0">Previous</button>
        <button @click="nextTestimonial" :disabled="currentIndex === testimonials.length - 1">Next</button>
      </div> -->
      </div>
    </section>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    name: "Testimonials",
    data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
      nextTestimonial() {
        if (this.currentIndex < this.testimonials.length - 1) {
          this.currentIndex++;
        }
      },
      prevTestimonial() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
    },
    computed: {
      ...mapState({
        testimonials: (state) => state.testimonials.allTestimonials, // Vuex state for testimonials
      }),
    },
    mounted() {
      this.$store.dispatch("testimonials/fetchTestimonials"); // Fetch testimonials on mount
    },
  };
  </script>
  
  <style scoped>
  /* Testimonials Section Styling */
  .testimonials {
    padding: 60px 20px;
    background-color: #f7f8fa;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .testimonials-header {
    margin-bottom: 40px;
  }
  
  .testimonials-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #003d99;
  }
  
  .testimonials-subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-top: 10px;
  }
  
  .testimonials-slider {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    overflow: hidden;
  }
  
  .testimonial-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  .testimonial-content {
    margin-bottom: 20px;
  }
  
  .testimonial-text {
    font-size: 1.2rem;
    color: #444;
    margin-bottom: 10px;
    font-style: italic;
  }
  
  .testimonial-author {
    font-size: 1rem;
    font-weight: bold;
    color: #003d99;
  }
  
  .testimonial-course {
    font-size: 0.9rem;
    color: #777;
  }
  
  .testimonial-image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 10px;
  }
  .testimonial-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.testimonial-navigation button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #003d99; /* Button background color */
  color: white; /* Button text color */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Transition for hover effect */
}

.testimonial-navigation button:hover:not(:disabled) {
  background-color: #0056b3; /* Darker shade on hover */
}

.testimonial-navigation button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

  /* Responsive Design */
  @media (max-width: 1024px) {
    .testimonials-slider {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .testimonials-slider {
      grid-template-columns: 1fr;
    }
  
    .testimonials-title {
      font-size: 2rem;
    }
  
    .testimonials-subtitle {
      font-size: 1rem;
    }
  }
  </style>
  