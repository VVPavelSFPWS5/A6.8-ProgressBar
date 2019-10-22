$(document).ready(function() {

		let widthBar = 0;
		let loadBar = ""

	$('#proc1').click(function() {			
			widthBar = widthBar + 1;
			loadBar = widthBar +"%";
			$("#my-progress-bar").width(loadBar);
			document.getElementById('header').innerText = "А6.8 Прогресс барррр!" + "   " + (loadBar);	
		});
	$('#proc3').click(function() {			
			widthBar = widthBar + 3;
			loadBar = widthBar +"%";
			$("#my-progress-bar").width(loadBar);
			document.getElementById('header').innerText = "А6.8 Прогресс барррр!" + "   " + (loadBar);	
		});
	$('#proc7').click(function() {			
			widthBar = widthBar + 7;
			loadBar = widthBar +"%";
			$("#my-progress-bar").width(loadBar);
			document.getElementById('header').innerText = "А6.8 Прогресс барррр!" + "   " + (loadBar);	
		});

});//конец READY
