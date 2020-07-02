<template>
  <header
    class="fu-padding-vertical-medium fu-flex fu-flex-wrap fu-grid-row-small fu-grid-column-small"
  >
    <details class="fu-dropdown">
      <summary>
        <div class="fu-button fu-button-outlined">Layouts</div>
      </summary>
      <div class="fu-dropdown-menu fu-dropdown-menu-bottom">
        <nuxt-link to="/test/flex" class="fu-menu-item">Flex</nuxt-link>
        <nuxt-link to="/test/grid" class="fu-menu-item">Grid</nuxt-link>
        <nuxt-link to="/test/position" class="fu-menu-item">Position</nuxt-link>
        <nuxt-link to="/test/visibility" class="fu-menu-item">Visibility</nuxt-link>
      </div>
    </details>
    <details class="fu-dropdown">
      <summary>
        <div class="fu-button fu-button-outlined">Box models</div>
      </summary>
      <div class="fu-dropdown-menu fu-dropdown-menu-bottom">
        <nuxt-link to="/test/margin" class="fu-menu-item">Margin</nuxt-link>
        <nuxt-link to="/test/padding" class="fu-menu-item">Padding</nuxt-link>
        <nuxt-link to="/test/width" class="fu-menu-item">Width</nuxt-link>
        <nuxt-link to="/test/height" class="fu-menu-item">Height</nuxt-link>
      </div>
    </details>
    <details class="fu-dropdown">
      <summary>
        <div class="fu-button fu-button-outlined">Text</div>
      </summary>
      <div class="fu-dropdown-menu fu-dropdown-menu-bottom">
        <nuxt-link to="/test/text" class="fu-menu-item">Text</nuxt-link>
        <nuxt-link to="/test/markdown" class="fu-menu-item">Markdown</nuxt-link>
      </div>
    </details>
    <details class="fu-dropdown">
      <summary>
        <div class="fu-button fu-button-outlined">Controls</div>
      </summary>
      <div class="fu-dropdown-menu fu-dropdown-menu-bottom">
        <nuxt-link to="/test/box" class="fu-menu-item">Box</nuxt-link>
        <nuxt-link to="/test/button" class="fu-menu-item">Button</nuxt-link>
        <nuxt-link to="/test/dropdown" class="fu-menu-item">Dropdown</nuxt-link>
        <nuxt-link to="/test/form" class="fu-menu-item">Form</nuxt-link>
        <nuxt-link to="/test/menu" class="fu-menu-item">Menu</nuxt-link>
        <nuxt-link to="/test/navbar" class="fu-menu-item">Navbar</nuxt-link>
        <nuxt-link to="/test/utility" class="fu-menu-item">Utility</nuxt-link>
      </div>
    </details>
  </header>
</template>