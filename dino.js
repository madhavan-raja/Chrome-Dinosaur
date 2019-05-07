function Dino()
{
    this.x = 100;
    this.y = height;

    this.width = 30;
    this.height = 50;

    this.yVel = 0;
    this.gravity = 1;

    this.grounded = true;
    this.jumpStrength = 15;

    this.update = function()
    {
        this.yVel += this.gravity;
        this.y += this.yVel;

        if (this.y >= height)
        {
            this.y = height;
            this.yVel = 0;

            this.grounded = true;
        }
    }

    this.show = function()
    {
        fill(255);
        rect(this.x, this.y - this.height, this.width, this.height);
    }

    this.jump = function()
    {
        if (this.grounded)
        {
            this.yVel = -this.jumpStrength;
            this.grounded = false;
        }
    }

    this.reset = function()
    {
        
    }
}