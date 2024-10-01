console.log("Game Dev Info");

console.log({
  name: "Avery Nortonsmith",
  email: "anortonsmith@germantownfriends.org",
});

const description = `
Decades of grassroots research has confirmed: video games are fun. But besides being fun, they're
also a great way to learn about software engineering, computer graphics, 2D and 3D design, physics,
and much more! In this class, we will explore game programming and design in its many forms. We'll
start by creating 2D games using Javascript, and learn about core game programming concepts. After
that, we'll look at multiplayer games and text-based games. Finally, we'll explore 3D game
programming using Unity.
`;

console.log(description.replaceAll("\n", " ").trim());

const topics = [
  "User input and events",
  "Gravity and physics",
  "Game state and logic",
  "Colors",
  "Audio",
  "Simple game AI",
  "2D and 3D graphics",
  "Textures and lighting",
  "Terrain",
  "Text based games",
  "Multiplayer",
  "Randomness",
  "Sprite design and pixel art",
];

console.log(topics.map((topic) => `• ${topic}`).join("\n"));
