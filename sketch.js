var boy1, boy2, boy3, boy4;
var tracker1, tracker2, tracker3, tracker4;

function setup() {
    createCanvas(displayWidth - 50, displayHeight - 200);

    boy1 = createSprite(10, 100, 40, 40);
    boy2 = createSprite(10, 220, 40, 40);
    boy3 = createSprite(10, 340, 40, 40);
    boy4 = createSprite(10, 460, 40, 40);

}

function draw() {

    background("white");

    boy1.velocityX = 0;
    boy1.velocityY = 0;

    camera.position.x = boy1.x + 400;
    camera.position.y = boy1.y + 170;


    if (keyIsDown(RIGHT_ARROW)) {
        boy1.velocityX = 7
    }

    if (frameCount % 15 === 0) {
        boy2.velocityX = random(3, 7);
        boy3.velocityX = random(3, 7);
        boy4.velocityX = random(3, 7);

    }

    drawSprites();
}
