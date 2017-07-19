
var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard.js");

//var questionsArray = require("./main.js");

var count = 0;
var testCount = 0;
var questionsArray = [];

var questions = function() {

	

	if (count < 2) {
		console.log("\nNEW QUESTION\n")

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

			var regex = new RegExp( '\\b' + answer.cloze + '\\b' );
			var result = regex.test( answer.text );

			if(result !== true) {
				console.log("This is not going to work!");
				//var newQuestion = new ClozeCard("QUESTION FORMED WITH A MISTAKE, PRESS RETURN", ".");
			} else {
				var newQuestion = new ClozeCard(answer.text, answer.cloze);
				newQuestion.printQuestionsInfo();
				questionsArray.push(newQuestion);
				count++;
			}

			questions();
		});

	} else {
		// for(var x = 0; x < questionsArray.length; x++) {
		// 	questionsArray[x].printQuestionsInfo();
		// }
		inquirer.prompt([

		{
			type: "list",
			message: "\nWhat would you like to do now?\n",
			choices: ["Practice", "Rest"],
			name: "usersChoice"
		}

		]).then(function(choice) {

			//console.log(choice.usersChoice);

			if(choice.usersChoice === "Practice") {
				console.log("\nTEST RUN\n");
				takeTheTest();

			} else {

				console.log("THANK YOU FOR PLAYING!");
				return;
			}

		});
		// console.log("TEST RUN");
		// console.log(questionsArray);
		// takeTheTest();
	}

};

questions();


var takeTheTest = function() {

	if (testCount < questionsArray.length) {
		inquirer.prompt([

		{
			name: "questionAnswer",
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

	} else {

			inquirer.prompt([

			{
				type: "list",
				message: "\nTake the test again?\n",
				choices: ["Yes", "No"],
				name: "againChoice"
			}

			]).then(function(choice){

				if(choice.againChoice === "Yes"){
					testCount = 0;
					takeTheTest();
				} else {
					console.log("\nTHANK YOU FOR PLAYING!\n")
					return;
				}

			});
	}

}


