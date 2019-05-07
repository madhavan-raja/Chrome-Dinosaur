let isPlaying = false;

var dino;
var cactus = [];
var ground;

let score = 0;
let highScore = 0;

let movementVelocity = -5;

let nextCactus = 0;

function setup()
{
	createCanvas(800, 200);
	ground = new Ground();
	dino = new Dino();
}

function draw()
{
	background(255);

	ground.update();
	ground.show();

	dino.update();
	dino.show();

	if (nextCactus <= 0)
	{
		cactus.push(new Cactus());
		nextCactus = random(100, 200);
	}

	nextCactus--;

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
		
		if (cactus[i])
		{
			if (cactus[i].hits(dino))
			{
				cactus = [];
				score = 0;

				ground.x = 0;

				noLoop();
			}
		}
	}
}

function keyPressed()
{
	if (key == ' ')
	{
		dino.jump();
		isPlaying = true;
		loop();
	}
}