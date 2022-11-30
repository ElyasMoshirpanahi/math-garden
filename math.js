var answer ; 
var score=0 ;
var backgroundImages = [];

function nextQuestion() {
	first = Math.floor(Math.random()*5);
	second= Math.floor(Math.random()*6);

	document.getElementById('n1').innerHTML= first;
	document.getElementById('n2').innerHTML= second;

	answer = first + second;
	console.log("Real Correct sum of the numbers are : " + answer);
	

}


function checkAnswer(){
	const prediction = predictImage();
	console.log(`Answer : ${answer} , prediction : ${prediction}`);
	if (prediction == answer){
		if (score <= 5){
			score++;
			console.log(`Score: ${score}  Correct Answer!`);
			backgroundImages.push(`url(images/background${score}.svg)`);
			document.body.style.backgroundImage = backgroundImages;
		}else{
			alert("Congradulation You won!");
			score = 0 ;
			backgroundImages= [];
			document.body.style.backgroundImage = backgroundImages;
		}
	} else {
		if (score<=0){
			score = 0;
			console.log(`Score: ${score}  Wrong Answer!`);
			alert("oops wrong answer try again!");
		}else{

			score--;
			alert("oops wrong answer try again!");
			setTimeout(function(){

			backgroundImages.pop();
			document.body.style.backgroundImage = backgroundImages;
			console.log(`Score: ${score}  Wrong Answer!`);
    		
		},1000);
	
	}
		
	}
}