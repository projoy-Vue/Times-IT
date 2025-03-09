<template>
    <div class="enrollment-card">
      <div class="pricing">
        <div class="current-price">
          ${{ course.discountPrice || course.price }}
          <span v-if="course.discountPrice" class="original-price">
            ${{ course.price }}
          </span>
        </div>
        <span class="discount" v-if="course.discountPrice">
          {{ discountPercentage }}% OFF
        </span>
      </div>
  
      <button class="enroll-button" @click="handleEnroll">
        {{ enrollmentButtonText }} Enroll for ${{ course.discountPrice || course.price }}
      </button>
  
      <div class="course-details">
        <div class="detail-item">
          <i class="fas fa-play-circle"></i>
          <span>{{ totalLessons }} Lessons</span>
        </div>
        <div class="detail-item">
          <i class="fas fa-chart-line"></i>
          <span>{{ course.level }} Level</span>
        </div>
        <div class="detail-item">
          <i class="fas fa-calendar-alt"></i>
          <span>Starts {{ formattedStartDate }}</span>
        </div>
      </div>
  
      <div class="enrollment-status">
        <i class="fas fa-users"></i>
        <span>{{ course.enrollmentStatus }} for enrollment</span>
      </div>
    </div>
  </template>
  <script>

  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('courses', ['getCourseById']),
      course() {
        return this.getCourseById(Number(this.$route.params.id)) || {};
      },
      discountPercentage() {
        if (!this.course.discountPrice) return 0;
        return Math.round(((this.course.price - this.course.discountPrice) / this.course.price) * 100);
      },
      formattedStartDate() {
        return new Date(this.course.startDate).toLocaleDateString();
      },
      totalLessons() {
        return this.course.curriculum?.reduce((acc, mod) => acc + mod.lessons.length, 0) || 0;
      }
    },
    methods: {
      handleEnroll() {
        // Enrollment logic
        alert("Enrollment process initiated!");
      }
    }
  };
  </script>
  
  <style scoped>
  .enrollment-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .pricing {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .current-price {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2d3436;
  }
  
  .original-price {
    font-size: 1.2rem;
    color: #636e72;
    text-decoration: line-through;
    margin-left: 0.5rem;
  }
  
  .discount {
    display: block;
    color: #00b894;
    font-weight: bold;
    margin-top: 0.5rem;
  }
  
  .enroll-button {
    width: 100%;
    padding: 1.2rem;
    background: #6c5ce7;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.2s;
    z-index: 1;
  }
  
  .enroll-button:hover {
    background: #5b4bc4;
  }
  
  .course-details {
    margin: 2rem 0;
    padding: 1rem 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  
  .detail-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    color: #636e72;
  }
  
  .detail-item i {
    width: 25px;
    color: #6c5ce7;
  }
  
  .enrollment-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #00b894;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .enrollment-card {
      margin-top: 2rem;
    }
    
    .current-price {
      font-size: 2rem;
    }
  }
  </style>