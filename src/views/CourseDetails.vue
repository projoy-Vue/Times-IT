<template>
    <div class="course-details-page">
      <CourseHero />
      <div class="course-details-container">
        <div class="main-content">
          <CourseOverview />
          <CourseCurriculum />
          <CourseInstructor />
          <CourseReviews />
          <RelatedCourses />
        </div>
        <div class="sidebar">
          <EnrollmentCard />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CourseHero from '@/components/CourseDetails/CourseHero.vue';
  import CourseOverview from '@/components/CourseDetails/CourseOverview.vue';
  import CourseCurriculum from '@/components/CourseDetails/CourseCurriculum.vue';
  import CourseInstructor from '@/components/CourseDetails/CourseInstructor.vue';
  import CourseReviews from '@/components/CourseDetails/CourseReviews.vue';
  import EnrollmentCard from '@/components/CourseDetails/EnrollmentCard.vue';
  import RelatedCourses from '@/components/CourseDetails/RelatedCourses.vue'; 
  
  export default {
    components: {
      CourseHero,
      CourseOverview,
      CourseCurriculum,
      CourseInstructor,
      CourseReviews,
      EnrollmentCard,
      RelatedCourses
    }
  };
  </script>
  
  <style scoped>
  .course-details-container {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  .sidebar {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }
  
  @media (max-width: 768px) {
    .course-details-container {
      grid-template-columns: 1fr;
    }
  }
  </style>