var h1 = 300;
var h2 = 300;
var h3 = 0;
var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");
var column3 = document.getElementById("column3");
var winnerBlock = document.getElementById("winnerBlock");

document.addEventListener("keyup", rise);



function rise(event) {
	console.log(event.keyCode);

	if (event.keyCode==37)
	{
		h1+=10
		column1.style.height =h1+"px";
	}

	if (event.keyCode==39)
	{
		h1-=10
		column1.style.height =h1+"px";
	}
	if (event.keyCode==37)
	{
		h2+=15
		column2.style.height =h2+"px";
	}
	else if (event.keyCode==39)
	{
		h2-=20
		column2.style.height =h2+"px";
	}
	if (h1>500){
		document.removeEventListener("keyup", rise);
	winnerBlock.style.display="inline"
	winnerBlock.innerHTML="You wins!"
	}
	if (h2>500){
		document.removeEventListener("keyup", rise);
	winnerBlock.style.display="inline"
	winnerBlock.innerHTML="You fool!"
	}
	if (h3>500){
			document.removeEventListener("keyup", rise);
	winnerBlock.style.display="inline"
	winnerBlock.innerHTML="You fool!"
	}
}

function newgame() {
	document.addEventListener("keyup", rise);
	h1=300;
	column1.style.height =h1+"px";
	h2=300;
	column2.style.height =h2+"px";
	h2=0;
	column3.style.height =h3+"px";
	winnerBlock.innerHTML=" ";
	winnerBlock.style.display="none";
}
