
//create a variable for each of the pictures to be clicked through
var currentImage = 1;


//click event for the skip button
//locate skip button. <input value="skip">
$("input.skip").click(function(){
//tell it not to skip if it gets to the end of the pictures
	if (currentImage == 8) {
		//do nothing
	} else {
//tell it to change the variable when the button is clicked
	currentImage = currentImage + 1;
//locate image to vote on. <img id="image-to-vote-on" src="images/food1.jpg">. call it with jquery $('')
//update the source attribute to the new value (that clicking 'skip' will change it to)
	$("#image-to-vote-on").attr("src", "images/food" + currentImage + ".jpg");
}
});


//click event for the back button 
$("input.skip").click(function(){
	if currentImage == 1 {

	} else {
		currentImage = currentImage - 1;
		$("#image-to-vote-on").attr("src", "images/food" + currentImage + ".jpg");
	}
});

//change event for the selection list
$("your-vote").change(function(){
	console.log(this);
});