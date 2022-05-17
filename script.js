// get all the DOM elements that I need
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
//============================================

//Play and Pause video functionality
//video.play()--> play is a method that video tag haas access to
//video.pause()-->pause is another method that the video tag has access to
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
//=================================

//Update the Play and pause icon functionality
//i change the play button with pause with the help of innerHTML and the fontawesome icon ----> '<i class="fa fa-play fa-2x"></i>' which is pause
const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};
//=======================================

//Update progress and timestamp functionality
const updateProgress = () => {
  return true;
};
//=================================
//Set video time to progress functionality
const setVideoProgress = () => {
  return true;
};
//===============================

//Stop the video functionality
//currentTime is a property that we have access to
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};
//=================================

//Event Listeners

//pause and play eventlisteners will have a function updatePlayIcon which sets the play icon to pause icon when clicked
//whilst the video plays is going to continuosly call the timeupdate eventlistener with the help of updateProgress functionality
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
