(function(){
  if (window.location.hash.indexOf("#minecraft") == 0) {
    loadView("minecraft");
  }
}());

function loadView(view) {
  var icon = document.createElement("img");
  icon.src = "http://i.cubeupload.com/EKlJJO.png";
  document.body.appendChild(icon);
}
