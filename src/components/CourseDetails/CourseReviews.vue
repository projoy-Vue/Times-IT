<template>
    <section class="course-reviews">
      <h2>Student Reviews</h2>
      
      <div class="reviews-summary">
        <div class="average-rating">
          <span class="rating">4.8</span>
          <div class="stars">
            <i v-for="n in 5" :key="n" class="fas fa-star"></i>
          </div>
          <span class="total-reviews">(1,234 reviews)</span>
        </div>
      </div>
  
      <div class="reviews-list">
        <div 
          v-for="review in course.reviews" 
          :key="review.user"
          class="review-card"
        >
          <div class="review-header">
            <div class="user-info">
              <div class="user-avatar">{{ review.user.charAt(0) }}</div>
              <div class="user-details">
                <h4>{{ review.user }}</h4>
                <div class="review-rating">
                  <i 
                    v-for="n in 5" 
                    :key="n" 
                    :class="['fas fa-star', { 'active': n <= review.rating }]"
                  ></i>
                </div>
              </div>
            </div>
            <span class="review-date">2 weeks ago</span>
          </div>
          <p class="review-content">{{ review.comment }}</p>
        </div>
      </div>
    </section>
  </template>
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('courses', ['getCourseById']),
      course() {
        return this.getCourseById(Number(this.$route.params.id)) || {};
      }
    }
  };
  </script>
  
  <style scoped>
  .course-reviews {
    padding: 2rem;
    background: white;
    border-radius: 8px;
    margin-top: 2rem;
  }
  
  .reviews-summary {
    text-align: center;
    margin: 2rem 0;
  }
  
  .average-rating {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: #f8f9fa;
    padding: 1rem 2rem;
    border-radius: 8px;
  }
  
  .rating {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2d3436;
  }
  
  .stars {
    color: #ffd700;
  }
  
  .total-reviews {
    color: #636e72;
    font-size: 0.9rem;
  }
  
  .reviews-list {
    margin-top: 2rem;
  }
  
  .review-card {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
  }
  
  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #6c5ce7;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  .review-rating .fa-star {
    color: #ddd;
  }
  
  .review-rating .fa-star.active {
    color: #ffd700;
  }
  
  .review-date {
    color: #636e72;
    font-size: 0.9rem;
  }
  
  .review-content {
    color: #2d3436;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .review-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
  </style>