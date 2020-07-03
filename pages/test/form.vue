<template>
  <div>
    <h1>Form</h1>
    <hr />
    <h2>Style</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <div>
        <input class="fu-form" placeholder="Placeholder" />
      </div>
      <div>
        <select class="fu-form">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
      <div>
        <textarea class="fu-form" placeholder="Placeholder"></textarea>
      </div>
    </div>
    <h2>Fade form</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <div>
        <input class="fu-form fu-form-fade" placeholder="Placeholder" />
      </div>
      <div>
        <select class="fu-form fu-form-fade">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
      <div>
        <textarea class="fu-form fu-form-fade" placeholder="Placeholder"></textarea>
      </div>
    </div>
    <h2>Disabled form</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <div>
        <input class="fu-form" placeholder="Placeholder" disabled />
      </div>
      <div>
        <select class="fu-form" disabled>
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
      <div>
        <textarea class="fu-form" placeholder="Placeholder" disabled></textarea>
      </div>
    </div>
    <h2>Upload</h2>
    <div class="fu-flex fu-grid-row-medium fu-grid-column-medium">
      <div class="fu-form-file">
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