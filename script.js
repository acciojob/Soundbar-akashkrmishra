//your JS code here. If required.
const applause = document.querySelector(".btn");
applause.addEventListener("click",() => {
    let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
    mysound.play();
});

const boo = document.querySelector(".btn");
boo.addEventListener("click",() => {
    let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
    mysound.play();
});

const gasp = document.querySelector(".btn");
gasp.addEventListener("click",() => {
    let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
    mysound.play();
});

const tada = document.querySelector(".btn");
tada.addEventListener("click",() => {
    let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
    mysound.play();
});

const victory = document.querySelector(".btn");
victory.addEventListener("click",() => {
    let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
    mysound.play();
});

const wrong = document.querySelector(".btn");
wrong.addEventListener("click",() => {
    let mysound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
    mysound.play();
});

const stop = document.querySelector(".stop");
stop.addEventListener("click",() => {
	mysound.pause();
    mysound.currentTime = 0;
});