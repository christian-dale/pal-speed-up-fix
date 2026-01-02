const video = document.querySelector('video');

if (video) {
  // Slow the video to original speed
  video.playbackRate = 0.96;
  
  // Disable pitch preservation to prevent artifacts
  video.preservesPitch = false;
  
  alert("PAL speed corrected! Voices and music should now be natural.");
} else {
  alert("No video element found on this page.");
}
