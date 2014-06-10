
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
  


/*--- Start a new game ---*/	
	$(".new").click(function() {
		/*--- Variables ---*/
		var secretNum=Math.floor(Math.random()*101);
		
		/*---guessing a number---*/
		
  		$("#guessButton").click(function() {
  					var userGuess=+$("#userGuess").val();
					var feedback=$("#feedback");
					var difference=Math.abs(userGuess-secretNum);
					var numGuess=0;	
			
  				if (userGuess===secretNum) {
  					feedback.text("Congratulations! You guessed correctly!");
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

  				$("#guessList").append("<li>" + userGuess + "</li>");
  				numGuess++;
  				$("#count").text(numGuess);
  			
  		});
	});
   	
});

/*---var addNum=function() {
  			$("#guessList").append("<li>" + userGuess + "</li>");
  		};
---*/


