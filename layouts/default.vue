<template>
  <div class="fu-position-relative" style="min-height:100vh;">
    <Header></Header>
    <nuxt class="fu-padding-large" />
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
  }
};
</script>
