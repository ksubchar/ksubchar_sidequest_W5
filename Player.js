class Player {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.s = speed ?? 7;
    this.angle = 0;
  }

  updateInput() {
    const dx =
      (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) -
      (keyIsDown(LEFT_ARROW) || keyIsDown(65));

    const dy =
      (keyIsDown(DOWN_ARROW) || keyIsDown(83)) -
      (keyIsDown(UP_ARROW) || keyIsDown(87));

    const len = max(1, abs(dx) + abs(dy));
    this.x += (dx / len) * this.s;
    this.y += (dy / len) * this.s;

    // Update angle to face direction of movement
    if (dx !== 0 || dy !== 0) {
      this.angle = atan2(dy, dx);
    }
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    fill(0);
    noStroke();
    rect(-15, -25, 12, 45, 10);
    rect(15, -25, 12, 45, 10);

    fill(255, 50, 30);
    noStroke();
    rect(-22, -20, 58, 35, 10);

    fill(225);
    noStroke();
    rect(-12, -15, 5, 25);
    rect(8, -15, 12, 25);

    fill(252, 200, 30);
    noStroke();
    rect(28, -15, 6, 8, 3);
    rect(28, 2, 6, 8, 3);

    pop();
  }
}
