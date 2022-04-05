const canvas = document.getElementById('canvas');
var rect = canvas.getBoundingClientRect();
rect = {
	'left': rect.left, 
	'right': rect.right, 
	'top': rect.top, 
	'bottom': rect.bottom
};

const ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000';
var squareSize = canvas.width / 13;
var x = -squareSize;
var y = -squareSize;

// ctx.fillRect(x,y,25,25);


window.addEventListener("keydown", handleKeyPress)

function handleKeyPress(e) {
	console.log(`x: ${x} y: ${y}`);
	ctx.fillStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`;
	if(e.keyCode == 87 || e.keyCode == 75 && x >= 0 && y >= 0 && x <= canvas.width - squareSize && y <= canvas.height - squareSize)
		y = y - squareSize;
	if(e.keyCode == 83 || e.keyCode == 74 && x >= 0 && y >= 0 && x <= canvas.width - squareSize && y <= canvas.height - squareSize)
		y = y + squareSize;
	if(e.keyCode == 68 || e.keyCode == 76 && x >= 0 && y >= 0 && x <= canvas.width - squareSize && y <= canvas.height - squareSize)
		x = x + squareSize;
	if(e.keyCode == 65 || e.keyCode == 72 && x >= 0 && y >= 0 && x <= canvas.width - squareSize && y <= canvas.height - squareSize)
		x = x - squareSize;
	if(x>canvas.width - squareSize)
		x = canvas.width - squareSize;
	if(y>canvas.height - squareSize)
		y = canvas.height - squareSize;
	if(x<0)
		x=0;
	if(y<0)
		y=0;

	if(e.keyCode == 67)
		ctx.clearRect(0,0, canvas.width, canvas.height);
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(x,y, squareSize,squareSize);	
}
