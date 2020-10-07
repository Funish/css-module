<template>
  <div v-html="docs.default"></div>
</template>

<script>
export default {
  async asyncData({params, payload}) {
    if (payload) return {docs: payload};
    else
      return {
        docs: await require(`~/README_zh.md`)
      };
  },
  layout: 'docs'
};
</script>
