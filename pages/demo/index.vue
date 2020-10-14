<template>
  <div>
    <div
      class="fun-grid fun-child-width-1-1 fun-grid-row-small fun-grid-column-small fun-grid-template-row-xsmall fun-grid-template-column-small fun-padding-auto"
    >
      <nuxt-link
        class="fun-card fun-card-action"
        v-for="(item, i) in demo_items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <div
          class="fun-text-title fun-position-center"
          v-text="item.title"
        ></div>
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
