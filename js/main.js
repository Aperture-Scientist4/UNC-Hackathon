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
	var board = new GameController($("#question"), questionArray[0]);
	
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

	$("#select-option").click(function(){
		var questionSpace = $("#current-question");
		var prevQuestion = questionArray.splice(0,1);
		$("#history").append("<div>"+prevQuestion+"</div>  <div>"+selection+"</div>")
		questionSpace.empty();
		questionSpace.append(questionArray[0]);
		$(':radio').removeAttr('checked');
		// Refresh the jQuery UI buttonset.                  
		$( ":radio" ).buttonset('refresh');
	})




	

	
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

function OhDidIWin(numMoves, pop, issues, importanceOfIssues){
	var wonOver = [];
	var spokenOn = [];
	var importance = [];
	var currentVotes;
	var importantIssue;
	var totalVotes;
	var opinion;
	var move=0;
	for(var groupNum=0; groupNum<pop.length; groupNum++){
		wonOver[i]=0;
	}
	for(var issueNum=0; issueNum<issues.length; issueNum++){
		spokenOn[issueNum]=0;
		importance[issueNum]=0;
		for(var groupNum=0; groupNum<pop.length; groupNum++){
			importance[issueNum]+=Math.abs(importanceOfIssues[issueNum][groupNum])*pop[groupNum];
			//REMEMBER: IoI[issueNum][groupNum]
			//This is roughly the percentage of people, regardless of voting group, for which
			//a given issue is the most important issue
	
		}
	}

	currentVotes=0;
	importantIssue=0;
	
	//calculate the next most important issue
	for(var issueNum=0; issueNum<issues.length; issueNum++){
		if(!spokenOn[issueNum] && importance[issueNum]>importance[importantIssue]){
			importantIssue=issueNum;
		}
	}

	writeNextPrompt(currentVotes,importantIssue);

	//this is the meat of the function, the loop that repeatedly queries the user for their opinions
	for(move = 0; move<numMoves; move++){
		opinion=getOpinion();
		spokenOn[importantIssue]=true;
		wonOver=updateWinnings(wonOver,importanceOfIssues[keyPoint],opinion);

		currentVotes=0;
		for(var groupNum=0; groupNum<pop.length; groupNum++){
			currentVotes+=wonOver[groupNum]*pop[groupNum];
		}
		
		importantIssue=0;
		for(var issueNum=0; issueNum<issues.length; issueNum++){
			if(!spokenOn[issueNum] && importance[issueNum]>importance[importantIssue]){
				importantIssue=issueNum;
			}
		}
		
		writeNextPrompt(currentVotes, numMoves-moves, issues[importantIssue],importantIssue);
		
	}
	totalVotes=0;
	for(var groupNum=0; groupNum<pop.length; groupNum++){
		totalVotes+=wonOver[groupNum]*pop[groupNum];
	}

	if(totalVotes>0.5){
		writeFinalOutput("success", totalVotes);
	}
	else{
		writeFinalOutput("failure",totalVotes);
	}
}

function updateWinnings(wonOver, importanceOfIssues, opinion){
	var temp;
	for(var groupNum=0; groupNum<wonOver.size; groupNum++){
		temp=(1-wonOver[groupNum])*(importantofIssues[groupNum])*(opinion);
		//1-wonOver[groupNum] is the percentage of people who haven't already pledged their vote for you
		//ImportanceOfIssues[groupNum] is the percentage of people in the group who consider that issue the most important one
		//opinion is your degree of support towards the issue
		wonOver[groupNum]+=temp;
	}
	return wonOver;
}
 
function getOpinion(){
	//Java script to connect to the page and get whatever button they pressed
	return opinion;
}

function writeNextPrompt(currentVotes, remainingMoves, issue, importantIssue){
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

