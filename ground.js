function Ground()
{
    var graphics = loadImage('assets/ground.png');
    this.x = 0;

    this.update = function()
    {
        this.x += movementVelocity;

        if (this.x <= -width)
            this.x = 0;
    }

    this.show = function()
    {
        image(graphics, this.x, height - graphics.height);
    }
}