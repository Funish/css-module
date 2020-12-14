<template>
  <div class="fun-flex fun-flex-column" style="min-height: 100vh;">
    <Header></Header>
    <div class="fun-flex fun-main-center fun-flex-1">
      <Sidebar></Sidebar>
      <div class="fun-markdown-body fun-width-1-1 fun-max-width-xlarge">
        <div class="fun-margin-horizontal-medium">
          <nuxt />
        </div>
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
