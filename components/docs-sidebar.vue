<template>
  <aside>
    <details class="fun-navbar-drawer">
      <summary
        class="fun-position-fixed fun-position-bottom-right fun-position-z-index fun-margin-medium"
      >
        <span
          class="fun-button fun-button-raised fun-icon-button fun-border-small"
        >
          <i class="fas fa-align-right"></i>
        </span>
      </summary>

      <div>
        <header class="fun-menu-header fun-text-title">Funish CSS</header>
        <nuxt-link
          v-for="(item, i) in home_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fun-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
        <hr />
        <header class="fun-menu-header">
          <div class="fun-text-title">布局</div>
          <div class="fun-text-subtitle">Layouts</div>
        </header>
        <nuxt-link
          v-for="(item, i) in layouts_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fun-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
        <hr />
        <header class="fun-menu-header">
          <div class="fun-text-title">盒模型</div>
          <div class="fun-text-subtitle">Box model</div>
        </header>
        <nuxt-link
          v-for="(item, i) in box_model_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fun-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
        <hr />
        <header class="fun-menu-header">
          <div class="fun-text-title">文本</div>
          <div class="fun-text-subtitle">Text</div>
        </header>
        <nuxt-link
          v-for="(item, i) in text_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fun-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
        <hr />
        <header class="fun-menu-header">
          <div class="fun-text-title">控件</div>
          <div class="fun-text-subtitle">Controls</div>
        </header>
        <nuxt-link
          v-for="(item, i) in controls_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fun-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
      </div>
    </details>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      home_items: [
        {
          title: '简介',
          to: '/docs/'
        },
        {
          title: '设计',
          to: '/docs/design'
        },
        {
          title: '基础',
          to: '/docs/base'
        },
        {
          title: '关于',
          to: '/docs/about'
        }
      ],
      layouts_items: [
        {
          title: 'Flex',
          to: '/docs/flex'
        },
        {
          title: 'Grid',
          to: '/docs/grid'
        },
        {
          title: 'Position',
          to: '/docs/position'
        },
        {
          title: 'Visibility',
          to: '/docs/visibility'
        }
      ],
      box_model_items: [
        {
          title: 'Margin',
          to: '/docs/margin'
        },
        {
          title: 'Padding',
          to: '/docs/padding'
        },
        {
          title: 'Width',
          to: '/docs/width'
        },
        {
          title: 'Height',
          to: '/docs/height'
        }
      ],
      text_items: [
        {
          title: 'Text',
          to: '/docs/text'
        },
        {
          title: 'Markdown',
          to: '/docs/markdown'
        }
      ],
      controls_items: [
        {
          title: 'Background',
          to: '/docs/background'
        },
        {
          title: 'Button',
          to: '/docs/button'
        },
        {
          title: 'Card',
          to: '/docs/card'
        },
        {
          title: 'Dropdown',
          to: '/docs/dropdown'
        },
        {
          title: 'Form',
          to: '/docs/form'
        },
        {
          title: 'Menu',
          to: '/docs/menu'
        },
        {
          title: 'Navbar',
          to: '/docs/navbar'
        },
        {
          title: 'Pagination',
          to: '/docs/pagination'
        },
        {
          title: 'Progress',
          to: '/docs/progress'
        },
        {
          title: 'Utility',
          to: '/docs/utility'
        }
      ]
    };
  }
};
</script>
