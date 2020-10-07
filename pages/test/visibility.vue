<template>
  <div>
    <h1>Visibility</h1>
    <hr />
    <h2>Hidden and Visible</h2>
    <div
      class="fun-flex fun-flex-wrap fun-grid-row-medium fun-grid-column-medium"
    >
      <div class="fun-position-relative">
        <div class="fun-card fun-visible@s">
          <div class="fun-card-content">
            ✔ Visible
            <br />(Phone Landscape)
          </div>
        </div>
        <div class="fun-card fun-hidden@s">
          <div class="fun-card-content">
            Hidden
            <br />(Phone Landscape)
          </div>
        </div>
      </div>
      <div class="fun-position-relative">
        <div class="fun-card fun-visible@m">
          <div class="fun-card-content">
            ✔ Visible
            <br />(Tablet Landscape)
          </div>
        </div>
        <div class="fun-card fun-hidden@m">
          <div class="fun-card-content">
            Hidden
            <br />(Tablet Landscape)
          </div>
        </div>
      </div>
      <div class="fun-position-relative">
        <div class="fun-card fun-visible@l">
          <div class="fun-card-content">
            ✔ Visible
            <br />(Desktop)
          </div>
        </div>
        <div class="fun-card fun-hidden@l">
          <div class="fun-card-content">
            Hidden
            <br />(Desktop)
          </div>
        </div>
      </div>
      <div class="fun-position-relative">
        <div class="fun-card fun-visible@xl">
          <div class="fun-card-content">
            ✔ Visible
            <br />(Large Screens)
          </div>
        </div>
        <div class="fun-card fun-hidden@xl">
          <div class="fun-card-content">
            Hidden
            <br />(Large Screens)
          </div>
        </div>
      </div>
    </div>
    <h2>Touch</h2>
    <div
      class="fun-flex fun-flex-wrap fun-grid-row-medium fun-grid-column-medium"
    >
      <div class="fun-position-relative">
        <div class="fun-card fun-hidden-notouch">
          <div class="fun-card-content">✔ Hidden Touch</div>
        </div>
        <div class="fun-card fun-hidden-touch">
          <div class="fun-card-content">Hidden Touch</div>
        </div>
      </div>
      <div class="fun-position-relative">
        <div class="fun-card fun-hidden-touch">
          <div class="fun-card-content">✔ Hidden No-Touch</div>
        </div>
        <div class="fun-card fun-hidden-notouch">
          <div class="fun-card-content">Hidden No-Touch</div>
        </div>
      </div>
    </div>
  </div>
</template>
