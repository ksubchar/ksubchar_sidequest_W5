class SootSprites {
  constructor(x, y, jitter) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.jitter = jitter;
    this.floatAmp = random(1, 3);
    this.floatSpeed = random(0.01, 0.03);
  }

  update(player) {
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    const d = sqrt(dx * dx + dy * dy);
    const avoidRadius = 100;

    if (d > 0 && d < avoidRadius) {
      const push = (avoidRadius - d) * 0.03;
      this.x += (dx / d) * push;
      this.y += (dy / d) * push;
    }
  }

  draw() {
    const t = frameCount * this.floatSpeed + this.jitter;
    const ox = sin(t) * this.floatAmp;
    const oy = cos(t * 1.3) * this.floatAmp;

    noStroke();

    // Black body
    fill(25, 25, 25, 220);
    ellipse(this.x + ox, this.y + oy, this.size, this.size);

    // Left eye
    fill(255, 255, 255, 240);
    ellipse(this.x + ox - 3.5, this.y + oy - 1, 6, 8);

    // Right eye
    ellipse(this.x + ox + 3.5, this.y + oy - 1, 6, 8);

    // Pupils
    fill(30, 30, 30);
    ellipse(this.x + ox - 2.5, this.y + oy - 1, 2, 3);
    ellipse(this.x + ox + 2.5, this.y + oy - 1, 2, 3);
  }
}
