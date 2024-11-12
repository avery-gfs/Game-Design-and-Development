## Emojis

https://emojipedia.org/

You can embed emojis in Python strings to make text based games more visually
interesting.

```py
print("Pet Simulator 😺")
```

## Clearing the Screen

You can use `os.system("clear")` to clear the screen, which is helpful when
making text based games. Make sure you `import` the `os` module.

## User Input

```py
# Prompts the user for their name and stores it in a variable
name = input("Enter your name: ")

# Prompts the user for their age and stores it in a variable
# We use the int function to convert the input text into a number
age = int(input("Enter your age: "))
```

## Python Imports

Python makes you import modules (libraries) in order to access certain built-in
functions. I'd recommend adding these commonly used import lines at the
beginning of every program you write.

```py
import math     # for accessing math functions like min and max
import os       # for certain OS features
import random   # for generating and selecting random values
import readline # for handling user input elegantly
import time     # for timing things and making the program pause
```

## Basic Python

https://www.w3schools.com/python/

**General notes**

- Python doesn't use `;` to end lines.

- Python uses `:` and indentation instead of `{}` to show what code goes inside
  conditionals and loops. Make sure you are indenting your lines of code
  correctly, as this will affect how your program runs.

**Comments**

```js
// This is a comment
```

```py
# This is a comment
```

- Python uses `#` for comments instead of `//`.

**Variables**

_Javascript_

```js
var name = "Avery";
```

_Python_

```py
name = "Avery"
```

- Python doesn't use `var` when making new variables.

**Logic**

```js
age >= 18 && age < 60;
```

_Python_

```py
age >= 18 and age < 60
```

- Python uses `and` instead of `&&` for logical and.
- Python uses `or` instead of `or` for logical or.

**Printing**

_Javascript_

```js
console.log("Hello world");
console.log("Hello " + name);
console.log(age);
```

_Python_

```py
print("Hello world")
print("Hello", name)
print(age)
```

**Conditionals**

_Javascript_

```js
if (direction == "left") {
  vx = -1;
} else if (direction == "right") {
  vx = 1;
} else {
  vx = 0;
}
```

_Python_

```py
if direction == "left":
    vx = -1
elif direction == "right":
    vx = 1
else:
    vx = 0
```

- Python doesn't use parentheses on conditions.
- Python uses `elif` instead of `else if`.

**Functions**

_Javascript_

```js
function maximum(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}
```

_Python_

```py
def maximum(a, b):
    if a > b:
        return a

    return b
```

**Numerical For Loops**

_Javascript_

```js
for (var x = 0; x < 10; x++) {
  console.log(x);
}
```

_Python_

```py
for x in range(0, 10):
    print(x)
```

- You can loop over a range of numbers in Python use a `for` loop with the
  `range` function.
- The `range` function does **not** include the ending value that you give it.
  So `range(0, 10)` loops over the numbers from `0` to `9`. You can decide for
  yourself whether this was a good decision on the part of Python's designers.

## Groups

We can use groups to keep track of multiple sprites at once. Groups, like
functions, can make our code easier to write, modify, and understand.

- Make a new group:

  ```js
  var group = createGroup();
  ```

- Add a variable `sprite` to a group:

  ```js
  group.add(sprite);
  ```

- Get the number of sprites in a group:

  ```js
  var numSprites = group.length;
  ```

- Access a sprite from the group at the position `index`:

  ```js
  var sprite = group.get(index);
  ```

Groups store sprite objects in a specific order. We call the position of a
sprite in a group its "index". Groups are "zero-indexed", which means that the
first sprite in the group has index `0`, the second has index `1`, and so on.

The most common way to access sprites in a group is using a `for` loop. We set
up the loop variable to start at `0` (the first index in the group), and loop
while the index is less than the length of the group. Since groups are
zero-indexed, the last sprite will be at index `group.length - 1`, so we use `<`
instead of `<=` for our condition. Inside the loop, we can use `group.get(i)` to
get each sprite object from the group.

```js
for (var i = 0; i < group.length; i++) {
  var sprite = group.get(i);
  // Do something with sprite
}
```

Consider the floating-emoji demo from our lesson on functions. We were able to
eliminate a lot of repetition from our code by using functions, but we still had
to call `makeEmoji` and `wrapPosition` for each sprite variable. We can simplify
our code farther using a group:

```js
function makeEmoji() {
  var sprite = createSprite(200, 200);
  sprite.setAnimation("emoji_14_1");
  sprite.scale = 0.2;
  sprite.setSpeedAndDirection(5, randomNumber(0, 360));
  return sprite;
}

// We can use a group to store our emoji sprites
var emojis = createGroup();

// Add 4 emoji sprites to the emojis group
for (var i = 0; i < 4; i++) {
  // Make a new emoji sprite and add it to the group
  var sprite = makeEmoji();
  emojis.add(sprite);
}

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

  // Use a loop to call wrapPosition for each emoji sprite
  for (var i = 0; i < emojis.length; i++) {
    var sprite = emojis.get(i);
    wrapPosition(sprite);
  }

  drawSprites();
}
```

If we wanted our game to have `10` emoji characters instead of `4`, all we would
have to do is change limit in the first loop's condition from `4` to `10`. Our
for loops would handle the rest. No more having to type out separate function
calls for each sprite!

With functions, loops, conditionals, and groups, you now have the building
blocks to add complex functionality and behavior to your games.

## For Loops

We can use `for` loops to run a piece of code multiple times. A `for` loop has
four components:

- A loop variable that begins at some starting value and changes as the loop
  runs
- A condition that tells the loop when to keep running
- An update expression that tels the loop how to update the loop variable
- A block of code that runs for each iteration (cycle) of the loop

```js
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
```

The loop above will run `11` times. The variable `i` is set to `0` for the first
iteration, `1` for the second, and so on up to `10`. The `console.log` call
prints out each value of `i`, so the code will print out the numbers from `0` to
`10`.

In the code above:

- `i` is the loop variable and `0` is its starting value
- `i <= 10` is the loop condition (the loop will keep running as long as `i` is
  less than or equal to `10`)
- `i++` is the update expression, which increases `i` by one. This is equivalent
  to `i += 1` or `i = i + 1`
- `console.log(i)` is the code that runs for each iteration of the loop

For loops are especially powerful when working with collections of sprites. See
the groups examples above.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

## While Loops

We can use `while` loops to run a piece of code as long as some condition is
true. A `while` loop has two components:

- A condition that tells the loop when to keep running
- A block of code that runs for each iteration (cycle) of the loop

```js
var n = 1;

while (n < 100) {
  console.log(n);
  n *= 2;
}
```

The loop above will run 7 times. The variable `n` is set to `1` before the loop
runs, and gets printed and doubled in each iteration of the loop. The code will
print the numbers `1`, `2`, `4`, `8`, `16`, `32`, `64` (the first 7 powers of
`2`) before reaching a value above `100` and stopping the loop.

In the code above:

- `i < 100` is the loop condition (the loop will keep running as long as `n` is
  less than `100`)
- `console.log(i)` and `n *= 2` are the lines of code that runs for each
  iteration of the loop

We won't use `while` loops as often as `for` loops when writing games, but
they're good to be aware of as a general-purpose programming concept.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

## Infinite Loops

Note that is it possible to write a `for` or `while` loop that runs forever. The
is know as an "infinite loop" and is usually a result of a flaw in your code.

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
var emojiA = createSprite(200, 200);
emojiA.setAnimation("emoji_14_1");
emojiA.scale = 0.2;
emojiA.setSpeedAndDirection(5, randomNumber(0, 360));

var emojiB = createSprite(200, 200);
emojiB.setAnimation("emoji_14_1");
emojiB.scale = 0.2;
emojiB.setSpeedAndDirection(5, randomNumber(0, 360));

var emojiC = createSprite(200, 200);
emojiC.setAnimation("emoji_14_1");
emojiC.scale = 0.2;
emojiC.setSpeedAndDirection(5, randomNumber(0, 360));

var emojiD = createSprite(200, 200);
emojiD.setAnimation("emoji_14_1");
emojiD.scale = 0.2;
emojiD.setSpeedAndDirection(5, randomNumber(0, 360));

function draw() {
  background("white");

  if (emojiA.x < 0) {
    emojiA.x = 400;
  }

  if (emojiA.x > 400) {
    emojiA.x = 0;
  }

  if (emojiA.y < 0) {
    emojiA.y = 400;
  }

  if (emojiA.y > 400) {
    emojiA.y = 0;
  }

  if (emojiB.x < 0) {
    emojiB.x = 400;
  }

  if (emojiB.x > 400) {
    emojiB.x = 0;
  }

  if (emojiB.y < 0) {
    emojiB.y = 400;
  }

  if (emojiB.y > 400) {
    emojiB.y = 0;
  }

  if (emojiC.x < 0) {
    emojiC.x = 400;
  }

  if (emojiC.x > 400) {
    emojiC.x = 0;
  }

  if (emojiC.y < 0) {
    emojiC.y = 400;
  }

  if (emojiC.y > 400) {
    emojiC.y = 0;
  }

  if (emojiD.x < 0) {
    emojiD.x = 400;
  }

  if (emojiD.x > 400) {
    emojiD.x = 0;
  }

  if (emojiD.y < 0) {
    emojiD.y = 400;
  }

  if (emojiD.y > 400) {
    emojiD.y = 0;
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
var emojiA = makeEmoji();
var emojiB = makeEmoji();
var emojiC = makeEmoji();
var emojiD = makeEmoji();

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
  wrapPosition(emojiA);
  wrapPosition(emojiB);
  wrapPosition(emojiC);
  wrapPosition(emojiD);

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
