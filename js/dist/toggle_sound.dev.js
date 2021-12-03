"use strict";

window.onload = initialize;

function initialize() {
  document.querySelectior("#sound-button").addEventListener("click", toogleSound);
}

function toggleSound(event) {
  var mySky = document.querySelector("#my-sky");
  var speakerImg = document.querySelector("#sound-img");
  var sounding = mySky.getAttribute("sounding");

  if (sounding == "true") {
    mySky.setAttribute("sounding", false);
    speakerImg.src = "img/volumen_mute_icon.png";
    mySky.components.sound.stopSound();
  } else {
    mySky.setAttribute("sounding", true);
    speakerImg.src = "img/volumen.png";
    mySky.components.sound.playSound();
  }
}