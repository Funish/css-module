<template>
  <div class="fu-flex fu-flex-column fu-height-viewport">
    <Header></Header>
    <div class="fu-grid fu-main-center fu-cross-center fu-height-1-1 fu-margin-bottom-xlarge">
      <nuxt />
    </div>
    <Footer></Footer>
    <style>
  ::-webkit-scrollbar {
    background: transparent;
  }
    </style>
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
