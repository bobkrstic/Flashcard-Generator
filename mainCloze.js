
var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard.js");

//var questionsArray = require("./main.js");

var count = 0;
var testCount = 0;
var questionsArray = [];

var questions = function() {

	console.log("\nNEW QUESTION\n")

	if (count < 2) {
	inquirer.prompt([
	{
		name: "text",
		message: "Type your question: "
	},
	{
		name: "cloze",
		message: "Type the answer: "
	}

	]).then(function(answer){
		var newQuestion = new ClozeCard(answer.text, answer.cloze);
		newQuestion.printQuestionsInfo();
		questionsArray.push(newQuestion);
		count++;
		questions();
	});

	} else {
		// for(var x = 0; x < questionsArray.length; x++) {
		// 	questionsArray[x].printQuestionsInfo();
		// }
		console.log("TEST RUN");
		console.log(questionsArray);
		takeTheTest();
	}

};

questions();


var takeTheTest = function() {

	if (testCount < questionsArray.length) {
		inquirer.prompt([

		{
			name: "questionAnswer",
			//message: questionsArray[testCount].partial
			message: questionsArray[testCount].partial
		}

		]).then(function(testAnswer) {
			if(testAnswer.questionAnswer === questionsArray[testCount].cloze) {
				console.log("correct");
			} else {
				console.log("not correct");
				console.log(questionsArray[testCount].fullText);
			}

			testCount++;
			takeTheTest();
		});
	}

}
