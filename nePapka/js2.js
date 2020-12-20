function MoyaFunciya (){
	alert("OK")
}

var counter=0;

function plusOne(){
	counter += 2;
	document.getElementById("counterLabel").innerHTML = counter;
}

function minusOne(){
	counter -= 4;
	document.getElementById("counterLabel").innerHTML = counter;
}

function randomNum(){
	counter = Math.random() * 100;
	document.getElementById("counterLabel").innerHTML = counter;
}