"use strict";

AFRAME.registerComponent('do-click-sound', {
  schema: {
    src: {
      type: 'string'
    }
  },
  init: function init() {
    var el = this.el;
    el.addEventListener("mouseenter", function () {
      el.components.sound.playSound();
    });
  }
});