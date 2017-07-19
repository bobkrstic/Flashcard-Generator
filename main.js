var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");

//var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");


// console.log(firstPresident.front);
// console.log(firstPresident.back);

var count = 0;
var testCount = 0;
var questionsArray = [];

var questions = function() {

	console.log("\nNEW QUESTION\n")

	if (count < 2) {
	inquirer.prompt([
	{
		name: "question",
		message: "Type your question: "
	},
	{
		name: "answer",
		message: "Type the answer: "
	}

	]).then(function(answer){
		var newQuestion = new BasicCard(answer.question, answer.answer);

		questionsArray.push(newQuestion);
		count++;
		questions();
	});

	} else {
		// for(var x = 0; x < questionsArray.length; x++) {
		// 	questionsArray[x].printQuestionsInfo();
		// }
		inquirer.prompt([

		{
			type: "rawlist",
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
				console.log("\nTHANK YOU FOR PLAYING!\n");
				return;
			}

		});
	}

};

questions();


var takeTheTest = function() {

	if (testCount < questionsArray.length) {
		inquirer.prompt([

		{
			name: "questionAnswer",
			message: questionsArray[testCount].front
		}

		]).then(function(testAnswer) {
			if(testAnswer.questionAnswer === questionsArray[testCount].back) {
				console.log("correct");
			} else {
				console.log("not correct");
				console.log(questionsArray[testCount].back);
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

//module.exports = questionsArray;






