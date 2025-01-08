<template>
    <div class="coursedetails">
    <CourseDetails/>
    <CourseOverview/>
    <MeetTheTeam/>
    <CourseCurriculum/>
</div>
</template>
<script>
import CourseDetails from '../components/CourseDetails/detailsHeader.vue'
import CourseOverview from '../components/CourseDetails/CourseOverview.vue'
import MeetTheTeam from '../components/About/MeetTheTeam.vue'
import CourseCurriculum from '../components/CourseDetails/CourseCurriculum.vue'
export default {
    components: {
        CourseDetails,
        CourseOverview,
        MeetTheTeam,
        CourseCurriculum
    }
}
</script>
<style scoped>
.coursedetails{
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* height: 100vh; */
}

</style>