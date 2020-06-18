<template>
  <div>
    <Header></Header>
    <div class="fu-position-center">
      <nuxt class="fu-margin-bottom-xlarge"/>
    </div>
    <Footer class="fu-position-bottom"></Footer>
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
