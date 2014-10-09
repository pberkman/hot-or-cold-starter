
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
	var userGuess=+$("#userGuess").val();
	var feedback=$("#feedback");
	var difference=Math.abs(userGuess-secretNum);

	/*---Functions---*/
		/*---reset count, guess history and input value---*/
		var reset=function() {
			var numGuess=0;
			$("#count").text(numGuess);
			$(".guessHistory").remove();
			$("#userGuess").val("");
		};

		/*---generate random #---*/
		var random=function() {
			secretNum=Math.floor((Math.random()*100)+1);
		};
		var guessingGame=function() {
			if (userGuess===secretNum) {
				feedback.text("Congratulations! You guessed correctly! Click on '+New Game' to play again!");
			} else if (difference>=50) {
				feedback.text("Ice Cold!");
			} else if (difference>=30 && difference<50) {
				feedback.text("Cold!");
			} else if (difference>=20 && difference<30) {
				feedback.text("Warm!");
			} else if (difference>=10 && difference<20) {
				feedback.text("Hot!");
			} else {
				feedback.text("Very Hot!");
			}

			$("#guessList").append("<li class='guessHistory'>" + userGuess + "</li>");
			numGuess++;
			$("#count").text(numGuess);
		};


		/*--- Start a new game ---*/
		$(".new").click(function() {
			reset();
			random();
			/*---Guessing a number---*/
			$("#guessButton").click(function() {
				guessingGame();
			});
			$(document).keypress(function(e) {
				if(e.which == 13) {
					guessingGame();
				}
			});
		
		});
});

	


