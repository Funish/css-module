<template>
  <div
    class="fu-flex fu-flex-column fu-background"
    v-bind:class="{'fu-theme-dark': dark}"
    style="min-height: 100vh;"
  >
    <Header></Header>
    <div class="fu-padding-horizontal-auto fu-flex-1">
      <Testheader></Testheader>
      <nuxt />
    </div>
    <div class="fu-position-fixed fu-position-bottom-right fu-margin-medium">
      <button
        class="fu-button fu-icon-button fu-button-contained fu-button-fade"
        @click.stop="(dark = !dark), (sun = !sun), (moon = !moon)"
      >
        <i v-bind:class="{'far fa-sun': sun, 'fas fa-moon': moon}"></i>
      </button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';
import Testheader from '~/components/test-header.vue';

export default {
  components: {
    Header,
    Footer,
    Testheader
  },
  data() {
    return {
      dark: false,
      sun: true,
      moon: false
    };
  }
};
</script>
