<template>
  <div>
    <h1>Navbar</h1>
    <hr />
    <div class="fu-width-1-1">
      <header class="fu-navbar">
        <div class="fu-flex-inline fu-flex-auto">
          <div class="fu-navbar-item fu-text-title">
            <nuxt-link to="#" class="fu-navbar-link">Navbar</nuxt-link>
          </div>
          <div class="fu-navbar-item">
            <nuxt-link to="#1" class="fu-navbar-link">Item1</nuxt-link>
          </div>
          <div class="fu-navbar-item">
            <nuxt-link to="#2" class="fu-navbar-link">Item2</nuxt-link>
          </div>
        </div>
        <div class="fu-navbar-item">
          <details class="fu-dropdown">
            <summary>
              <i class="fas fa-bars"></i>
            </summary>
            <div class="fu-dropdown-menu fu-dropdown-menu-left">
              <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
              <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
              <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
            </div>
          </details>
        </div>
      </header>
    </div>
  </div>
</template>