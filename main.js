// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var block_image_object= "";

function newImage(getImage)
{
	// para enviar imagens
	fabric.Image.fromURL(getImage, function(Img){
		block_image_object = Img;

		block_image_object.scaleToWidth(blockImageWidth);
		block_image_object.scaleToHeight(blockImageHeight);
		block_image_object.set({
			top:blockY,
			left:blockX
		})
		canvas.add(block_image_object);
	  })
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
	    newImage('rr.jpg');
		console.log("e");
		// enviar ranger escarlate
	}
	if(keyPressed == '86')
	{
		blockX = 200;
	    newImage('gr.png');
		console.log("v");
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
		newImage('yr.png');
		console.log("a");

	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		newImage('pr.png');
		console.log("r");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	// enviar ranger índigo
	    newImage('br.png');
		console.log("i");
	}
	
}