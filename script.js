//your JS code here. If required.
const applause = document.querySelector("btn");
applause.addEventListener("click",() => {
	let mysound = new
		Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3')
	mysound.play()
})