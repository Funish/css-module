<template>
  <div>
    <h1>Form</h1>
    <hr />
    <h2>Style</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <input class="fu-form" placeholder="Placeholder" />
      <select class="fu-form">
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>
      <textarea class="fu-form" placeholder="Placeholder"></textarea>
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
        <label class="fu-form" for="file">Select</label>
      </div>
    </div>
    <h2>Form with icon</h2>
    <div class="fu-grid fu-grid-row-medium fu-grid-column-medium">
      <div class="fu-icon-form">
        <i class="fas fa-user fu-form-icon"></i>
        <input class="fu-form" placeholder="Placeholder" />
      </div>
      <div class="fu-icon-form">
        <i class="fas fa-user fu-form-icon"></i>
        <select class="fu-form">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
      <div class="fu-icon-form">
        <i class="fas fa-user fu-form-icon"></i>
        <textarea class="fu-form" placeholder="Placeholder"></textarea>
      </div>
    </div>
  </div>
</template>