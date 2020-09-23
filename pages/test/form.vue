<template>
  <div>
    <h1>Form</h1>
    <hr />
    <h2>Style</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <input class="fu-form fu-form-outlined" placeholder="Placeholder" />
      <select class="fu-form fu-form-outlined">
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea
        class="fu-form fu-form-outlined"
        placeholder="Placeholder"
      ></textarea>
      <div>
        <input type="radio" name="radio1" class="fu-form" />
        <input type="radio" name="radio1" class="fu-form" />
        <input type="checkbox" class="fu-form" />
      </div>
    </div>
    <h2>Underlined</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <input class="fu-form fu-form-underlined" placeholder="Placeholder" />
      <select class="fu-form fu-form-underlined">
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea
        class="fu-form fu-form-underlined"
        placeholder="Placeholder"
      ></textarea>
    </div>
    <h2>Contained</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <input class="fu-form fu-form-contained" placeholder="Placeholder" />
      <select class="fu-form fu-form-contained">
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea
        class="fu-form fu-form-contained"
        placeholder="Placeholder"
      ></textarea>
    </div>
    <h2>Disabled form</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <input class="fu-form" placeholder="Placeholder" disabled />
      <select class="fu-form" disabled>
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea class="fu-form" placeholder="Placeholder" disabled></textarea>
    </div>
    <h2>Upload</h2>
    <div class="fu-flex fu-grid-row-medium fu-grid-column-medium">
      <div class="fu-form-file fu-width-1-1">
        <input type="file" id="file" />
        <label class="fu-form fu-form-contained" for="file">Select</label>
      </div>
    </div>
    <h2>Form with icon</h2>
    <div class="fu-grid fu-grid-row-medium fu-grid-column-medium">
      <div class="fu-icon-form">
        <i class="fas fa-user fu-form-icon"></i>
        <input class="fu-form fu-form-contained" placeholder="Placeholder" />
      </div>
      <div class="fu-icon-form">
        <i class="fas fa-user fu-form-icon"></i>
        <select class="fu-form fu-form-contained">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
      <div class="fu-icon-form">
        <i class="fas fa-user fu-form-icon"></i>
        <textarea
          class="fu-form fu-form-contained"
          placeholder="Placeholder"
        ></textarea>
      </div>
    </div>
  </div>
</template>
