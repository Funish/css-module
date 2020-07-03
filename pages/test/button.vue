<template>
  <div>
    <h1>Button</h1>
    <hr />
    <h2>Style</h2>
    <div>
      <button class="fu-button">Button</button>
      <button class="fu-button fu-button-outlined">Outlined</button>
      <button class="fu-button fu-button-contained">Contained</button>
    </div>
    <h2>Fade button</h2>
    <div>
      <button class="fu-button fu-button-fade">Button</button>
      <button class="fu-button fu-button-outlined fu-button-fade">Outlined</button>
      <button class="fu-button fu-button-contained fu-button-fade">Contained</button>
    </div>
    <h2>Disabled button</h2>
    <div>
      <button class="fu-button" disabled>Button</button>
      <button class="fu-button fu-button-outlined" disabled>Outlined</button>
      <button class="fu-button fu-button-contained" disabled>Contained</button>
    </div>
    <h3>Dense button</h3>
    <div>
      <button class="fu-button fu-button-dense">Button</button>
      <button class="fu-button fu-button-outlined fu-button-dense">Outlined</button>
      <button class="fu-button fu-button-contained fu-button-dense">Contained</button>
    </div>
    <h3>Loose button</h3>
    <div>
      <button class="fu-button fu-button-loose">Button</button>
      <button class="fu-button fu-button-outlined fu-button-loose">Outlined</button>
      <button class="fu-button fu-button-contained fu-button-loose">Contained</button>
    </div>
    <h2>Button with icon</h2>
    <div>
      <button class="fu-button">
        <i class="fas fa-user-circle fu-button-icon"></i>Button
      </button>
      <button class="fu-button fu-button-outlined">
        <i class="fas fa-user-circle fu-button-icon"></i>Outlined
      </button>
      <button class="fu-button fu-button-contained">
        <i class="fas fa-user-circle fu-button-icon"></i>Contained
      </button>
    </div>
    <h2>Icon Button</h2>
    <div>
      <button class="fu-button fu-icon-button">
        <i class="fas fa-location-arrow"></i>
      </button>
      <button class="fu-button fu-button-outlined fu-icon-button">
        <i class="fas fa-location-arrow"></i>
      </button>
      <button class="fu-button fu-button-contained fu-icon-button">
        <i class="fas fa-location-arrow"></i>
      </button>
    </div>
    <h2>Button Group</h2>
    <div class="fu-grid fu-grid-row-medium fu-grid-column-medium">
      <div class="fu-button-group">
        <button class="fu-button fu-button-contained fu-icon-button">
          <i class="fas fa-location-arrow"></i>
        </button>
        <button class="fu-button fu-button-contained fu-icon-button">
          <i class="fas fa-location-arrow"></i>
        </button>
        <button class="fu-button fu-button-contained fu-icon-button">
          <i class="fas fa-location-arrow"></i>
        </button>
      </div>
      <div class="fu-button-group">
        <button class="fu-button fu-button-contained">Button</button>
        <button class="fu-button fu-button-contained">Outlined</button>
        <button class="fu-button fu-button-contained">Contained</button>
      </div>
    </div>
  </div>
</template>