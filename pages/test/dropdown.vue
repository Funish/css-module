<template>
  <div>
    <h1>Dropdown</h1>
    <hr />
    <div
      class="fun-flex fun-flex-wrap fun-grid-row-medium fun-grid-column-medium"
    >
      <details class="fun-dropdown">
        <summary>
          <div class="fun-button fun-button-outlined">Dropdown</div>
        </summary>
        <div class="fun-dropdown-menu">
          <nuxt-link to="#1" class="fun-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fun-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fun-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fun-dropdown">
        <summary>
          <div class="fun-button fun-button-outlined">Left menu</div>
        </summary>
        <div class="fun-dropdown-menu fun-dropdown-menu-left">
          <nuxt-link to="#1" class="fun-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fun-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fun-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fun-dropdown">
        <summary>
          <div class="fun-button fun-button-outlined">Right menu</div>
        </summary>
        <div class="fun-dropdown-menu fun-dropdown-menu-right">
          <nuxt-link to="#1" class="fun-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fun-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fun-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fun-dropdown">
        <summary>
          <div class="fun-button fun-button-outlined">Top menu</div>
        </summary>
        <div class="fun-dropdown-menu fun-dropdown-menu-top">
          <nuxt-link to="#1" class="fun-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fun-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fun-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fun-dropdown">
        <summary>
          <div class="fun-button fun-button-outlined">Bottom menu</div>
        </summary>
        <div class="fun-dropdown-menu fun-dropdown-menu-bottom">
          <nuxt-link to="#1" class="fun-menu-item">Item1</nuxt-link>
          <nuxt-link to="#2" class="fun-menu-item">Item2</nuxt-link>
          <nuxt-link to="#3" class="fun-menu-item">Item3</nuxt-link>
        </div>
      </details>
      <details class="fun-dropdown">
        <summary>
          <div class="fun-button fun-button-outlined">
            Bottom Left
          </div>
        </summary>
        <div class="fun-dropdown-menu fun-dropdown-menu-bottom-left">
          <nuxt-link to="#1" class="fun-menu-item"
            >Item1 - Hello World</nuxt-link
          >
          <nuxt-link to="#2" class="fun-menu-item"
            >Item2 - Hello World</nuxt-link
          >
          <nuxt-link to="#3" class="fun-menu-item"
            >Item3 - Hello World</nuxt-link
          >
        </div>
      </details>
      <details class="fun-dropdown">
        <summary>
          <div class="fun-button fun-button-outlined">
            Bottom Right
          </div>
        </summary>
        <div class="fun-dropdown-menu fun-dropdown-menu-bottom-right">
          <nuxt-link to="#1" class="fun-menu-item"
            >Item1 - Hello World</nuxt-link
          >
          <nuxt-link to="#2" class="fun-menu-item"
            >Item2 - Hello World</nuxt-link
          >
          <nuxt-link to="#3" class="fun-menu-item"
            >Item3 - Hello World</nuxt-link
          >
        </div>
      </details>
    </div>
  </div>
</template>
