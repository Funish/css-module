<template>
  <div class="fun-flex fun-flex-column fun-height-viewport">
    <Header></Header>
    <div class="fun-flex fun-main-center fun-cross-center fun-flex-1">
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
    Footer
  }
};
</script>
