function Cactus()
{
    this.x = width;
    this.y = height;

    this.width = 20;
    this.height = 30;

    this.xVel = -5;

    this.update = function()
    {
        this.x += this.xVel;
    }

    this.offscreen = function()
    {
        return this.x < -this.width;
    }

    this.show = function()
    {
        fill(255);
        rect(this.x, this.y - this.height, this.width, this.height);
    }

    this.hits = function(dino)
    {
        if (this.x < dino.x + dino.width && this.x > dino.x - this.width)
            if (dino.y >= height - this.height)
                return true;
        return false;
    }
}