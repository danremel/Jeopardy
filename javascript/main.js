	console.log("working");

// Question Set
var QuestionSet = [
	{	
		question: "The color of grass.",
		answer: "what is green?",
		points: 100
	},
	{
		question: "70% of the human body is made of this.",
		answer: "what is water?",
		points: 200
	},
	{
		question: "The style of music born in the heart of New Orleans.",
		answer: "what is jazz?",
		points: 300
	}
];

// These are the divs containing the questions/points
for (i = 0; i < QuestionSet.length; i++){
	// Assigning the variable $div to a newly created element
	var $div = $('<div>');
	// Adding the class 'divs' to each div created by $div
	$div.addClass('divs');
	// This adds text to the divs to display the 
	// amount of points each question is worth on the page
	$div.html(QuestionSet[i].points);
	// The next three lines link the attributes to each piece of the
	// object in the QuestionSet array
	$div.attr("question", QuestionSet[i].question);
	$div.attr("answer", QuestionSet[i].answer);
	$div.attr("points", QuestionSet[i].points);
	// Adds the div to the body
	$('body').append($div);
};


// ## CREATE BUTTON FUNCTIONALITY ##
$('.divs').click(function () {
	var playerInput = prompt(this.getAttribute("question"));
	var makeLowerCase = playerInput.toLowerCase();
	var points = this.getAttribute("points");
	if (makeLowerCase === this.getAttribute("answer")) {
		alert("You are correct!")
	} else {
		alert("You are incorrect.")
	}
})
// GIVEN user selects a box
// WHEN box is clicked
// THEN the box reveals the question in a pop-up box
