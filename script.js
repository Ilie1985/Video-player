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
//currentTime property
//duration property
//the progress bar-->the bar that shows how much from the video was played is targeted with progress.value ,we`ve given the class of progress to the input type range in index.html
//we need to divide video.currentTime to video.duration and multiply it with 100 to give us a percentage
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  //Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
};
//=================================

//Set video time to progress functionality
//we do this so that we can move the progress bar wherever we want on the duration of the video
const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
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
