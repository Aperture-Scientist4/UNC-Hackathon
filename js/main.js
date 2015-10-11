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

importanceOfIssuesArr = new Array(new Array());
var xLen = 0; 
var yLen = 0;

for(var x in importanceOfIssues) { 
	if (importanceOfIssues.hasOwnProperty(x)){
		importanceOfIssues.push
    	for(var y in importanceOfIssues[x]) {
			if (importanceOfIssues[x].hasOwnProperty(y)) {
				importanceOfIssuesArr[xLen].push( importanceOfIssues[x][y]);
				yLen++;
      		}
    	}

		xLen++;
    	importanceOfIssuesArr.push(new Array());
	}
}
//console.log(importanceOfIssuesArr);

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

politicalGroups = politicalGroups[0];
politicalGroupsArr = new Array();

for(var i in politicalGroups){
	politicalGroupsArr.push(parseFloat(politicalGroups[i]));
}


$(document).ready(function(){
	/*var allQuesitons = new Array(String);
	for(var i = 0; i < 20; i++){
		allQuesitons[i] = "Question "+i;
	}*/
	//var politicalGroupsArr = $.map(politicalGroups, function(el){ return el;});
	console.log(politicalGroupsArr);
	console.log(allQuesitons);
	console.log( importanceOfIssuesArr );
	var questionArray = importantQuestions(5, politicalGroupsArr, allQuesitons, importanceOfIssuesArr );//new Array(String);
	console.log(questionArray );

	var board = new GameController($("#question"), questionArray [0]);
	
	board.updateData(importanceOfIssues, politicalOpinions, politicalGroups);


	for(var i = 0; i < 5; i++){
		$(".question"+i).change(function(e){ 
			e.preventDefault();

		});
	}


	var selection;

	$(":radio").click(function(){
		selection = this.value;
		console.log(selection);
	});

	var moves = 0;
	var wonOver = 0;

	var wonOver = new Array();
	for(var i = 0; i < politicalGroupsArr.length; i++){
		wonOver.push(0.0);
	}

	$("#select-option").click(function(){
		var questionSpace = $("#current-question");
		var prevQuestion = questionArray.splice(0,1);
		$("#history").append("<div>"+prevQuestion+"</div>  <div>"+selection+"</div>")
		moves++;
		questionSpace.empty();

		var opinion = 0;

		if(selection = "strongly-disagree"){
			updateWinnings(moves, 5, wonOver, importanceOfIssuesArr, -1);
		}

		if(selection = "disagree"){
			updateWinnings(moves, 5, wonOver, importanceOfIssuesArr, -.5);
		}

		if(selection = "neutral"){
			updateWinnings(moves, 5, wonOver, importanceOfIssuesArr, 0);
		}

		if(selection = "strongly-agree"){
			updateWinnings(moves, 5, wonOver, importanceOfIssuesArr, .5);
		}

		if(selection = "agree"){
			updateWinnings(moves, 5, wonOver, importanceOfIssuesArr, 1);
		}

		

		questionSpace.append(questionArray[0]);
		$(':radio').removeAttr('checked');
		// Refresh the jQuery UI buttonset.                  
		//$( ":radio" ).buttonset('refresh');
		moves++;
		if(questionArray.length == 0){
			OhDidIWin(numMoves, wonOver)
		}
	});




	

	
});



var GameController = function(controllerDiv,mostImportantQuestion){
	this.controllerDiv = controllerDiv;
	//this.questionArray = questionArray;
		var questionDiv = $("#question");

		controllerDiv.append(questionDiv);
		questionDiv.append("<div id='current-question'>"+mostImportantQuestion + "</div><br>");

		questionDiv.append("<input type='radio' class='question' name='question' value='strongly-disagree' id='strongly-disagree'>");
		questionDiv.append("<label for='strongly-disagree'><span></span>Strongly Disagree</label><br>");

		questionDiv.append("<input type='radio' class='question' name='question' value='disagree' id='disagree'>");
		questionDiv.append("<label for='disagree'><span></span>Disagree</label><br>");

		questionDiv.append("<input type='radio' class='question' name='question' value='neutral' id='neutral'>");
		questionDiv.append("<label for='neutral'><span></span>Neutral</label><br>");

		questionDiv.append("<input type='radio' class='question' name='question' value='agree' id='agree'>");
		questionDiv.append("<label for='agree'><span></span>Agree</label><br>");

		questionDiv.append("<input type='radio' class='question' name='question' value='strongly-agree' id='strongly-agree'>");
		questionDiv.append("<label for='strongly-agree'><span></span>Strongly Agree</label><br><br>");
}

GameController.prototype.updateData = function(importanceOfIssues, politicalOpinions, politicalGroups){
	this.importanceOfIssues = importanceOfIssues;
}

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

//Bad practice stuff beyond
//@params:
//numMoves: integer number of weeks the game lasts
//pop: a float array of size numPopGroups, consisting of the percentage of the population that is in each population group
//issues: a String array consisting of the different issues the politician may potentially make an opinion about. 
//May not be necessary because of the array allQuestions
//importanceOfIssues: a 2D float array, of size [numPopGroups][numIssues], consisting of the importance of each issue to 
//the members of the population groups
function importantQuestions(numMoves, pop, issues, importanceOfIssues){
	var out = new Array();
	
	//var spokenOn = [];
	var importantIssue;
	var importance=[];
	
	for(var issueNum=0; issueNum<issues.length; issueNum++){
	//	spokenOn[issueNum]=0;
		importance[issueNum]=0;
		for(var groupNum=0; groupNum<pop.length; groupNum++){
			importance[issueNum]+= Math.abs(
				importanceOfIssues[groupNum][issueNum]
				)*pop[groupNum];
			//REMEMBER: IoI[issueNum][groupNum]
			//This is roughly the percentage of people, regardless of voting group, for which
			//a given issue is the most important issue
		}
	}

	currentVotes=0;
	importantIssue=0;
	
	//calculate the next most important issue
	var popped = new Array();
	for(var i = 0; i < issues.length; i++){
		popped.push(true);
	}
	console.log(popped);
	for(var moveNum=0; moveNum<numMoves; moveNum++){
		var importantIssue= 0;
		var issueNum = 0;
		var max = -100000000;
		for(issueNum=0; issueNum<issues.length; issueNum++){

			if( importance[issueNum]>max && popped[issueNum] == true){
				importantIssue=issueNum;
				max = importance[issueNum];
			}

		}
		popped[importantIssue] = false;
		//console.log(importantIssue);
		console.log(popped);
		out[moveNum]=issues[importantIssue];
		//spokenOn[importantIssue]=0;
		//generates the ith most important issue
	}

	return out;
}

//@params:
//wonOver: float array (declared in OhDidIWin), consiting of the 
//importanceOfIssues: float array, consisting of one collumn of the importanceOfIssues 2D array--the opinion of all the pop groups on one issue
//opinion: the opinion of the politician on the issue in question
//buttonClicks: how many questions they have answered
//numMoves: how many questions we plan to ask them
function updateWinnings(buttonClicks, numMoves, wonOver, importanceOfIssues, opinion){
	var temp;
	for(var groupNum=0; groupNum<wonOver.size; groupNum++){
		temp=(1-wonOver[groupNum])*(importanceOfIssues[groupNum])*(opinion);
		//1-wonOver[groupNum] is the percentage of people who haven't already pledged their vote for you
		//ImportanceOfIssues[groupNum] is the percentage of people in the group who consider that issue the most important one
		//opinion is your degree of support towards the issue
		wonOver[groupNum]+=temp;
	}
	var totalVotes=0;
	for(var groupNum=0; groupNum<wonOver.length; groupNum++){
		totalVotes+=wonOver[groupNum]*politicalGroupsArr[groupNum];
	}
	if(buttonClicks==numMoves){
		if(totalVotes>0.5){
			writeFinalOutput("success",totalVotes*100);
		}
		else{
			writeFinalOutput("failure",totalVotes*100);
		}
	}
	else{
		writeNextPrompt(totalVotes, numMoves-buttonClicks);
	}
}
 
function getOpinion(){
	//Java script to connect to the page and get whatever button they pressed
	return opinion;
}

function writeNextPrompt(currentVotes, remainingMoves){
	//Print the following string (not sure how to do this)
	/*return "You currently have $currentVotes% of the population voting for you.
	You have "+remainingMoves+" moves left. 
	The next most important issue is $issue, which is the most important issue for $importantIssue% of the population.
	So, how do you feel about "+issue+"?";*/


	//Button prompts
	//Map diagram
}

function logCurrentQuestion(currentQuestion, response){

}
	
function writeFinalOutput(outcome, totalVotes){
	if(outcome=="success"){
		//Print the following string (not sure how to do this)
		//console.log( "Congratulations, you win, with "+totalVotes+"\% of the votes." );
		$("#controller").empty();
		$("#controller").append("Congratulations, you win, with "+totalVotes+"% of the votes.");
	}
	else{
		//Print the following string (not sure how to do this)
		console.log("Too bad, you lose. You got "+totalVotes+"% of the votes, less than the 51% necessary to win.");
		$("#controller").empty();
		$("#controller").append("Too bad, you lose. You got "+totalVotes+"% of the votes, less than the 51% necessary to win.");
	}	
}

