<template>
    <div class="courses">
     <CourseHeader/>
     <CourseGrid/>
     <SubscriptionPlans/>
     <ResourcesDownload/>
     <JoinOurCommunity/>
     <!-- <RelatedCourses/> -->
     <CourseStatistics/>
     <CallToAction/>



    </div>
</template>
<script>

import CourseHeader from '../components/Course/CourseHeader.vue';
 import CourseGrid from '../components/Course/CourseGrid.vue';
import SubscriptionPlans from '../components/Course/SubscriptionPlans.vue';
import ResourcesDownload from '../components/Course/ResourcesDownload.vue';
import JoinOurCommunity from '../components/Course/JoinOurCommunity.vue';
// import RelatedCourses from '../components/Course/RelatedCourses.vue';
 import CourseStatistics from '../components/Course/CourseStatistics.vue';
 import CallToAction from '../components/Course/CallToAction.vue';

export default {
    components: {
        CourseHeader,
         CourseGrid,
         SubscriptionPlans,
         ResourcesDownload,
         JoinOurCommunity,
        //  RelatedCourses
          CourseStatistics,
          CallToAction
    },
}

</script>
<style>


</style>