<template>
  <div>
    <h1>Navbar</h1>
    <hr />
    <div class="fun-width-1-1">
      <header class="fun-navbar-top">
        <details class="fun-navbar-drawer">
          <summary>
            <span class="fun-button fun-icon-button">
              <i class="fas fa-bars"></i>
            </span>
          </summary>
          <div>
            <div class="fun-icon-form fun-width-1-1">
              <i class="fas fa-search fun-form-icon"></i>
              <input
                class="fun-form fun-form-contained"
                placeholder="Search..."
                style="box-shadow: none;"
              />
            </div>
            <div class="fun-menu">
              <div class="fun-padding-vertical-medium">
                <div class="fun-menu-header">Menu</div>
                <ul>
                  <nuxt-link to="#1" class="fun-menu-item">Item1</nuxt-link>
                  <nuxt-link to="#2" class="fun-menu-item">Item2</nuxt-link>
                  <nuxt-link to="#3" class="fun-menu-item">Item3</nuxt-link>
                </ul>
              </div>
            </div>
          </div>
        </details>
        <div class="fun-navbar-container">
          <div class="fun-text-title">Navbar</div>
          <nuxt-link to="#1" class="fun-text-link">Item1</nuxt-link>
          <nuxt-link to="#2" class="fun-text-link">Item2</nuxt-link>
        </div>
        <div class="fun-main-end">
          <details class="fun-navbar-dropdown">
            <summary>
              <span class="fun-button fun-icon-button">
                <i class="fas fa-chevron-down"></i>
              </span>
            </summary>
            <div class="fun-menu">
              <nuxt-link to="#1" class="fun-menu-item">Item1</nuxt-link>
              <nuxt-link to="#2" class="fun-menu-item">Item2</nuxt-link>
              <nuxt-link to="#3" class="fun-menu-item">Item3</nuxt-link>
            </div>
          </details>
        </div>
      </header>
    </div>
  </div>
</template>
