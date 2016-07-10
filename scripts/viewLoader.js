(function(){
  if (window.location.hash.indexOf("#minecraft") == 0) {
    loadView("minecraft");
  }
}());

function loadView(view) {
  var icon = document.createElement("img");
  icon.src = "http://i.cubeupload.com/I2B45d.png";
  document.body.appendChild(icon);

  document.body.appendChild(document.createElement("br"));

  var title = document.createElement("img");
  title.src = "http://i.cubeupload.com/ZEbcCS.png";
  document.body.appendChild(title);

  document.body.setAttribute("style", "background-image:url(http://photos1.meetupstatic.com/photos/theme_body/a/1/3/d/full_6881277.jpeg)");
}
