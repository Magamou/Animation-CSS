var red = document.querySelector('div#loader .red');
var blue = document.querySelector('div#loader .blue');
var green = document.querySelector('div#loader .green');



function randomColor() {
	return '#'+Math.random().toString(16).substr(-6);
}



var loader = document.getElementById("loader");
var button = document.getElementById("button");

var redInterval;
var greenInterval;
var blueInterval;

button.addEventListener("click", function() {
	if (loader.className === "loading") {
		loader.className = "";
        clearInterval(redInterval);
        clearInterval(greenInterval);
        clearInterval(blueInterval);
	} else {
		loader.className = "loading";
        blueInterval=window.setInterval(function(){
            /// call your function here
              blue.style.backgroundColor=randomColor()
          }, 4000);
        greenInterval=window.setInterval(function(){
            /// call your function here
              green.style.backgroundColor=randomColor()
          }, 6000);
        redInterval=window.setInterval(function(){
            /// call your function here
              red.style.backgroundColor=randomColor()
          }, 8000);
	}
})

//loader.className ="";