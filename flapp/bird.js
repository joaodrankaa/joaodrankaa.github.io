
function Bird() {
  this.y = height/9;
  this.x = 64;

  this.gravity = 0.3;
  this.lift = -8;
  this.velocity = 0;

  this.show = function() {
    fill(150,255,0);
    ellipse(this.x, this.y, 29, 29);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
