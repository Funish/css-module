<template>
  <div class="fun-flex fun-flex-column" style="min-height: 100vh;">
    <Header></Header>
    <div class="fun-padding-horizontal-auto fun-flex-1">
      <Testheader></Testheader>
      <nuxt />
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
