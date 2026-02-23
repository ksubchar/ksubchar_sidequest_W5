class SootSprites {
  constructor(x, y, size, jitter) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.jitter = jitter;
    this.floatAmp = random(1, 3);
    this.floatSpeed = random(0.01, 0.03);
  }

  update(player) {
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    const d = sqrt(dx * dx + dy * dy);
    const avoidRadius = 50;

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
    fill(25, 25, 25, 220);
    circle(this.x + ox, this.y + oy, this.size);
  }
}
