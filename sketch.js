var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;
var border1, border2, border3, border4;
var coin, finalArea;
var wallGroup;
var innerArea, test;

function preload()
{
    wallGroup = new Group();
}

function setup()
{
    createCanvas(400, 400);

    finalArea = createSprite(350, 347, 50, 50);
    finalArea.shapeColor = "#bfe5d9";
    coin = createSprite(30, 35, 12, 12);
    coin.shapeColor = "red";
    
    innerArea = createSprite(365, 347, 15, 15);
    innerArea.visible = false;
    createBorders();
    createWalls();

}

function draw()
{
    background(255);
    if (!coin.isTouching(innerArea))
    {
        moveCoin();
        coin.collide(wallGroup);
    }

    if (coin.isTouching(innerArea))
    {
        removeWalls();
        textSize(25);
        fill("red");
        text("You Finished the Maze!", 70, 200);
    }
    drawSprites();
}

function createBorders()
{
    border1 = new Walls(5, 200, 10, 400);
    border2 = new Walls(395, 200, 10, 400);
    border3 = new Walls(200, 5, 400, 10);
    border4 = new Walls(200, 395, 400, 10);
}

function createWalls()
{
    wall1 = new Walls(10, 70, 100, 10);
    wall2 = new Walls(100, 35, 10, 100);
    wall3 = new Walls(60, 130, 200, 10);
    wall4 = new Walls(155, 80, 100, 10);
    wall5 = new Walls(70, 240, 10, 140);
    wall6 = new Walls(70, 360, 150, 10);
    wall7 = new Walls(140, 200, 130, 10);
    wall8 = new Walls(140, 310, 10, 100);
    wall9 = new Walls(200, 230, 10, 70);
    wall10 = new Walls(230, 315, 70, 10);
    wall11 = new Walls(200, 140, 10, 130);
    wall12 = new Walls(260, 180, 10, 270);
    wall13 = new Walls(240, 40, 190, 10);
    wall14 = new Walls(345, 100, 100, 10);
    wall15 = new Walls(310, 150, 100, 10);
    wall16 = new Walls(345, 200, 100, 10);
    wall17 = new Walls(310, 250, 100, 10);
    wall18 = new Walls(355, 300, 80, 10);
    wall19 = new Walls(260, 360, 10, 80);
}

function moveCoin()
{
    if (keyDown(UP_ARROW) || keyDown("w"))
    {
        coin.y -= 3;
    }

    if (keyDown(DOWN_ARROW) || keyDown("s"))
    {
        coin.y += 3;
    }

    if (keyDown(LEFT_ARROW) || keyDown("a"))
    {
        coin.x -= 3;
    }

    if (keyDown(RIGHT_ARROW) || keyDown("d"))
    {
        coin.x += 3;
    }
}

function removeWalls()
{
    wall1.remove(); 
    wall2.remove(); 
    wall3.remove(); 
    wall4.remove(); 
    wall5.remove(); 
    wall6.remove(); 
    wall7.remove(); 
    wall8.remove(); 
    wall9.remove(); 
    wall10.remove();
    wall11.remove();
    wall12.remove();
    wall13.remove();
    wall14.remove();
    wall15.remove();
    wall16.remove();
    wall17.remove();
    wall18.remove();
    wall19.remove();
}
