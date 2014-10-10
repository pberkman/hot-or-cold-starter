
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
	$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});
	
	/*--- Variables ---*/
    var secretNum;
	var numGuess=0;
	var feedback=$("#feedback");
	var lastGuess=null;
	var blue=255;
	var red=255;
	var green=255;
	/*---Functions---*/

		/* animate color */
		var colorChange=function(red, green, blue) {
			$(".colorTransition").animate({
				backgroundColor: "rgb(" + red + "," + green + "," + blue + ")"
			},1500);
		};
		/*---generate random #---*/
		var random=function() {
			secretNum=(Math.floor(Math.random()*100)+1);
		};
		/*---reset count, guess history and input value---*/
		var reset=function() {
			numGuess=0;
			lastGuess=null;
			blue=255;
			red=255;
			green=255;
			$("#count").text(numGuess);
			$("#guessList li").remove();
			$("#userGuess").val("");
			feedback.text("Make your Guess!");
			$(".colorTransition").animate({
				backgroundColor:""
			});

			random();
		};
		/*---adding counts and numbers used---*/
		var addCount=function() {
			$("#guessList").append("<li>" + userGuess + "</li>");
			lastGuess = userGuess; //set the users guess to the last guess variable to use in next guess.
			numGuess++;
			$("#count").text(numGuess);
		};

		

		/*---guessing function---*/
		var guessingGame=function() {

			// local variables
			userGuess=+$("#userGuess").val();
			var thisDifference=Math.abs(userGuess-secretNum);
			var lastDifference=Math.abs(lastGuess-secretNum);
			
			// Check whether closer or farther from last guess
			var warmORhot=function() {
				if (thisDifference >= lastDifference) {
					feedback.text("Getting Colder");
					red=red - 6;
					green=green - 4;
					blue=blue-2;
					colorChange(red, green, blue);
					addCount();
				}  else {
					feedback.text("Getting Hotter");
					red=red+2;
					blue=blue - 6;
					green=green - 4;
					colorChange(red, green, blue);
					addCount();
				}
			};

			// if/else based on userGuess
			if (userGuess===secretNum) {
				colorChange(255,0,0);
				$("form").hide();
				if (numGuess < 10) {
					feedback.text("Congratulations you're a wiz! You only have to do " + numGuess + " burpees!");
				} else if (numGuess >= 10 && numGuess < 20) {
					feedback.text("Not bad! You get to do " + numGuess + " burpees!");
				} else {
					feedback.text("Wow about time! You better get going on your " + numGuess + " burpees now!");
				}
			} else if (thisDifference == lastDifference) {
				feedback.text("You just chose that number, pick again!");
			} else if (userGuess>100 || userGuess<=0) {
				feedback.text("Please pick a number between 1 and 100");
			} else if (userGuess==="" || userGuess%1!==0) {
				feedback.text("Please pick a number");
			} else if (thisDifference>=50) {
				if (lastGuess==null) {
					red=165;
					green=242;
					blue=243;
					colorChange(red, green, blue);
					feedback.text("Ice Cold");
					addCount();
				} else {
					warmORhot();
				}
			} else if (thisDifference>=30 && thisDifference<50) {
				if (lastGuess==null) {
					red=153;
					green=204;
					colorChange(red, green, blue);
					feedback.text("Cold");
					addCount();
				} else {
					warmORhot();
				}
			} else if (thisDifference>=20 && thisDifference<30 || lastGuess == null) {
				if (lastGuess==null) {
					blue=153;
					green=204;
					colorChange(red, green, blue);
					feedback.text("Warm");
					addCount();
				} else {
					warmORhot();
				}
			} else if (thisDifference>=10 && thisDifference<20 || lastGuess == null) {
				if (lastGuess==null) {
					green=102;
					blue=102;
					colorChange(red, green, blue);
					feedback.text("Hot");
					addCount();
				} else {
					warmORhot();
				}
			} else {
				if (lastGuess==null) {
					green=51;
					blue=51;
					colorChange(red, green, blue);
					feedback.text("Very Hot");
					addCount();
				} else {
					warmORhot();
				}
			}
		};
		

/*--- Start a new game ---*/
	$(".new").click(function() {
		$("form").show();
		reset();
	});
	/*---generate random number---*/
	random();

/*---Execute Guessing a number---*/
	$("#guessButton").click(function(ev) {
		ev.preventDefault();
		guessingGame();
		$("#userGuess").val(""); /*---clears input---*/
	});

});