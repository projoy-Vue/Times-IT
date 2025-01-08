<template>
  <div class="about">
   <AboutHero />
    <AcademyOverview />
   <MissionVision />
   <CoreValues />
   <MeetTheTeam />
   <Achievements />
   <CallToAction />
  
  </div>
</template>
<script>
import AboutHero from '../components/About/AboutHero.vue';
import AcademyOverview from '../components/About/AcademyOverview.vue';
import MissionVision from '../components/About/MissionVision.vue';
import CoreValues from '../components/About/CoreValues.vue';
import MeetTheTeam from '../components/About/MeetTheTeam.vue';
import Achievements from '../components/About/Achievements.vue';
import CallToAction from '../components/About/CallToAction.vue';
export default {
  components: {
    AboutHero,
    AcademyOverview,
    MissionVision,
    CoreValues,
    MeetTheTeam,
    Achievements,
    CallToAction,
  },
  
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    padding-top: 67px;
    min-height: 100vh;
  }
   
}
</style>
