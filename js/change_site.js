AFRAME.registerComponent('change-site', {
  schema: {
    img: {type: 'string'},
    sound: {type:'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener("mouseenter", function(){

      var parentEntity= el.parentNode;
      var grandParentEntity = parentEntity.parentNode;

      var thisAPlane = parentEntity.querySelector("a-plane");
      thisAPlane.classList.remove("clickable");
      thisAPlane.setAttribute("color","#5f9ea0");

      var allAPlane = grandParentEntity.querySelectorAll("a-plane");
      Object.keys(allAPlane).forEach(function(key){
          if (allAPlane[key] != thisAPlane) {
            allAPlane[key].classList.add("clickable");
            allAPlane[key].setAttribute("color","#18171c");
          }
      });

      var allAsphere = grandParentEntity.querySelectorAll("a-sphere");
      Object.keys(allAsphere).forEach(function (key){
        allAsphere[key].setAttribute("visible","false");
      });
      
      var parentEntityAsphere = parentEntity.querySelector("a-sphere");
      parentEntityAsphere.setAttribute("visible", "true");

      var allAText = grandParentEntity.querySelectorAll("a-text");
      Object.keys(allAText).forEach(function (key){
          allAText[key].setAttribute("color","#5f9ea0");
      });
      
      var aText = thisAPlane.querySelector("a-text");
      if (aText) aText.setAttribute("color", "black");

      var mySky = document.querySelector("#my-sky");
      mySky.setAttribute("src", data.img);
      mySky.setAttribute("sound", "src", data.sound);

      if(mySky.getAttribute("sounding") == "true"){
        mySky.components.sound.playSound();
      }
  });
}
});