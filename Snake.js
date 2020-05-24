class Snake {
  
  constructor() {
  	this.frame = [];
    this.frame[0] = createVector(0,0);
    this.xspeed = 0;
    this.yspeed = 0;
  }
  
  //to set coordinates of snake
  setDir(x, y) {
  	this.xspeed = x;
    this.yspeed = y;
  }
  
  //copies last element(of frame[]) by using copy();
  //adds it to the end of the[] by using push();
  //[this.frame.lenght - 1] to denote last element of array
  grow() {
  	let head = this.frame[this.frame.length-1].copy();
    this.frame.push(head);
  }

  // updates position of snake
  //removes first element of array(tail of the snake) using shift();
  // moves new element to end of array using push();
  //[this.frame.lenght - 1] to denote last element of array
  update() {
  	let head = this.frame[this.frame.length-1].copy();
    this.frame.shift();
    head.x += this.xspeed;
    head.y += this.yspeed;
    this.frame.push(head);
  }
  
  
  //to eat the food
  eat(pos) {
  	let x = this.frame[this.frame.length-1].x;
    let y = this.frame[this.frame.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  //to display the snake
  display() {
  	for(let i = 0; i < this.frame.length; i++) {
    	fill(255);
      noStroke();
      rect(this.frame[i].x, this.frame[i].y, 1, 1)
    }
  }

  //to end the game
  GameEnd() {
  	let x = this.frame[this.frame.length-1].x;
    let y = this.frame[this.frame.length-1].y;

    if(x > rows-1 || x < 0 || y > cols-1 || y < 0) {
       return true;
    }

    for(let i = 0; i < this.frame.length-1; i++) {
    	let part = this.frame[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }

}