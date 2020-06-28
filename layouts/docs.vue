<template>
  <div class="fu-position-relative">
    <Header></Header>
    <div class="fu-flex">
      <Sidebar class="fu-border-left fu-border-right fu-border-fade fu-width-small fu-visible@m"></Sidebar>
      <div
        class="fu-markdown-body fu-padding-horizontal-auto fu-width-1-1"
      >
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

<style>
.fu-border-left.custom-aside {
  border-left: none;
}

[dir="rtl"] .fu-border-left.custom-aside {
  border-left: 1px solid;
  border-right: none;
}
</style>