function officalvid(){
  var officalvid= document.querySelector(".officalvid")
  var video= document.querySelector("video")
  officalvid.classList.toggle("active")
  video.pause();
  video.currentTime=0;
  

}