// Make a sprite that follows the mouse with a constant velocity.

var sprite = createSprite(200, 200);
sprite.setAnimation("halloweenemoji_04_1");
sprite.scale = 0.1;

var speed = 10;
var buffer = speed / 2;

function draw() {
  background("white");

  // We add / subtract a buffer value from our lower and upper
  // bounds checks to make a "dead zone" for the sprite
  // Otherwise we'll get oscillations when the sprite is
  // near the mouse

  if (World.mouseX + buffer < sprite.x) {
    sprite.velocityX = -speed;
  } else if (World.mouseX - buffer > sprite.x) {
    sprite.velocityX = speed;
  } else {
    sprite.velocityX = 0;
  }

  if (World.mouseY + buffer < sprite.y) {
    sprite.velocityY = -speed;
  } else if (World.mouseY - buffer > sprite.y) {
    sprite.velocityY = speed;
  } else {
    sprite.velocityY = 0;
  }

  drawSprites();
}
