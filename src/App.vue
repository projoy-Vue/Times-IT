<template>
  <Header />
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },

  mounted() {
    // Custom smooth scroll using requestAnimationFrame
    window.addEventListener("wheel", this.handleSmoothScroll);
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleSmoothScroll);
  },
  methods: {
    handleSmoothScroll(event) {
      // Use requestAnimationFrame for smoother scroll
      const scrollTarget = window.scrollY + event.deltaY;
      this.smoothScrollTo(scrollTarget);
    },
    smoothScrollTo(targetPosition) {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 600; // duration in ms
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    },
  },
};

</script>
<style scoped>

/* Transition effect when switching between routes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}

</style>
