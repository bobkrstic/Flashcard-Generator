
//var questionsArray = require("./main");
var BasicCard = require("./BasicCard.js");

function CloseCard(text, cloze) {
	this.cloze = cloze;
	this.partial = "";
	this.fullText = text;
}

CloseCard.prototype.printQuestionsInfo = function() {
	for (var i = 0; i < 1; i++) {
		var changeThisString = this.cloze;
		//console.log(this);
		console.log(changeThisString);
		console.log(this.fullText);
		this.partial = this.fullText.replace(changeThisString, "...");
	}
	//console.log("Question: " + this.partial);
}




//module.exports = questionsArray;
module.exports = CloseCard;