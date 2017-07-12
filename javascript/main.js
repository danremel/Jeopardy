console.log("working");


// ## CREATE BUTTON FUNCTIONALITY ##
// GIVEN user selects a box
$( ".box-container" ).click(function( event ) {
  $( ".response-field" ).html( "clicked: " + event.target.nodeName );
});
// WHEN box is clicked

// THEN the box reveals the answer

