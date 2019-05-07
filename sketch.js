var dino;
var cactus = [];

let score = 0;
let highScore = 0;

function setup()
{
	createCanvas(800, 300);
	dino = new Dino();

	cactus.push(new Cactus());
}

function draw()
{
	background(51);

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
	
			/*if (birds[i].hits(pipe))
			{
				pipe.reset();
				birds = [];
				score = 0;
			}*/
		}
}

function keyPressed()
{
	if (key == ' ')
		dino.jump();
}