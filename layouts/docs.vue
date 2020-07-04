<template>
  <div class="fu-flex fu-flex-column">
    <Header></Header>
    <div class="fu-flex fu-flex-1">
      <Sidebar class="fu-visible@m"></Sidebar>
      <div class="fu-markdown-body fu-padding-horizontal-auto fu-width-1-1">
        <nuxt />
      </div>
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
  }
};
</script>