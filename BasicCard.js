//

// constructor for creating basic flashcards
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

BasicCard.prototype.printQuestionsInfo = function() {
	console.log("Question: " + this.front + "\nAnswer: " + this.back);
}


module.exports = BasicCard;