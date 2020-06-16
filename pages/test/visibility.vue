<template>
  <div>
    <h1>Visibility</h1>
    <hr />
    <h2>Hidden and Visible</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <div class="fu-position-relative">
        <div class="fu-box fu-visible@s">
          <div class="fu-box-content">
            ✔ Visible
            <br />(Phone Landscape)
          </div>
        </div>
        <div class="fu-box fu-hidden@s">
          <div class="fu-box-content">
            Hidden
            <br />(Phone Landscape)
          </div>
        </div>
      </div>
      <div class="fu-position-relative">
        <div class="fu-box fu-visible@m">
          <div class="fu-box-content">
            ✔ Visible
            <br />(Tablet Landscape)
          </div>
        </div>
        <div class="fu-box fu-hidden@m">
          <div class="fu-box-content">
            Hidden
            <br />(Tablet Landscape)
          </div>
        </div>
      </div>
      <div class="fu-position-relative">
        <div class="fu-box fu-visible@l">
          <div class="fu-box-content">
            ✔ Visible
            <br />(Desktop)
          </div>
        </div>
        <div class="fu-box fu-hidden@l">
          <div class="fu-box-content">
            Hidden
            <br />(Desktop)
          </div>
        </div>
      </div>
      <div class="fu-position-relative">
        <div class="fu-box fu-visible@xl">
          <div class="fu-box-content">
            ✔ Visible
            <br />(Large Screens)
          </div>
        </div>
        <div class="fu-box fu-hidden@xl">
          <div class="fu-box-content">
            Hidden
            <br />(Large Screens)
          </div>
        </div>
      </div>
    </div>
    <h2>Touch</h2>
    <div class="fu-flex fu-flex-wrap fu-grid-row-medium fu-grid-column-medium">
      <div class="fu-position-relative">
        <div class="fu-box fu-hidden-notouch">
          <div class="fu-box-content">✔ Hidden Touch</div>
        </div>
        <div class="fu-box fu-hidden-touch">
          <div class="fu-box-content">Hidden Touch</div>
        </div>
      </div>
      <div class="fu-position-relative">
        <div class="fu-box fu-hidden-touch">
          <div class="fu-box-content">✔ Hidden No-Touch</div>
        </div>
        <div class="fu-box fu-hidden-notouch">
          <div class="fu-box-content">Hidden No-Touch</div>
        </div>
      </div>
    </div>
  </div>
</template>