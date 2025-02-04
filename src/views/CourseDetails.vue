<template>
    <div class="coursedetails">
    <CourseHero />
    <CourseOverview/>
    <CourseCurriculum/>
    <MeetTheTeam/>
    
</div>
</template>
<script>



import CourseHero from '../components/CourseDetails/CourseHeroSection.vue'
 import CourseOverview from '../components/CourseDetails/CourseOverview.vue'
import MeetTheTeam from '../components/About/MeetTheTeam.vue'
import CourseCurriculum from '../components/CourseDetails/CourseCurriculum.vue'
export default {
    components: {
        CourseHero,
         CourseOverview,
        MeetTheTeam,
        CourseCurriculum
    },

};
</script>

<style scoped>
.coursedetails{
    /* display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; */
}

</style>