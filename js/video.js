var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(this);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = 0.9;
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = 1.1;
});


document.querySelector("#skip").addEventListener("click", function() {
video.currentTime +=5;

if(video.duration <= video.currentTime){
video.currentTime = 0;
console.log("Playing from Beginning");}

else{
	console.log("Skipped to" + video.currentTime);}
video.play();

});

document.querySelector("#mute").addEventListener("click", function() {
if(video.muted == false) {
	video.muted = true;
	let mute = document.querySelector("#mute").innerHTML = "Unmute"
}

else{
video.muted = false;
		let mute = document.querySelector("#mute").innerHTML = "mute"
}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log('Before: ' + video.volume);
	video.volume = this.value / 100;
	console.log('After: ' + video.volume);
	let volumeSlider = document.querySelector("#volumeSlider").innerHTML = "volumeSlider"
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});
