<template>
  <div>
    <h1>Card</h1>
    <hr />
    <div
      class="fun-flex fun-flex-wrap fun-grid-row-medium fun-grid-column-medium"
    >
      <div class="fun-card">
        <div class="fun-card-header">
          <div class="fun-text-title">Card</div>
          <div class="fun-text-subtitle">Subtitle</div>
        </div>
        <div class="fun-card-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="fun-card fun-card-action">
        <div class="fun-card-header">
          <div class="fun-text-title">Card with action</div>
          <div class="fun-text-subtitle">Subtitle</div>
        </div>
        <div class="fun-card-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="fun-card">
        <div class="fun-card-action">
          <div class="fun-card-header">
            <div class="fun-text-title">Card with footer</div>
            <div class="fun-text-subtitle">Subtitle</div>
          </div>
          <div class="fun-card-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div class="fun-card-footer fun-flex fun-main-end">
          <button class="fun-button fun-icon-button">
            <i class="far fa-heart"></i>
          </button>
          <button class="fun-button fun-icon-button">
            <i class="far fa-bookmark"></i>
          </button>
          <details class="fun-dropdown">
            <summary>
              <div class="fun-button fun-icon-button">
                <i class="fas fa-ellipsis-v"></i>
              </div>
            </summary>
            <div class="fun-dropdown-menu fun-dropdown-menu-top">
              <nuxt-link to="#1" class="fun-menu-item">Item1</nuxt-link>
              <nuxt-link to="#2" class="fun-menu-item">Item2</nuxt-link>
              <nuxt-link to="#3" class="fun-menu-item">Item3</nuxt-link>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>
