## [GameLab API](https://studio.code.org/docs/ide/gamelab)

- World geometry
- Sprite properties
- World properties
- Keyboard input
- Mouse input
- Sprite animation

## Javascript Basics

- Types: numbers, booleans, strings, arrays, objects
- Comparison
- Math operations
- Boolean operations
- String operations
- Array operations
- Object basics
- Conditionals
- Loops: for, while
- Custom functions
- Variable scope

## Game Behaviors

- Movement
- Gravity
- Multi-user input
- Simple AI
- Board edge handling
- Spawning
- Groups of sprites
- Collision detection

## Problems

**Two Sprites:** Make a game with two sprites that each move in 2 dimensions. One sprite is controlled with the arrows keys, the other with WASD.

```js
var player1 = createSprite(100, 200);
player1.setAnimation("emoji_14_1");
player1.scale = 0.2;

var player2 = createSprite(300, 200);
player2.setAnimation("emoji_16_1");
player2.scale = 0.2;

function draw() {
  background("white");
  
  // reset the x and y velocities to ensure that:
  //   a) the sprite only moves horizontally or vertically, not diagonally
  //   b) the sprite stops moving when no key is pressed down
  player1.velocityX = 0;
  player1.velocityY = 0;
  
  if (keyDown("w")) {
    player1.velocityY = -10;
  } else if (keyDown("s")) {
    player1.velocityY = 10;
  } else if (keyDown("a")) {
    player1.velocityX = -10;
  } else if (keyDown("d")) {
    player1.velocityX = 10;
  }  
  
  player2.velocityX = 0;
  player2.velocityY = 0;
  
  if (keyDown("up")) {
    player2.velocityY = -10;
  } else if (keyDown("down")) {
    player2.velocityY = 10;
  } else if (keyDown("left")) {
    player2.velocityX = -10;
  } else if (keyDown("right")) {
    player2.velocityX = 10;
  }
  
  drawSprites();
}
```

**Gravity:** Make a game with a sprite that falls under the force of gravity and stops at the bottom of the screen. Make the up arrow jump the sprite.

**Elastic:** Make a sprite that follows the mouse with "elastic" motion.

**Catch:** Make a player that moves laterally and catches falling objects, with a counter.

**Projectile:** Make a projectile simulator.
