<template>
  <header class="fu-navbar-top">
    <div class="fu-flex fu-main-center fu-width-1-1">
      <nuxt-link to="/" class="fu-navbar-item fu-text-link">首页</nuxt-link>
      <nuxt-link to="/docs/" class="fu-navbar-item fu-text-link"
        >文档</nuxt-link
      >
      <nuxt-link to="/test/" class="fu-navbar-item fu-text-link"
        >测试</nuxt-link
      >
    </div>
    <div class="fu-position-center-right">
      <div class="fu-navbar-item">
        <a
          target="_blank"
          href="https://github.com/Funish/css-module"
          class="fu-button fu-icon-button"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </header>
</template>
