<template>
  <header class="fu-navbar fu-position-sticky">
    <div class="fu-flex fu-main-center fu-width-1-1">
      <div class="fu-navbar-item">
        <nuxt-link to="/" class="fu-navbar-link">首页</nuxt-link>
      </div>
      <div class="fu-navbar-item">
        <nuxt-link to="/docs/" class="fu-navbar-link">文档</nuxt-link>
      </div>
      <div class="fu-navbar-item">
        <nuxt-link to="/test/" class="fu-navbar-link">测试</nuxt-link>
      </div>
    </div>
    <div class="fu-navbar-item fu-position-center-right">
      <a target="_blank" href="https://github.com/Funish/css-module">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </header>
</template>
