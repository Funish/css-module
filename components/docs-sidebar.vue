<template>
  <aside>
    <div class="fu-margin-medium fu-width-small fu-visible@m">
      <div class="fu-box fu-menu fu-padding-vertical-medium">
        <div class="fu-menu-header fu-text-subtitle">Funish CSS</div>
        <nuxt-link
          v-for="(item, i) in home_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fu-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
        <hr />
        <div class="fu-menu-header fu-text-subtitle">布局</div>
        <nuxt-link
          v-for="(item, i) in layouts_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fu-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
        <hr />
        <div class="fu-menu-header fu-text-subtitle">盒模型</div>
        <nuxt-link
          v-for="(item, i) in box_model_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fu-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
        <hr />
        <div class="fu-menu-header fu-text-subtitle">文本</div>
        <nuxt-link
          v-for="(item, i) in text_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fu-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
        <hr />
        <div class="fu-menu-header fu-text-subtitle">控件</div>
        <nuxt-link
          v-for="(item, i) in controls_items"
          :key="i"
          :to="item.to"
          router
          exact
          class="fu-menu-item"
        >
          <div v-text="item.title"></div>
        </nuxt-link>
      </div>
    </div>
    <details class="fu-navbar-drawer fu-hidden@m">
      <summary class="fu-position-fixed" style="bottom: 20px; right: 20px;">
        <span
          class="fu-button fu-button-contained fu-icon-button fu-border-small"
        >
          <i class="fas fa-align-right"></i>
        </span>
      </summary>

      <div class="fu-menu">
        <div class="fu-padding-vertical-medium">
          <div class="fu-menu-header fu-text-subtitle">Funish CSS</div>
          <nuxt-link
            v-for="(item, i) in home_items"
            :key="i"
            :to="item.to"
            router
            exact
            class="fu-menu-item"
          >
            <div v-text="item.title"></div>
          </nuxt-link>
          <hr />
          <div class="fu-menu-header fu-text-subtitle">布局</div>
          <nuxt-link
            v-for="(item, i) in layouts_items"
            :key="i"
            :to="item.to"
            router
            exact
            class="fu-menu-item"
          >
            <div v-text="item.title"></div>
          </nuxt-link>
          <hr />
          <div class="fu-menu-header fu-text-subtitle">盒模型</div>
          <nuxt-link
            v-for="(item, i) in box_model_items"
            :key="i"
            :to="item.to"
            router
            exact
            class="fu-menu-item"
          >
            <div v-text="item.title"></div>
          </nuxt-link>
          <hr />
          <div class="fu-menu-header fu-text-subtitle">文本</div>
          <nuxt-link
            v-for="(item, i) in text_items"
            :key="i"
            :to="item.to"
            router
            exact
            class="fu-menu-item"
          >
            <div v-text="item.title"></div>
          </nuxt-link>
          <hr />
          <div class="fu-menu-header fu-text-subtitle">控件</div>
          <nuxt-link
            v-for="(item, i) in controls_items"
            :key="i"
            :to="item.to"
            router
            exact
            class="fu-menu-item"
          >
            <div v-text="item.title"></div>
          </nuxt-link>
        </div>
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
          title: 'Box',
          to: '/docs/box'
        },
        {
          title: 'Button',
          to: '/docs/button'
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
          title: 'Utility',
          to: '/docs/utility'
        }
      ]
    };
  }
};
</script>
