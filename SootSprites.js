class SootSprite {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.jitterOffset = 0;
    this.jitterSpeed = random(0.02, 0.05);
    this.jitterAmount = size * 0.1;
  }

  update() {
    this.jitterOffset = sin(frameCount * this.jitterSpeed) * this.jitterAmount;
  }

  display(playerX, playerY, lightRadius) {
    const distance = dist(this.x, this.y, playerX, playerY);

    if (distance < lightRadius + this.size) {
      push();
      fill(50, 50, 50, 200);
      noStroke();
      circle(this.x, this.y + this.jitterOffset, this.size);
      pop();
    }
  }
}

class SootSpriteManager {
  constructor(numSprites, worldWidth, worldHeight) {
    this.sprites = [];

    for (let i = 0; i < numSprites; i++) {
      const x = random(worldWidth);
      const y = random(worldHeight);
      const size = random(8, 20);
      this.sprites.push(new SootSprite(x, y, size));
    }
  }

  update() {
    this.sprites.forEach((sprite) => sprite.update());
  }

  display(playerX, playerY, lightRadius) {
    this.sprites.forEach((sprite) =>
      sprite.display(playerX, playerY, lightRadius),
    );
  }
}
