<template>
  <div>
    <Header></Header>
    <nuxt />
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

<style>
body {
  background-image: url(/images/star-bg.svg);
  background-repeat: repeat-x;
  background-position: center 0, 0 0, 0 0;
}

@media (pointer: fine) {
  ::-webkit-scrollbar {
    background-color: #f7f7f7;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.48);
    border-radius: 8px;
    border: solid #f7f7f7;
  }
}
</style>
