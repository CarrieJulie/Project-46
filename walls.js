class Walls
{
    constructor(x, y, w, h)
    {
        this.body = createSprite(x, y, w, h);
        this.body.shapeColor = "black";
        wallGroup.add(this.body);
    }

    remove()
    {
        this.body.visible = false;
    }
}