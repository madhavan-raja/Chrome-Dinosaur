var dino;
var cactus = [];
var ground;

let score = 0;
let highScore = 0;

let movementVelocity = -5;

function setup()
{
	createCanvas(800, 200);
	ground = new Ground();
	dino = new Dino();

	cactus.push(new Cactus());
}

function draw()
{
	background(255);

	ground.update();
	ground.show();

	dino.update();
	dino.show();

	if (frameCount % 150 == 0)
		cactus.push(new Cactus());

	for (let i = cactus.length - 1; i >= 0; i--)
	{
		cactus[i].update();
		cactus[i].show();

		if (cactus[i].offscreen())
		{
			cactus.splice(i, 1);

			score += 1;
			if (score > highScore)
				highScore = score;
		}

		if (cactus[i].hits(dino))
		{
			dino.reset();
			cactus = [];
			score = 0;
		}
	}
}

function keyPressed()
{
	if (key == ' ')
		dino.jump();
}