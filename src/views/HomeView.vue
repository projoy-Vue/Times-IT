<template>
  <div>
    <HeroSection />
    <KeyFeatures />
    <PopularCourses />
    <Testimonials />
    <NewsletterSignup />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import KeyFeatures from '../components/KeyFeatures.vue';
import PopularCourses from '../components/PopularCourses.vue';
import Testimonials from '../components/Testimonials.vue';
import NewsletterSignup from '../components/NewsletterSignup.vue';


export default {
  components: {
    HeroSection,
    KeyFeatures,
    PopularCourses,
    Testimonials,
    NewsletterSignup,
  },
};
</script>
