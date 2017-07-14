	console.log("working");

// Question Set
var QuestionSet = [
	{	
		question: "The color of grass.",
		answer: "what is green?",
		points: 100
	},
	{
		question: "This makes up 70% of the human body.",
		answer: "what is water?",
		points: 200
	},
	{
		question: "The style of music born in the heart of New Orleans.",
		answer: "what is jazz?",
		points: 300
	}
];

// This is the starting score for the player
var playerScore = 0;

// These are the divs containing the questions/points
for (i = 0; i < QuestionSet.length; i++){
	// This assigns the variable $div to a newly created element
	var $div = $('<div>');
	// This adds the class 'divs' to each div created by $div
	$div.addClass('divs');
	// This adds text to the divs to display the 
	// amount of points each question is worth on the page
	$div.html(QuestionSet[i].points);
	// The next three lines link the attributes to each piece of the
	// object in the QuestionSet array
	$div.attr("question", QuestionSet[i].question);
	$div.attr("answer", QuestionSet[i].answer);
	$div.attr("points", QuestionSet[i].points);
	// This adds the div to the body
	$('body').append($div);
};

// This function updates the score displayed on the page
// based on the points the player is awarded
function updatePlayerScore() {
	// This selects the scoreboard from the HTML, and changes
	// the text to display the current score, converting 
	// the score from a "number" data type to a "string"
	$('#scoreboard').text("Score: " + playerScore.toString());
}

// This creates a click event listener inside the divs
$('.divs').click(function () {
// This creates a prompt that reveals the question
	var playerInput = prompt(this.getAttribute("question"))
	// This command makes any uppercase letters in the response
	// turn into lowercase letters, creating uniformity and matching
	// the answer criteria.
	var makeLowerCase = playerInput.toLowerCase();
	// This variable links var points with the "points" property
	// in the QuestionSet object array.
	var points = this.getAttribute("points");
	// IF user's answer matches the string in the "answer" property,
	// THEN return alert saying "You are correct."
	// ELSE return alert saying "You are incorrect.""
	if (makeLowerCase === this.getAttribute("answer")) {
		// This notifies the player that
		// their response is correct
		alert("You are correct!");
		// This adds the question's corresponding points
		// to the player's score
		playerScore += parseInt(points);
		// Calls the function to update the 
		// points displayed on the scoreboard
		updatePlayerScore();
	} else {
		// This notifies the player that
		// their response is incorrect
		alert("You are incorrect. Did you answer in a question format?");
		// This subtracts the question's corresponding points
		// from the scoreboard
		playerScore -= parseInt(points);
		// Calls the function to update the
		// points displayed on the scoreboard
		updatePlayerScore();
	}
})

