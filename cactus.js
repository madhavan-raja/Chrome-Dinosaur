function Cactus()
{
    this.x = width;
    this.y = height;

    this.cactiWidth = 20;
    this.cactiHeight = 30;

    this.xVel = -5;

    this.update = function()
    {
        this.x += this.xVel;
    }

    this.offscreen = function()
    {
        return this.x < -this.cactiWidth;
    }

    this.show = function()
    {
        fill(255);
        rect(this.x, this.y - this.cactiHeight, this.cactiWidth, this.cactiHeight);
    }
}