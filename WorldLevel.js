class WorldLevel {
  constructor(json) {
    this.schemaVersion = json.schemaVersion ?? 1;

    this.w = json.world?.w ?? 2400;
    this.h = json.world?.h ?? 1600;
    this.bg = json.world?.bg ?? [235, 235, 235];
    this.gridStep = json.world?.gridStep ?? 160;

    this.obstacles = json.obstacles ?? [];

    // NEW: camera tuning knob from JSON (data-driven)
    this.camLerp = json.camera?.lerp ?? 0.12;
  }

  drawBackground() {
    background(220);
  }

  drawWorld() {
    noStroke();
    // Wooden floor base
    fill(170, 125, 70);
    rect(0, 0, this.w, this.h);

    // Wood planks
    const plankH = 60;
    stroke(140, 95, 50);
    strokeWeight(2);
    for (let y = 0; y <= this.h; y += plankH) {
      line(0, y, this.w, y);
    }

    // Subtle grain lines
    stroke(150, 105, 60, 120);
    strokeWeight(1);
    for (let i = 0; i < 120; i++) {
      const gx = (i * 37) % this.w;
      const gy = (i * 83) % this.h;
      line(gx, gy, gx + 30, gy + 4);
    }

    noStroke();
    fill(140, 95, 60);
    for (const o of this.obstacles) rect(o.x, o.y, o.w, o.h, o.r ?? 0);
  }

  /* drawHUD(player, camX, camY) {
    noStroke();
    fill(225);
    text("Example 4 — JSON world + smooth camera (lerp).", 12, 20);
    text(
      "camLerp(JSON): " +
        this.camLerp +
        "  Player: " +
        (player.x | 0) +
        "," +
        (player.y | 0) +
        "  Cam: " +
        (camX | 0) +
        "," +
        (camY | 0),
      12,
      40,
    );
  } */
}
