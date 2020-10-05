<template>
  <div>
    <h1>Navbar</h1>
    <hr />
    <div class="fu-width-1-1">
      <header class="fu-navbar-top">
        <div class="fu-flex fu-main-start fu-flex-auto">
          <div class="fu-navbar-item fu-text-title">Navbar</div>
          <nuxt-link to="#1" class="fu-navbar-item fu-text-link"
            >Item1</nuxt-link
          >
          <nuxt-link to="#2" class="fu-navbar-item fu-text-link"
            >Item2</nuxt-link
          >
          <div class="fu-visible@m" style="padding: 4px;">
            <input
              class="fu-form fu-form-action"
              style="height: 100%;"
              placeholder="Search..."
            />
          </div>
        </div>
        <details class="fu-navbar-dropdown">
          <summary>
            <span class="fu-button fu-icon-button">
              <i class="fas fa-align-right"></i>
            </span>
          </summary>
          <div class="fu-menu">
            <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
            <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
            <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
          </div>
        </details>
        <details class="fu-navbar-drawer">
          <summary>
            <span class="fu-button fu-icon-button">
              <i class="fas fa-align-right"></i>
            </span>
          </summary>
          <div>
            <div class="fu-icon-form fu-width-1-1">
              <i class="fas fa-search fu-form-icon"></i>
              <input
                class="fu-form fu-form-contained"
                placeholder="Search..."
                style="box-shadow: none;"
              />
            </div>
            <div class="fu-menu">
              <div class="fu-padding-vertical-medium">
                <div class="fu-menu-header">Menu</div>
                <ul>
                  <nuxt-link to="#1" class="fu-menu-item">Item1</nuxt-link>
                  <nuxt-link to="#2" class="fu-menu-item">Item2</nuxt-link>
                  <nuxt-link to="#3" class="fu-menu-item">Item3</nuxt-link>
                </ul>
              </div>
            </div>
          </div>
        </details>
      </header>
    </div>
  </div>
</template>
