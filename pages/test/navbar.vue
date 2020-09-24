<template>
  <div>
    <h1>Navbar</h1>
    <hr />
    <div class="fu-width-1-1">
      <header class="fu-navbar-top">
        <div class="fu-flex fu-main-start fu-flex-auto">
          <div class="fu-navbar-item fu-text-title">Navbar</div>
          <nuxt-link to="#1" class="fu-navbar-item fu-navbar-link"
            >Item1</nuxt-link
          >
          <nuxt-link to="#2" class="fu-navbar-item fu-navbar-link"
            >Item2</nuxt-link
          >
          <div class="fu-visible@m" style="padding: 4px;">
            <input
              class="fu-form fu-form-contained"
              style="height: 100%;"
              placeholder="Search..."
            />
          </div>
        </div>
        <div class="fu-navbar-item">
          <details class="fu-navbar-drawer fu-navbar-drawer-reverse">
            <summary>
              <span class="fu-button fu-icon-button">
                <i class="fas fa-align-right"></i>
              </span>
            </summary>
            <div class="fu-padding-medium">
              <div class="fu-icon-form">
                <i class="fas fa-search fu-form-icon"></i>
                <input
                  class="fu-form fu-form-contained"
                  placeholder="Search..."
                />
              </div>
            </div>
          </details>
        </div>
      </header>
    </div>
  </div>
</template>
