// sketch.js

let x = 100;
let y = 100;
let speed = 2;

let photodiode;
let controls;
let user;

function setup() {
  createCanvas(400, 400);
  background(220);

  // Log initial state
  wsLogger.log("init", { x, y });

  photodiode = new Photodiode({size: 50}, width, height);
  controls = new UnifiedControls(wsLogger);
  user = new TaskControls(controls);
}

function draw() {
  background(220);
  controls.update();

  // Can move circle with arrow keys, controller, or mouse
  if (user.moveLeft) x -= speed;
  else if (user.moveRight) x += speed;

  fill(0, 100, 200);
  ellipse(x, y, 30, 30);

  // batch positions every frame
  // wsLogger.log("position", { x, y }, true);

  // Update and render photodiode (default: bottom left corner)
  photodiode.update();
  photodiode.render();
}

function keyPressed(event)  { controls.keyPressed(event); photodiode.trigger(); }
function keyReleased(event) { controls.keyReleased(event); }
function mousePressed(event){ controls.mousePressed(event); photodiode.trigger(); }
function mouseReleased(event){ controls.mouseReleased(event); }
