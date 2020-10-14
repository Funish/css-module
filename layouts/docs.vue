<template>
  <div class="fun-flex fun-flex-column">
    <Header></Header>
    <div class="fun-flex fun-main-center">
      <Sidebar></Sidebar>
      <div
        class="fun-markdown-body fun-padding-horizontal-auto fun-width-1-1 fun-max-width-xlarge"
      >
        <nuxt />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';
import Sidebar from '~/components/docs-sidebar.vue';

export default {
  components: {
    Header,
    Footer,
    Sidebar
  }
};
</script>
