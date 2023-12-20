//your JS code here. If required.
window.onload = function() {
const applause = document.querySelector(".applause");
applause.addEventListener("click",() => {
	console.log("applause button clicked");
let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
mysound.play();
});

const boo = document.querySelector(".boo");
boo.addEventListener("click",() => {
let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
mysound.play();
});

const gasp = document.querySelector(".gasp");
gasp.addEventListener("click",() => {
let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
mysound.play();
});

const tada = document.querySelector(".tada");
tada.addEventListener("click",() => {
let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
mysound.play();
});

const victory = document.querySelector(".victory");
victory.addEventListener("click",() => {
let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
mysound.play();
});


const wrong = document.querySelector(".wrong");
wrong.addEventListener("click",() => {
let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
mysound.play();
});


const stop = document.querySelector(".stop");
stop.addEventListener("click",() => {
	mysound.pause();
    mysound.currentTime = 0;
});
}