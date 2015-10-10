


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
	"You currently have $currentVotes% of the population voting for you.
	 You have $remainingMoves moves left. 
	The next most important issue is $issue, which is the most important issue for $importantIssue% of the population."
	"So, how do you feel about $issue?"
	//Button prompts
	//Map diagram
	
function writeFinalOutput(outcome, totalVotes){
	if(outcome=="success"){
		//Print the following string (not sure how to do this)
		"Congratulations, you win, with $totalVotes% of the votes."
	}
	else{
		//Print the following string (not sure how to do this)
		"Too bad, you lose. You got $totalVotes% of the votes, less than the %51 necessary to win."
	}	
}
