<template>
  <div class="fu-flex fu-flex-column fu-height-viewport" v-bind:class="{ 'fu-theme-dark': dark }">
    <Header></Header>
    <div class="fu-grid fu-main-center fu-cross-center fu-height-1-1 fu-margin-bottom-xlarge">
      <nuxt />
    </div>
    <div class="fu-position-fixed fu-position-bottom-right fu-margin-medium">
      <button class="fu-button fu-icon-button" @click.stop="dark = !dark, sun = !sun, moon = !moon">
        <i v-bind:class="{ 'far fa-sun': sun, 'fas fa-moon': moon }"></i>
      </button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      dark: true,
      sun: false,
      moon: true
    };
  }
};
</script>
