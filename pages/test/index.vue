<template>
  <div>
    <div class="fu-flex fu-grid-row-medium fu-grid-column-medium fu-flex-wrap fu-main-center">
      <div class="fu-box">
        <div class="fu-box-action">
          <div class="fu-box-header">
            <div class="fu-text-title">Layout</div>
          </div>
          <div class="fu-box-content">Includes Flex, Grid, Position and Visibility modules</div>
        </div>
        <div class="fu-box-footer fu-flex fu-main-end">
          <details class="fu-dropdown">
            <summary>
              <div class="fu-button fu-button-outlined" dir="rtl">
                <i class="fas fa-caret-down fu-button-icon"></i>Preview
              </div>
            </summary>
            <div class="fu-dropdown-menu fu-dropdown-menu-bottom">
              <nuxt-link to="/test/flex" class="fu-menu-item">Flex</nuxt-link>
              <nuxt-link to="/test/grid" class="fu-menu-item">Grid</nuxt-link>
              <nuxt-link to="/test/position" class="fu-menu-item">Position</nuxt-link>
              <nuxt-link to="/test/visibility" class="fu-menu-item">Visibility</nuxt-link>
            </div>
          </details>
        </div>
      </div>
      <div class="fu-box">
        <div class="fu-box-action">
          <div class="fu-box-header">
            <div class="fu-text-title">Box model</div>
          </div>
          <div class="fu-box-content">Includes Margin, Padding, Height and Width modules</div>
        </div>
        <div class="fu-box-footer fu-flex fu-main-end">
          <details class="fu-dropdown">
            <summary>
              <div class="fu-button fu-button-outlined" dir="rtl">
                <i class="fas fa-caret-down fu-button-icon"></i>Preview
              </div>
            </summary>
            <div class="fu-dropdown-menu fu-dropdown-menu-bottom">
              <nuxt-link to="/test/margin" class="fu-menu-item">Margin</nuxt-link>
              <nuxt-link to="/test/padding" class="fu-menu-item">Padding</nuxt-link>
              <nuxt-link to="/test/width" class="fu-menu-item">Width</nuxt-link>
              <nuxt-link to="/test/height" class="fu-menu-item">Height</nuxt-link>
            </div>
          </details>
        </div>
      </div>
    </div>
    <div class="fu-flex fu-grid-row-medium fu-grid-column-medium fu-flex-wrap fu-main-center">
      <div class="fu-box">
        <div class="fu-box-action">
          <div class="fu-box-header">
            <div class="fu-text-title">Text</div>
          </div>
          <div class="fu-box-content">Includes links, basic text and Markdown modules</div>
        </div>
        <div class="fu-box-footer fu-flex fu-main-end">
          <details class="fu-dropdown">
            <summary>
              <div class="fu-button fu-button-outlined" dir="rtl">
                <i class="fas fa-caret-down fu-button-icon"></i>Preview
              </div>
            </summary>
            <div class="fu-dropdown-menu fu-dropdown-menu-bottom">
              <nuxt-link to="/test/text" class="fu-menu-item">Text</nuxt-link>
              <nuxt-link to="/test/markdown" class="fu-menu-item">Markdown</nuxt-link>
            </div>
          </details>
        </div>
      </div>
      <div class="fu-box">
        <div class="fu-box-action">
          <div class="fu-box-header">
            <div class="fu-text-title">Controls</div>
          </div>
          <div
            class="fu-box-content"
          >Includes Box, Button, Dropdown, Form, Navbar and Utility modules</div>
        </div>
        <div class="fu-box-footer fu-flex fu-main-end">
          <details class="fu-dropdown">
            <summary>
              <div class="fu-button fu-button-outlined" dir="rtl">
                <i class="fas fa-caret-down fu-button-icon"></i>Preview
              </div>
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
        </div>
      </div>
    </div>
  </div>
</template>