<template>
  <header class="fu-padding-vertical-medium fu-flex fu-flex-wrap fu-grid-row-small fu-grid-column-small">
    <select class="fu-form" onchange="self.location.href=options[selectedIndex].value">
      <option disabled selected hidden>Layouts</option>
      <option value="/test/flex">Flex</option>
      <option value="/test/grid">Grid</option>
      <option value="/test/position">Position</option>
      <option value="/test/visibility">Visibility</option>
    </select>
    <select class="fu-form" onchange="self.location.href=options[selectedIndex].value">
      <option disabled selected hidden>Box models</option>
      <option value="/test/margin">Margin</option>
      <option value="/test/padding">Padding</option>
      <option value="/test/width">Width</option>
      <option value="/test/height">Height</option>
    </select>
    <select class="fu-form" onchange="self.location.href=options[selectedIndex].value">
      <option disabled selected hidden>Text Components</option>
      <option value="/test/text">Text</option>
      <option value="/test/markdown">Markdown</option>
    </select>
    <select class="fu-form" onchange="self.location.href=options[selectedIndex].value">
      <option disabled selected hidden>Controls</option>
      <option value="/test/box">Box</option>
      <option value="/test/button">Button</option>
      <option value="/test/dropdown">Dropdown</option>
      <option value="/test/form">Form</option>
      <option value="/test/menu">Menu</option>
      <option value="/test/navbar">Navbar</option>
      <option value="/test/utility">Utility</option>
    </select>
  </header>
</template>