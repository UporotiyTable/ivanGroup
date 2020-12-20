var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

canvas.addEventListener("mousemove", drawOnCanvas);

function drawOnCanvas(e) {
	if (e.which==1) {
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, 20,0, Math.PI*2);
		canvasContext.fill();
	}
}

var targetColor = "#F00";
colorCircles[0].style.height="80px";
colorCircles[0].style.width="80px";

var list=document.getElementById("list");
list.addEventListener("click", pickColor);

function pickColor(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="LI") {

		if(e.target.id == "red"){
			targetColor = "#F00";
		}

		if(e.target.id == "blue"){
			targetColor = "#00F";
		}
	
		if(e.target.id == "green"){
			targetColor = "#0F0";
		}

		if(e.target.id == "yellow"){
			targetColor = "#FF0";
		}

		if(e.target.id == "cyan"){
			targetColor = "#0FF";
		}

		if(e.target.id == "magenta"){
			targetColor = "#F0F";
		}

		for (var i =0; i<=5; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "20px";
		e.target.style.width = "1000px";
		e.target.style.border = "solid 10px";
	}
}

