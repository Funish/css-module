<template>
  <header class="fu-navbar">
    <div class="fu-flex-inline fu-flex-auto">
      <div class="fu-navbar-item fu-text-title">
        <nuxt-link to="/" class="fu-navbar-link">Funish CSS</nuxt-link>
      </div>
      <div class="fu-navbar-item">
        <nuxt-link to="/docs/" class="fu-navbar-link">文档</nuxt-link>
      </div>
      <div class="fu-navbar-item">
        <nuxt-link to="/test/" class="fu-navbar-link">测试</nuxt-link>
      </div>
      <div class="fu-navbar-item">
        <a target="_blank" href="https://github.com/Funish/css-module" class="fu-navbar-link"><i class="fab fa-github"></i></a>
      </div>
    </div>
    <div class="fu-hidden@m">
      <div class="fu-navbar-item">
        <details class="fu-dropdown">
          <summary>
            <i class="fas fa-bars"></i>
          </summary>
          <div class="fu-dropdown-menu fu-dropdown-menu-left">
            <Sidebar class="fu-width-1-1"></Sidebar>
          </div>
        </details>
      </div>
    </div>
  </header>
</template>


<script>
import Sidebar from "~/components/docs-sidebar.vue";

export default {
  components: {
    Sidebar
  }
};
</script>

