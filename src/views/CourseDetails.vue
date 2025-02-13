<template>
    <div class="coursedetails">

    <CourseHeroSection 
    :courseTitle="title"
    :courseTagline="tagline"
    :heroImage="heroImage"
    
      />


    <CourseOverview/>
    <CourseCurriculum/>
    <MeetTheTeam/>
    
</div>
</template>
<script>
import { mapGetters } from 'vuex';



import CourseHeroSection from '../components/CourseDetails/CourseHeroSection.vue'
 import CourseOverview from '../components/CourseDetails/CourseOverview.vue'
import MeetTheTeam from '../components/About/MeetTheTeam.vue'
import CourseCurriculum from '../components/CourseDetails/CourseCurriculum.vue'

export default {
    components: {
        CourseHeroSection,
        CourseOverview,
        MeetTheTeam,
        CourseCurriculum
    },

    
    created() {
        this.$store.dispatch('courses/fetchCourse', this.$route.params.id);
    }
};


</script>

<style scoped>


</style>