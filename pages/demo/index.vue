<template>
  <div class="fun-padding-vertical-auto">
    <div
      class="fun-grid fun-grid-small fun-grid-column-1-2@s fun-grid-column-1-3@m fun-grid-column-1-4@l"
    >
      <nuxt-link
        class="fun-card"
        v-for="(item, i) in demo_items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <div class="fun-card-action">
          <div class="fun-card-header">
            <div class="fun-text-title" v-text="item.title"></div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo_items: [
        {
          title: 'Markdown',
          to: '/demo/markdown'
        },
        {
          title: 'Login',
          to: '/demo/login'
        }
      ]
    };
  }
};
</script>
