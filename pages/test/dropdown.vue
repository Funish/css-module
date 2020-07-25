<template>
  <div>
    <h1>Dropdown</h1>
    <hr />
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <details class="fu-dropdown">
        <summary>
          <div class="fu-button fu-button-outlined">Dropdown</div>
        </summary>
        <div class="fu-dropdown-menu">
          <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fu-dropdown">
        <summary>
          <div class="fu-button fu-button-outlined">Left menu</div>
        </summary>
        <div class="fu-dropdown-menu fu-dropdown-menu-left">
          <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fu-dropdown">
        <summary>
          <div class="fu-button fu-button-outlined">Right menu</div>
        </summary>
        <div class="fu-dropdown-menu fu-dropdown-menu-right">
          <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fu-dropdown">
        <summary>
          <div class="fu-button fu-button-outlined">Top menu</div>
        </summary>
        <div class="fu-dropdown-menu fu-dropdown-menu-top">
          <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fu-dropdown">
        <summary>
          <div class="fu-button fu-button-outlined">Bottom menu</div>
        </summary>
        <div class="fu-dropdown-menu fu-dropdown-menu-bottom">
          <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fu-dropdown">
        <summary>
          <div class="fu-button fu-button-outlined">
            Left button at the bottom
          </div>
        </summary>
        <div class="fu-dropdown-menu fu-dropdown-menu-bottom-left">
          <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fu-dropdown">
        <summary>
          <div class="fu-button fu-button-outlined">
            Right button at the bottom
          </div>
        </summary>
        <div class="fu-dropdown-menu fu-dropdown-menu-bottom-right">
          <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
        </div>
      </details>
    </div>
  </div>
</template>
