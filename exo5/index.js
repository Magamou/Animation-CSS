var el = document.querySelector(".box");


el.addEventListener("click", clickedBox, false);
direction="left-right";
function clickedBox(evt) {
	console.log("clicked on box.");
	switch(direction){
		case "left-right":
			el.style.transition="left 1s ease-out";
			el.style.left="300px";
			direction="top-down";
			break;
		case "top-down":
			el.style.top="300px";
			el.style.transition="top 1s ease-out";
			direction="right-left";
			break;
		case "right-left":
			el.style.transition="left 1s ease-out";
			el.style.left="0px";
			direction="down-top";
			break;
		case "down-top":
			el.style.transition="top 1s ease-out";
			el.style.top="0px";
			direction="left-right";
			break;
	}
}