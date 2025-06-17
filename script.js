

var container = document.getElementById('videoPlayer');

var video = document.createElement('video');
video.setAttribute('src','video.mp4');

// video.setAttribute('autoplay','');
// video.setAttribute('muted','');
// video.setAttribute('loop','');
// video.setAttribute('controls','');
// video.setAttribute('style','width:400px');


video.autoplay=true;
video.muted=true;
video.controls=true;    
video.style.width='400px';

container.appendChild(video);

