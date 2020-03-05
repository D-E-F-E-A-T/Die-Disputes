$(document).ready(function(){
        $("#exampleModal").modal("show");
    });
		
		
function dice(){
	var randomNumber1 = Math.floor(Math.random()*6) + 1;
	var randomDiceImage = "images/1-dice-" + randomNumber1 + ".png";
	var image1 = document.getElementsByClassName("dimg")[0];
	image1.setAttribute("src", randomDiceImage);
	
	var randomNumber2 = Math.floor(Math.random()*6) + 1;
	var randomDiceImage = "images/2-dice-" + randomNumber2 + ".png";
	var image1 = document.getElementsByClassName("dimg")[1];
	image1.setAttribute("src", randomDiceImage);
	
	if (randomNumber1 === randomNumber2){
		document.getElementById("h1-dice").innerHTML = ("Draw");
	}
	else if (randomNumber1 > randomNumber2){
		document.getElementById("h1-dice").innerHTML = ("Player One Wins");
	}
	else if (randomNumber1 < randomNumber2){
		document.getElementById("h1-dice").innerHTML = ("Player Two Wins");
	}
	
	document.getElementById("container-1").style = "visibility: visible";
	
	document.getElementById("container-2").style = "visibility: hidden";
}
		 
function spinner(){
	var randomNumber3 = Math.floor(Math.random()*6) + 1;
	var randomSpinnerImage = "images/1-spinner-" + randomNumber3 + ".png";
	var image2 = document.getElementsByClassName("simg")[0];
	image2.setAttribute("src", randomSpinnerImage);
			
	var randomNumber4 = Math.floor(Math.random()*6) + 1;
	var randomSpinnerImage = "images/2-spinner-" + randomNumber4 + ".png";
	var image2 = document.getElementsByClassName("simg")[1];
	image2.setAttribute("src", randomSpinnerImage);
		
	if (randomNumber3 === randomNumber4){
	document.getElementById("h1-spinner").innerHTML = ("Draw");
	}
	else if (randomNumber3 > randomNumber4){
	document.getElementById("h1-spinner").innerHTML = ("Player One Wins");
	}
	else if (randomNumber3 < randomNumber4){
	document.getElementById("h1-spinner").innerHTML = ("Player Two Wins");
	}
	document.getElementById("container-2").style = "visibility: visible";
			
	document.getElementById("container-1").style = "visbility: hidden";
}
		 
var dBtn = document.getElementById("dice");
var sBtn = document.getElementById("spinner");
		 
dBtn.addEventListener("click", dice);
sBtn.addEventListener("click", spinner);
