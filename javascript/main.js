$(document).ready(function(){
	console.log("working");

// Question Set
var QuestionSet = [
	{	
		id: "1-1",
		question: "Question1",
		answers: {
			a1: "answer1",
			a2: "answer2",
			a3: "answer3",
			a4: "answer4"
		},
		correctAnswer: "a2",
		points: "$100"
	},
	{
		id: "1-2",
		question: "Question2",
		answers: {
			a1: "answer1",
			a2: "answer2",
			a3: "answer3",
			a4: "answer4"
		},
		correctAnswer: "a1",
		points: "$200"
	},
	{
		id: "1-3",
		question: "Question3",
		answers: {
			a1: "answer1",
			a2: "answer2",
			a3: "answer3",
			a4: "answer4"
		},
		correctAnswer: "a4",
		points: "$300"
	},
	{
		id: "1-4",
		question: "Question4",
		answers: {
			a1: "answer1",
			a2: "answer2",
			a3: "answer3",
			a4: "answer4"
		},
		correctAnswer: "a1",
		points: "$400"
	},
	{
		id: "1-5",
		question: "Question5",
		answers: {
			a1: "answer1",
			a2: "answer2",
			a3: "answer3",
			a4: "answer4"
		},
		correctAnswer: "a2",
		points: "$500"
	},
];

// ## CREATE BUTTON FUNCTIONALITY ##
// GIVEN user selects a box
// WHEN box is clicked
$( ".boxes" ).click(function( event ) {
  $( ".response-field" ).html(event.target.nodeName);
});


    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
// THEN the box reveals the answer

