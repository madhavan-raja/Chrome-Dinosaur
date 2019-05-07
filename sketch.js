var dino;
let score = 0;
let highScore = 0;

function setup()
{
	createCanvas(800, 300);
	dino = new Dino();
}

function draw()
{
	background(51);
	dino.update();
	dino.show();
}

function keyPressed()
{
	if (key == ' ')
		dino.jump();
}