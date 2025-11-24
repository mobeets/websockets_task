// sketch.js
let x = 100;
let y = 100;
let speed = 2;

function setup() {
  createCanvas(400, 400);
  background(220);

  // Log initial state
  wsLogger.log("init", { x, y });
}

function draw() {
  background(220);

  // Move circle with arrow keys
  if (keyIsDown(LEFT_ARROW)) x -= speed;
  if (keyIsDown(RIGHT_ARROW)) x += speed;
  if (keyIsDown(UP_ARROW)) y -= speed;
  if (keyIsDown(DOWN_ARROW)) y += speed;

  fill(0, 100, 200);
  ellipse(x, y, 30, 30);

  // batch positions every frame
  // wsLogger.log("position", { x, y }, true);
}

function keyPressed() {
  wsLogger.log("keyPressed", { key: key }, true);
}

function keyReleased() {
  wsLogger.log("keyReleased", { key: key }, true);
}
