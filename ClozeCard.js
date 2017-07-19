
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
		this.partial = this.fullText.replace(changeThisString, "...");
	}
}

module.exports = CloseCard;


