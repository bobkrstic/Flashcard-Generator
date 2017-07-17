var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");


console.log(firstPresident.front);
console.log(firstPresident.back);

inquirer.prompt([
	{
		type: "input",
		name: "answer",
		message: firstPresident.front
	}

	]).then(function(answer){
		if(answer.answer === firstPresident.back) {
			console.log("Correct");
		} else {
			console.log("Not correct");
		}
	});