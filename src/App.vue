<template>
  <Header />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
    window.addEventListener("wheel", this.handleSmoothScroll);
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleSmoothScroll);
  },
  methods: {
    handleSmoothScroll(event) {
      const scrollTarget = window.scrollY + event.deltaY;
      this.smoothScrollTo(scrollTarget);
    },
    smoothScrollTo(targetPosition) {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 600;
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
/* Corrected transition properties */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
