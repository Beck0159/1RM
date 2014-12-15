window.addEventListener("DOMContentLoaded", init);

//////////////////// Global Variables ///////////////

function init(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    // Now safe to use device APIs
	console.log("Device Ready!!");	
	
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
		default:
			alert("Reps must be between 1 and 10");	
			return;
		}
		
		doCalculation(repPercentage, weightInput);
	}
	else{
		// didnt enter corect values	
		
		if(weightInput == "" && repInput == ""){
			
			alert("Enter a weight and a rep range.");
			
		}else if(weightInput == ""){
			alert("Enter a weight.");
			
		} else if(repInput == ""){
			alert("Enter a rep range.");
			
		}
		
	}
	
}

function doCalculation(repPercentage , weightInput){

	var estimatedMax = weightInput / repPercentage;
	// display the max
	document.getElementById("estimatedMax").innerHTML = "Estimated Max <strong>"+Math.floor(estimatedMax)+"</strong>";
	document.getElementById("1RMTitle").innerHTML = "Estimated Weight";
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

function powerLiftingTotal(){
	
	var validate = document.getElementById("maxBench");
		validate.className = "text-input";
		//validate.placeholder  = "Enter Weight";
	
	var validate1 = document.getElementById("maxDead");
		validate1.className = "text-input";
		//validate1.placeholder  = "Enter Weight";
	
	var validate2 = document.getElementById("maxSquat");
		validate2.className = "text-input";
		//validate2.placeholder  = "Enter Weight";
	
	var maxBench = document.getElementById("maxBench").value;
	var maxDead = document.getElementById("maxDead").value;
	var maxSquat = document.getElementById("maxSquat").value;
	var bodyWeight = document.getElementById("bodyWeight1").value;
	
	// validate form
	if(maxBench == ""){
		var validate = document.getElementById("maxBench");
		validate.className = "text-input2";
		validate.placeholder  = "Incorrect Input";
		
	}
	
	if(maxDead == ""){
		var validate = document.getElementById("maxDead");
		validate.className = "text-input2";
		validate.placeholder  = "Incorrect Input";
	}
	
	if(maxSquat == ""){
		var validate = document.getElementById("maxSquat");
		validate.className = "text-input2";
		validate.placeholder  = "Incorrect Input";
	}
	
	
	var maxBenchInt = parseInt(maxBench);
	var maxDeadInt = parseInt(maxDead);
	var maxSquatInt = parseInt(maxSquat);
	var bodyWeightINT = parseInt(bodyWeight);
	
	if(bodyWeight != ""){
		
		var powerLiftingTotal = maxBenchInt + maxSquatInt + maxDeadInt;
		
		if(powerLiftingTotal.toString() === "NaN"){
			return;
		}
		
		document.getElementById("PowerLifingTotals").innerHTML = "Total <strong>"+Math.floor(powerLiftingTotal)+"</strong>";
		document.getElementById("hideUntilSubmitted1").style.display = "block";
		document.getElementById("hideUntilSubmitted2").style.display = "block";
		
		
		var weightClassesNumber = [114, 123, 132, 148, 165, 181, 198, 220, 273, 308];
		
                var curr = weightClassesNumber[0];
                var diff = Math.abs (bodyWeightINT - curr);
                for (var val = 0; val < weightClassesNumber.length; val++) {
                    var newdiff = Math.abs (bodyWeightINT - weightClassesNumber[val]);
                    if (newdiff < diff) {
                        diff = newdiff;
                        curr = weightClassesNumber[val];
                    }
                }
				
		
			for(var i =0; i<male.weightClasses.length; i++){
				
				if(curr == male.weightClasses[i].name){
					
					var scores = [male.weightClasses[i].classes[0].score,
								 male.weightClasses[i].classes[1].score,
								 male.weightClasses[i].classes[2].score,
								 male.weightClasses[i].classes[3].score,
								 male.weightClasses[i].classes[4].score,
								 male.weightClasses[i].classes[5].score];
				
				// display information
				document.getElementById("eliteScore").innerHTML = ""+male.weightClasses[i].classes[5].score+"";
				document.getElementById("masterScore").innerHTML = ""+male.weightClasses[i].classes[4].score+"";
				document.getElementById("class1Score").innerHTML = ""+male.weightClasses[i].classes[3].score+"";
				document.getElementById("class2Score").innerHTML = ""+male.weightClasses[i].classes[2].score+"";
				document.getElementById("class3Score").innerHTML = ""+male.weightClasses[i].classes[1].score+"";
				document.getElementById("class4Score").innerHTML = ""+male.weightClasses[i].classes[0].score+"";
					
					
				var curr1 = scores[0];
                var diff1 = Math.abs (powerLiftingTotal - curr);
                for (var val1 = 0; val1 < scores.length; val1++) {
                    var newdiff1 = Math.abs (powerLiftingTotal - scores[val1]);
                    if (newdiff1 < diff1) {
                        diff1 = newdiff1;
                        curr1 = scores[val1];
                    }
                }
              
					
				var level = curr1.toString();	
					
				var x = document.querySelectorAll(".GraphText");

				for(t=0;t<x.length;t++){
					x[t].className = "GraphText";
				}
					
					
				switch(level){
				case document.getElementById("eliteScore").innerHTML:
					document.getElementById("eliteScore").className = "GraphText yourClass";
					document.getElementById("eliteScore1").className = "GraphText yourClass";
					break;
				case document.getElementById("masterScore").innerHTML:
					document.getElementById("masterScore").className = "GraphText yourClass";
					document.getElementById("masterScore1").className = "GraphText yourClass";
					break;
				case document.getElementById("class1Score").innerHTML:
					document.getElementById("class1Score").className = "GraphText yourClass";
					document.getElementById("class1Score1").className = "GraphText yourClass";
					break;
				case document.getElementById("class2Score").innerHTML:
					document.getElementById("class2Score").className = "GraphText yourClass";
					document.getElementById("class2Score1").className = "GraphText yourClass";
					break;
				case document.getElementById("class3Score").innerHTML:
					document.getElementById("class3Score").className = "GraphText yourClass";
					document.getElementById("class3Score1").className = "GraphText yourClass";
					break;
				case document.getElementById("class4Score").innerHTML:
					document.getElementById("class4Score").className = "GraphText yourClass";
					document.getElementById("class4Score1").className = "GraphText yourClass";	
					break;
				default:
					alert("broken");		
				}
					
				}
				
			}

	}
	else{
		// calculate max
		var powerLiftingTotal = maxBenchInt + maxSquatInt + maxDeadInt;
		
		if(powerLiftingTotal.toString() === "NaN"){
			return;
		}
		
		
		document.getElementById("PowerLifingTotals").innerHTML = "Total <strong>"+Math.floor(powerLiftingTotal)+"</strong>";
		document.getElementById("hideUntilSubmitted1").style.display = "block";
		
	}
	
}

function sendEmail(){

	cordova.plugins.email.open({
    to:      'connorbecker@yahoo.ca',
    subject: 'Reps Feedback',
    body:    ''
	});
	
}

function addPR(){
	//show the form and hide the button add pr buttin
	document.getElementById("addRecordInvisable").style.display = "block";
	document.getElementById("addRecord").style.display = "none";
	
}

function savePR(){
	
	// validate form and get information
	// save information to local storage
	
	
	var weightInput = document.getElementById("weightInput1");
	var bench = document.getElementById("benchBox");
	var dead = document.getElementById("deadBox");
	var squat = document.getElementById("squatBox");
	
	
	if(weightInput.value != ""){
		
		if(bench.checked){
				
			if(localStorage.getItem("bench") != null){
				var benchStorage = weightInput.value+" , "+localStorage.getItem("bench");
				localStorage.setItem("bench", benchStorage);
				prPage();

				document.getElementById("addRecordInvisable").style.display = "none";
				document.getElementById("addRecord").style.display = "block";

			}else{

				localStorage.setItem("bench", weightInput.value);
				// Retrieve
				alert(localStorage.getItem("bench"));
				prPage();

				document.getElementById("addRecordInvisable").style.display = "none";
				document.getElementById("addRecord").style.display = "block";

			}
			
		}else if(dead.checked){
			
			if(localStorage.getItem("dead") != null){
				var deadStorage = weightInput.value+" , "+localStorage.getItem("dead");
				localStorage.setItem("dead", deadStorage);
				prPage();

				document.getElementById("addRecordInvisable").style.display = "none";
				document.getElementById("addRecord").style.display = "block";

			}else{

				localStorage.setItem("dead", weightInput.value);
				// Retrieve
				alert(localStorage.getItem("dead"));
				prPage();

				document.getElementById("addRecordInvisable").style.display = "none";
				document.getElementById("addRecord").style.display = "block";

			}
			
			
			
		}else if(squat.checked){
			
			if(localStorage.getItem("squat") != null){
				var squatStorage = weightInput.value+" , "+localStorage.getItem("squat");
				localStorage.setItem("squat", squatStorage);
				prPage();

				document.getElementById("addRecordInvisable").style.display = "none";
				document.getElementById("addRecord").style.display = "block";

			}else{

				localStorage.setItem("squat", weightInput.value);
				// Retrieve
				alert(localStorage.getItem("squat"));
				prPage();

				document.getElementById("addRecordInvisable").style.display = "none";
				document.getElementById("addRecord").style.display = "block";

			}
			
			
		}
		
		
		
	}else{
		alert("none");
		
	}
	
}

function prPage(){
	// check localStorage and display
	
	setTimeout(function(){
	
		if(localStorage.getItem("bench") != null){
		
			var storage = localStorage.getItem("bench");
			var benchList1 = document.getElementById("BenchList");
			var storageArray = storage.split(",");
		
			benchList1.innerHTML = '<ons-list-header class="list__header ons-list-header-inner">Bench</ons-list-header>';
			
			for(i=0;i<storageArray.length;i++){
				console.log(storageArray[i]);	
				//benchList1. = "<ons-list-item>"+storageArray[i]+"</ons-list-item>";
				
				benchList1.innerHTML = document.getElementById("BenchList").innerHTML+'<ons-list-item class="list__item ons-list-item-inner">'+storageArray[i]+'</ons-list-item>';
				
		}
		
		}else{
			// display no input message
			document.getElementById("BenchList").innerHTML = '<ons-list-header class="list__header ons-list-header-inner">Bench</ons-list-header><ons-list-item class="list__item ons-list-item-inner">No Saved Lifts</ons-list-item>';
		}
		
		
		if(localStorage.getItem("dead") != null){
		
			var storage = localStorage.getItem("dead");
			var benchList1 = document.getElementById("DeadList");
			var storageArray = storage.split(",");
		
			benchList1.innerHTML = '<ons-list-header class="list__header ons-list-header-inner">DeadLift</ons-list-header>';
			
			for(i=0;i<storageArray.length;i++){
				console.log(storageArray[i]);	
				//benchList1. = "<ons-list-item>"+storageArray[i]+"</ons-list-item>";
				
				benchList1.innerHTML = document.getElementById("DeadList").innerHTML+'<ons-list-item class="list__item ons-list-item-inner">'+storageArray[i]+'</ons-list-item>';
				
		}
		
		}else{
			// display no input message
			document.getElementById("DeadList").innerHTML = '<ons-list-header class="list__header ons-list-header-inner">DeadLift</ons-list-header><ons-list-item class="list__item ons-list-item-inner">No Saved Lifts</ons-list-item>';
		}
		
		
		if(localStorage.getItem("squat") != null){
		
			var storage = localStorage.getItem("squat");
			var benchList1 = document.getElementById("SquatList");
			var storageArray = storage.split(",");
		
			benchList1.innerHTML = '<ons-list-header class="list__header ons-list-header-inner">Squat</ons-list-header>';
			
			for(i=0;i<storageArray.length;i++){
				console.log(storageArray[i]);	
				//benchList1. = "<ons-list-item>"+storageArray[i]+"</ons-list-item>";
				
				benchList1.innerHTML = document.getElementById("SquatList").innerHTML+'<ons-list-item class="list__item ons-list-item-inner">'+storageArray[i]+'</ons-list-item>';
				
		}
		
		}else{
			// display no input message
			document.getElementById("SquatList").innerHTML = '<ons-list-header class="list__header ons-list-header-inner">Squat</ons-list-header><ons-list-item class="list__item ons-list-item-inner">No Saved Lifts</ons-list-item>';
		}
		
		
		
		
		
		
    }, 10);
	
}







