<template>
  <div
    class="fu-flex fu-flex-column"
    v-bind:class="{ 'fu-theme-dark': dark }"
    style="min-height:100vh;"
  >
    <Header></Header>
    <div class="fu-flex fu-flex-1">
      <Sidebar class="fu-visible@m"></Sidebar>
      <div class="fu-markdown-body fu-padding-horizontal-auto fu-width-1-1">
        <nuxt />
      </div>
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
import Sidebar from "~/components/docs-sidebar.vue";

export default {
  components: {
    Header,
    Footer,
    Sidebar
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