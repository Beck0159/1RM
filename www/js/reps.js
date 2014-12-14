window.addEventListener("DOMContentLoaded", init);

//////////////////// Global Variables ///////////////

function init(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    // Now safe to use device APIs
	console.log("Device Ready!!");
	
	//var selector = document.querySelectorAll('input');
	var selector = document.getElementsByName('a');
	console.log(selector.length);
	
	for(i=0; i<selector.length;i++){
		
		selector[i].addEventListener('click', checkBoxClicked);
	}
	
	
}

function checkBoxClicked(checkboxID){
	// determine what checkbox is clicked and uncheck the other 2 
	switch(checkboxID){
	case "benchBox":
			document.getElementById("benchBox").checked = true;
			document.getElementById("deadBox").checked = false;
			document.getElementById("squatBox").checked = false;	
		break;
	case "squatBox":
			document.getElementById("benchBox").checked = false;
			document.getElementById("deadBox").checked = false;
			document.getElementById("squatBox").checked = true;	
		break;
	case "deadBox":
			document.getElementById("benchBox").checked = false;
			document.getElementById("deadBox").checked = true;
			document.getElementById("squatBox").checked = false;	
	break;		
	}
	
}

function calculateMax(){
	// handle form elements
	var weightInput = document.getElementById("weightInput").value;
	var repInput = document.getElementById("repInput").value;
	
	if(weightInput != "" && repInput != ""){
		console.log("do calculations");
		
		var repPercentage;
		
		switch(repInput){
		case "1":
			repPercentage = 1;
			//doCalculation(repPercentage , weightInput);
			break;
		case "2":
			repPercentage = .95;
			//doCalculation(repPercentage, weightInput);
			break;
		case "3":
			repPercentage = .90;
			break;
		case "4":
			repPercentage = .88;
			break;
		case "5":
			repPercentage = .86;
			break;
		case "6":
			repPercentage = .83;
			break;
		case "7":
			repPercentage = .80;
			break;
		case "8":
			repPercentage = .78;
			break;
		case "9":
			repPercentage = .76;
			break;
		case "10":
			repPercentage = .75;
			break;
			
		}
		
		doCalculation(repPercentage, weightInput);
	}
	
}

function doCalculation(repPercentage , weightInput){

	var estimatedMax = weightInput / repPercentage;
	// display the max
	document.getElementById("estimatedMax").innerHTML = "Estimated Max <strong>"+Math.floor(estimatedMax)+"</strong>";
	document.getElementById("hideUntilSubmitted").style.display = "block";
	
	// display the chart
	var RepMax1 = estimatedMax;
	var RepMax2 = estimatedMax * .95;
	var RepMax3 = estimatedMax * .90;
	var RepMax4 = estimatedMax * .88;
	var RepMax5 = estimatedMax * .86;
	
	document.getElementById("1RepMax").innerHTML = ""+Math.floor(RepMax1)+"";
	document.getElementById("2RepMax").innerHTML = ""+Math.floor(RepMax2)+"";
	document.getElementById("3RepMax").innerHTML = ""+Math.floor(RepMax3)+"";
	document.getElementById("4RepMax").innerHTML = ""+Math.floor(RepMax4)+"";
	document.getElementById("5RepMax").innerHTML = ""+Math.floor(RepMax5)+"";
}


















