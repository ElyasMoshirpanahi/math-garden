const BACKGROUND_COLOR = '#000000';
const LINE_COLOR       = '#FFFFFF';
const LINE_WIDTH       =  15 ; 


var currentX = 0 ; 
var currentY = 0 ; 
var previousX = 0 ;
var previousY = 0 ; 


var canvas;
var context;


function prepareCanvas() {
	console.clear();
	//console.log("prepare Canvas");
	canvas = document.getElementById('my-canvas');
	context = canvas.getContext('2d');
	var pressed     = false;




    context.fillStyle = BACKGROUND_COLOR	;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';



    document.addEventListener('mousedown',function (event){

		currentX=event.clientX - canvas.offsetLeft;
		currentY=event.clientY - canvas.offsetTop;

    	//console.log("Mouse Clicked!");
    	pressed   = true;
    	
    });


    document.addEventListener('mouseup',function (event){

    	//console.log("Mouse Released!");
    	pressed   = false;
    });



    canvas.addEventListener('mouseleave',function (event){

    	//console.log("Mouse Released!");
    	pressed   = false;
    });

	document.addEventListener('mousemove',function (event){


		if (pressed){
			previousX=currentX;
			previousY=currentY;

			currentX=event.clientX - canvas.offsetLeft;
			currentY=event.clientY - canvas.offsetTop;
			draw();
		};
		
		// //console.log(`Current X: ${currentX}`);

		
	});
   


   //touch
   canvas.addEventListener('touchstart',function(){
		//console.log("Touch start");

		currentX=event.touches[0].clientX - canvas.offsetLeft;
		currentY=event.touches[0].clientY - canvas.offsetTop;
    	pressed   = true;
   });


    canvas.addEventListener('touchend',function (event){

    	//console.log("Touch End");
    	pressed   = false;
    });



    canvas.addEventListener('touchcancel',function (event){

    	//console.log("touch out of the box!");
    	pressed   = false;
    });
    
	canvas.addEventListener('touchmove',function (event){


		if (pressed){
			previousX=currentX;
			previousY=currentY;

			currentX=event.touches[0].clientX - canvas.offsetLeft;
			currentY=event.touches[0].clientY - canvas.offsetTop;
			draw();
		};
		
		// //console.log(`Current X: ${currentX}`);

		
	});



}

function draw() {
	context.beginPath();
	context.moveTo(previousX, previousY);
	context.lineTo(currentX , currentY );
	context.closePath();
	context.stroke();
}

function clearCanvas(){
	currentX = 0 ; 
	currentY = 0 ; 
	previousX = 0 ;
	previousY = 0 ;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

}
