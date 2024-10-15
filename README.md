## Functions

Functions help us reduce repetition in our code and build more powerful
programs. You may find that functions you write for one program can be reused in
other projects.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

```js
// maximum takes two numerical arguments, a and b
// and returns the greater of the two numbers
function maximum(a, b) {
  if (a > b) {
    // return ends the function immediately
    return a; // give back the number a as the result
  }

  return b; // give back the number b as the result
}

// Call the maximum function with two arguments and assign the
// result to the variable m
m = maximum(5, 6); // m will equal 6
```

Terms:

- An **argument** is a value that is passed into a function when it's run.
- A **parameter** is the name of the variable that argument values are assigned
  to inside the function.
- **Calling** a function means giving a function the arguments it needs and
  running the code inside.
- A **return** value is the value that the function gives you back as a result
  when you call it.

Without using functions:

```js
var spriteA = createSprite(200, 200);
spriteA.setAnimation("emoji_14_1");
spriteA.scale = 0.2;
spriteA.setSpeedAndDirection(5, randomNumber(0, 360));

var spriteB = createSprite(200, 200);
spriteB.setAnimation("emoji_14_1");
spriteB.scale = 0.2;
spriteB.setSpeedAndDirection(5, randomNumber(0, 360));

var spriteC = createSprite(200, 200);
spriteC.setAnimation("emoji_14_1");
spriteC.scale = 0.2;
spriteC.setSpeedAndDirection(5, randomNumber(0, 360));

var spriteD = createSprite(200, 200);
spriteD.setAnimation("emoji_14_1");
spriteD.scale = 0.2;
spriteD.setSpeedAndDirection(5, randomNumber(0, 360));

function draw() {
  background("white");

  if (spriteA.x < 0) {
    spriteA.x = 400;
  }

  if (spriteA.x > 400) {
    spriteA.x = 0;
  }

  if (spriteA.y < 0) {
    spriteA.y = 400;
  }

  if (spriteA.y > 400) {
    spriteA.y = 0;
  }

  if (spriteB.x < 0) {
    spriteB.x = 400;
  }

  if (spriteB.x > 400) {
    spriteB.x = 0;
  }

  if (spriteB.y < 0) {
    spriteB.y = 400;
  }

  if (spriteB.y > 400) {
    spriteB.y = 0;
  }

  if (spriteC.x < 0) {
    spriteC.x = 400;
  }

  if (spriteC.x > 400) {
    spriteC.x = 0;
  }

  if (spriteC.y < 0) {
    spriteC.y = 400;
  }

  if (spriteC.y > 400) {
    spriteC.y = 0;
  }

  if (spriteD.x < 0) {
    spriteD.x = 400;
  }

  if (spriteD.x > 400) {
    spriteD.x = 0;
  }

  if (spriteD.y < 0) {
    spriteD.y = 400;
  }

  if (spriteD.y > 400) {
    spriteD.y = 0;
  }

  drawSprites();
}
```

With functions:

```js
// makeEmoji takes no arguments, and returns a new sprite object
function makeEmoji() {
  var sprite = createSprite(200, 200);
  sprite.setAnimation("emoji_14_1");
  sprite.scale = 0.2;
  sprite.setSpeedAndDirection(5, randomNumber(0, 360));
  return sprite;
}

// We can use makeEmoji to make 4 new sprites
var spriteA = makeEmoji();
var spriteB = makeEmoji();
var spriteC = makeEmoji();
var spriteD = makeEmoji();

// wrapPosition takes a sprite object as an argument, and adjusts
// the sprite's position if the sprite has gone off the edge of the board
// wrapPosition doesn't return any value
function wrapPosition(sprite) {
  if (sprite.x < 0) {
    sprite.x = 400;
  }

  if (sprite.x > 400) {
    sprite.x = 0;
  }

  if (sprite.y < 0) {
    sprite.y = 400;
  }

  if (sprite.y > 400) {
    sprite.y = 0;
  }
}

function draw() {
  background("white");

  // We can give our sprite objects to wrapPosition to
  // have them wrap around the edges of the board
  wrapPosition(spriteA);
  wrapPosition(spriteB);
  wrapPosition(spriteC);
  wrapPosition(spriteD);

  drawSprites();
}
```

## Independent Project

Your game should include:

- [ ] Multiple Sprites
- [ ] At least 1 custom-designed sprite
- [ ] A background
- [ ] User input
- [ ] Scoring
- [ ] Game over / restart feature
- [ ] At least 1 collision check
- [ ] At least 1 function

Write a written description of your game, how it works, what they control are,
the conditions for winning / losing, what strategy the user will need to use to
play it, etc.

Practice: write a planning document for flappy bird.

## Flappy Bird Review

- Bird code walkthrough
- Variables vs magic numbers
- Collider restrictions (separate pipe sprites)
- Visibility
- Random for one pipe, offset for the other
- Parallax
- Text / background draw order

## Game Design Ethics:

https://en.wikipedia.org/wiki/Flappy_Bird#Discontinuation

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

## Links

[Code.org notes doc](notes.md)

[Code.org game lab](https://studio.code.org/projects)

[Code.org lessons](https://studio.code.org/s/csd3-2024)

[Code.org docs](https://studio.code.org/docs/ide/gamelab)

[Javascript language guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Javascript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

[Pixel art editor](https://www.pixilart.com/draw)

[Image editor](https://www.photopea.com/)
