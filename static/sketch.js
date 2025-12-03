// sketch.js

let x = 100;
let y = 100;
let diameter = 20;
let speed = 2;

let photodiode;
let controls;
let user;
let clickSound;

function preload() {
  clickSound = new Audio('static/click.mp3');
}

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

  // When user clicks, we log and call markEvent()
  if (user.clicked) {
    diameter = 50;
    wsLogger.log("clicked", {x, y}, false, markEvent);
  } else {
    diameter = 0.95*diameter + 0.05*20;
  }

  noStroke();
  fill(0, 100, 200);
  ellipse(x, y, diameter);

  // batch positions every frame (warning: will make a big file!)
  // wsLogger.log("position", { x, y }, true);

  // Update and render photodiode (default: bottom left corner)
  photodiode.update();
  photodiode.render();
}

// for discrete events that we want to timestamp
function markEvent() {
  photodiode.trigger(50);
  clickSound.play();
}

// hook up to universal controls
function keyPressed(event)  { controls.keyPressed(event); }
function keyReleased(event) { controls.keyReleased(event); }
function mousePressed(event){ controls.mousePressed(event); }
function mouseReleased(event){ controls.mouseReleased(event); }
