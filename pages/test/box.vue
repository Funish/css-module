<template>
  <div>
    <h1>Box</h1>
    <hr />
    <div class="fu-grid-row-medium fu-grid-column-medium">
      <div class="fu-box">
        <div class="fu-box-header">
          <div class="fu-text-title">Box</div>
          <div class="fu-text-subtitle">Subtitle</div>
        </div>
        <div
          class="fu-box-content"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="fu-box fu-box-action">
        <div class="fu-box-header">
          <div class="fu-text-title">Box with action</div>
          <div class="fu-text-subtitle">Subtitle</div>
        </div>
        <div
          class="fu-box-content"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div class="fu-box">
        <div class="fu-box-action">
          <div class="fu-box-header">
            <div class="fu-text-title">Box with footer</div>
            <div class="fu-text-subtitle">Subtitle</div>
          </div>
          <div
            class="fu-box-content"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div class="fu-box-footer fu-flex fu-main-end">
          <button class="fu-button fu-icon-button">
            <i class="far fa-heart"></i>
          </button>
          <button class="fu-button fu-icon-button">
            <i class="far fa-bookmark"></i>
          </button>
          <details class="fu-dropdown">
            <summary>
              <div class="fu-button fu-icon-button">
                <i class="fas fa-ellipsis-v"></i>
              </div>
            </summary>
            <div class="fu-dropdown-menu fu-dropdown-menu-top">
              <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
              <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
              <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>