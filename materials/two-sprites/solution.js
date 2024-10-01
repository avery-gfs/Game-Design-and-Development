// Make a game with two sprites that each move in 2 dimensions. One sprite is controlled with the arrows keys, the other with WASD.

var player1 = createSprite(100, 200);
player1.setAnimation("emoji_14_1");
player1.scale = 0.2;

var player2 = createSprite(300, 200);
player2.setAnimation("emoji_16_1");
player2.scale = 0.2;

function draw() {
  background("white");

  // reset the x and y velocities to ensure that the sprite stops moving
  // when no key is pressed down
  player1.velocityX = 0;
  player1.velocityY = 0;

  if (keyDown("w")) {
    player1.velocityY = -10;
  }

  if (keyDown("s")) {
    player1.velocityY = 10;
  }

  if (keyDown("a")) {
    player1.velocityX = -10;
  }

  if (keyDown("d")) {
    player1.velocityX = 10;
  }

  player2.velocityX = 0;
  player2.velocityY = 0;

  if (keyDown("up")) {
    player2.velocityY = -10;
  }

  if (keyDown("down")) {
    player2.velocityY = 10;
  }

  if (keyDown("left")) {
    player2.velocityX = -10;
  }

  if (keyDown("right")) {
    player2.velocityX = 10;
  }

  drawSprites();
}
