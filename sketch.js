let snake;
let size = 20;
let food;
let cols;
let rows;

function setup() {
  createCanvas(400, 400);

  cols = floor(width / size);
  rows = floor(height / size);

  frameRate(5);

  snake = new Snake();

  pickLocation();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(size);

  background(0);

  if (snake.eat(food)) {
    pickLocation();
  }
  snake.update();
  snake.display();

  if (snake.GameEnd()) {
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function pickLocation() {
  let x = floor(random(rows));
  let y = floor(random(cols));
  food = createVector(x, y);

}

