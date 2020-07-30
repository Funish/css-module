<template>
  <div>
    <h1>页面不存在</h1>
    <button
      onclick="window.history.back();"
      class="fu-button fu-button-contained"
    >
      返回上一页
    </button>
    <nuxt-link to="/" class="fu-button">首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'home'
};
</script>
