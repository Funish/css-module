<template>
  <div>
    <h1>Form</h1>
    <hr />
    <h2>Style</h2>
    <div
      class="fun-flex fun-flex-wrap fun-grid-row-medium fun-grid-column-medium fun-form-outlined"
    >
      <input class="fun-form" placeholder="Placeholder" />
      <select class="fun-form">
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea class="fun-form" placeholder="Placeholder"></textarea>
    </div>
    <h2>Form Selection</h2>
    <div
      class="fun-flex fun-cross-center fun-flex-wrap fun-grid-row-small fun-grid-column-small fun-form-outlined"
    >
      <div>
        <input type="radio" name="radio1" class="fun-radio" />
        <input type="radio" name="radio1" class="fun-radio" />
      </div>
      <input type="checkbox" class="fun-checkbox" />
      <input type="checkbox" class="fun-switch" />
      <input type="range" class="fun-range" />
    </div>
    <h2>Contained</h2>
    <div
      class="fun-flex fun-flex-wrap fun-grid-row-medium fun-grid-column-medium fun-form-contained"
    >
      <input class="fun-form" placeholder="Placeholder" />
      <select class="fun-form">
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea class="fun-form" placeholder="Placeholder"></textarea>
    </div>
    <h2>Action</h2>
    <div
      class="fun-flex fun-flex-wrap fun-grid-row-medium fun-grid-column-medium fun-form-action"
    >
      <input class="fun-form" placeholder="Placeholder" />
      <select class="fun-form">
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea class="fun-form" placeholder="Placeholder"></textarea>
    </div>
    <h2>Disabled form</h2>
    <div
      class="fun-flex fun-flex-wrap fun-grid-row-medium fun-grid-column-medium"
    >
      <input class="fun-form" placeholder="Placeholder" disabled />
      <select class="fun-form" disabled>
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea class="fun-form" placeholder="Placeholder" disabled></textarea>
      <div
        class="fun-flex fun-cross-center fun-grid-row-small fun-grid-column-small"
      >
        <input type="radio" name="radio1" class="fun-radio" disabled />
        <input type="radio" name="radio1" class="fun-radio" disabled />
        <input type="checkbox" class="fun-checkbox" disabled />
        <input type="checkbox" class="fun-switch" disabled />
        <input type="range" class="fun-range" disabled />
      </div>
    </div>
    <h2>Upload</h2>
    <div
      class="fun-flex fun-grid-row-medium fun-grid-column-medium fun-form-contained"
    >
      <div class="fun-form-file fun-width-1-1">
        <input type="file" id="file" />
        <label class="fun-form" for="file">Select</label>
      </div>
    </div>
    <h2>Form with icon</h2>
    <div class="fun-grid fun-grid-row-medium fun-grid-column-medium">
      <div class="fun-form-outlined">
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <input class="fun-form" placeholder="Placeholder" />
        </div>
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <select class="fun-form">
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </select>
        </div>
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <textarea class="fun-form" placeholder="Placeholder"></textarea>
        </div>
      </div>
      <div class="fun-form-contained">
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <input class="fun-form" placeholder="Placeholder" />
        </div>
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <select class="fun-form">
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </select>
        </div>
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <textarea class="fun-form" placeholder="Placeholder"></textarea>
        </div>
      </div>
      <div class="fun-form-action">
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <input class="fun-form" placeholder="Placeholder" />
        </div>
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <select class="fun-form">
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </select>
        </div>
        <div class="fun-icon-form">
          <i class="fas fa-user fun-form-icon"></i>
          <textarea class="fun-form" placeholder="Placeholder"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
