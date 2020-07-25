<template>
  <div class="fu-flex fu-flex-column fu-height-viewport">
    <Header></Header>
    <div class="fu-flex fu-main-center fu-cross-center fu-flex-1">
      <nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
