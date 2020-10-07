<template>
  <div class="fun-padding-auto">
    <div class="fun-padding-bottom-xlarge">
      <h1>页面不存在</h1>
      <button
        onclick="window.history.back();"
        class="fun-button fun-button-contained"
      >
        返回上一页
      </button>
      <nuxt-link to="/" class="fun-button">首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'home'
};
</script>
