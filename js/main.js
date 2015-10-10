allQuesitons = ["Our prison system is too harsh on misdemeanors. ", 
"Alcohol taxes are too low.", 
"Gun control laws should be stricter.", 
"We should lower taxes on the rich.", 
"We should lower the drinking age.", 
"We need raise taxes to support the unemployed.", 
"We need to do more to prevent discrimination.", 
"We need to invest more in clean energy.", 
"Global warming is real."]

importanceOfIssues = [
    {
        "Our prison system is too harsh on misdemeanors. ": "0.5",
        "Alcohol taxes are too low.": "0.06",
        "Gun control laws should be stricter. ": "0.02",
        "We should lower taxes on the rich.": "0.058",
        "We should lower the drinking age.": "0.138",
        "We need raise taxes to support the unemployed ": "0.34",
        "We need to do more to prevent discrimination ": "0.01",
        "We need to invest more in clean energy": "0.03",
        "Global warming is real": "-0.156"
    },
    {
        "Our prison system is too harsh on misdemeanors. ": "0",
        "Alcohol taxes are too low.": "0",
        "Gun control laws should be stricter. ": "1",
        "We should lower taxes on the rich.": "0",
        "We should lower the drinking age.": "0",
        "We need raise taxes to support the unemployed ": "0",
        "We need to do more to prevent discrimination ": "0",
        "We need to invest more in clean energy": "0",
        "Global warming is real": "0"
    },
    {
        "Our prison system is too harsh on misdemeanors. ": "-0.75",
        "Alcohol taxes are too low.": "0",
        "Gun control laws should be stricter. ": "0.0002",
        "We should lower taxes on the rich.": "0.002",
        "We should lower the drinking age.": "0.02",
        "We need raise taxes to support the unemployed ": "0.2",
        "We need to do more to prevent discrimination ": "0",
        "We need to invest more in clean energy": "0",
        "Global warming is real": "0.0278"
    },
    {
        "Our prison system is too harsh on misdemeanors. ": "0.034",
        "Alcohol taxes are too low.": "0.034",
        "Gun control laws should be stricter. ": "0.034",
        "We should lower taxes on the rich.": "0.034",
        "We should lower the drinking age.": "0.034",
        "We need raise taxes to support the unemployed ": "0.034",
        "We need to do more to prevent discrimination ": "0.034",
        "We need to invest more in clean energy": "0.762",
        "Global warming is real": "0"
    },
    {
        "Our prison system is too harsh on misdemeanors. ": "-0.38572",
        "Alcohol taxes are too low.": "-0.347",
        "Gun control laws should be stricter. ": "-0.05734",
        "We should lower taxes on the rich.": "-0.057342",
        "We should lower the drinking age.": "-0.05773842",
        "We need raise taxes to support the unemployed ": "-0.0001",
        "We need to do more to prevent discrimination ": "-0.002",
        "We need to invest more in clean energy": "-0.002",
        "Global warming is real": "-0.09076"
    },
    {
        "Our prison system is too harsh on misdemeanors. ": "0.5",
        "Alcohol taxes are too low.": "0.25",
        "Gun control laws should be stricter. ": "0.125",
        "We should lower taxes on the rich.": "0.0625",
        "We should lower the drinking age.": "0.03125",
        "We need raise taxes to support the unemployed ": "0.015625",
        "We need to do more to prevent discrimination ": "0.007813",
        "We need to invest more in clean energy": "0.003906",
        "Global warming is real": "0.003906"
    }
]

politicalOpinions = [
    {
        "Our prison system is too harsh on misdemeanors. ": "1",
        "Alcohol taxes are too low.": "0.5",
        "Gun control laws should be stricter. ": "0",
        "We should lower taxes on the rich.": "-0.5",
        "We should lower the drinking age.": "1",
        "We need raise taxes to support the unemployed ": "-1",
        "We need to do more to prevent discrimination ": "0.5",
        "We need to invest more in clean energy": "-0.5",
        "Global warming is real": "1"
    }
]

politicalGroups = [
    {
        "Group1": "0.1",
        "Group2": "0.26",
        "Group3": "0.08",
        "Group4": "0.35",
        "Group5": "0.2",
        "Group6": "0.01"
    }
]



$(document).ready(function(){
	/*var allQuesitons = new Array(String);
	for(var i = 0; i < 20; i++){
		allQuesitons[i] = "Question "+i;
	}*/
	var questionArray = new Array(String);
	for(var i = 0; i < 5; i++){
		var index = Math.floor(Math.random() * allQuesitons.length);
		questionArray[i] = allQuesitons[index];
		allQuesitons.splice(index, 1);
	}
	var board = new GameController($("#controller"), questionArray);
	
	board.updateData(importanceOfIssues, politicalOpinions, politicalGroups);


	for(var i = 0; i < 5; i++){
		$(".question"+i).change(function(e){ 
			e.preventDefault();

		});
	}
	
});



var GameController = function(controllerDiv,questionArray){
	this.controllerDiv = controllerDiv;
	this.questionArray = questionArray;
	for(var i = 0; i < questionArray.length; i++){
		var questionDiv = $("<div class='form form"+i+"'><form id=\"question"+i+"\">"+questionArray[i]+"<br></form></div>");
		controllerDiv.append(questionDiv);


		questionDiv.append("<input type='radio' class='question"+i+"' name='question"+i+"' value='strongly-disagree' id='strongly-disagree"+i+"'>");
		questionDiv.append("<label for='strongly-disagree"+i+"'><span></span>Strongly Disagree</label><br>");

		questionDiv.append("<input type='radio' class='question"+i+"' name='question"+i+"' value='disagree' id='disagree"+i+"'>");
		questionDiv.append("<label for='disagree"+i+"'><span></span>Disagree</label><br>");

		questionDiv.append("<input type='radio' class='question"+i+"' name='question"+i+"' value='neutral' id='neutral"+i+"'>");
		questionDiv.append("<label for='neutral"+i+"'><span></span>Neutral</label><br>");

		questionDiv.append("<input type='radio' class='question"+i+"' name='question"+i+"' value='agree' id='agree"+i+"'>");
		questionDiv.append("<label for='agree"+i+"'><span></span>Agree</label><br>");

		questionDiv.append("<input type='radio' class='question"+i+"' name='question"+i+"' value='strongly-agree' id='strongly-agree"+i+"'>");
		questionDiv.append("<label for='strongly-agree"+i+"'><span></span>Strongly Agree</label><br><br>");
	}
}

/*GameController.prototype.updateData(importanceOfIssues, politicalOpinions, politicalGroups){
	this.importanceOfIssues = importanceOfIssues;
}*/

/*require(["esri/map", "dojo/domReady!"], function(Map) { 
  var map = new Map("map", {
    center: [-118, 34.5],
    zoom: 8,
    basemap: "topo"
  });
});*/

var Question = function(questionString){
	this.quesitonString = questionString;
	this.answerArray = answerArray;

}

