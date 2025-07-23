type CircuitLineDirection = 'up' | 'right' | 'left';

export class CircuitLine {
  path: Array<{ x: number, y: number }>;
  direction: CircuitLineDirection;
  length: number;
  nextTurnAt: number;
  components: Array<{ x: number, y: number, type: "resistor" | "capacitor" }>;
  dying: boolean;
  opacity: number;
  speed: number;

  constructor(x: number, y: number) {
    this.path = [{ x, y }, { x, y }];
    this.direction = 'up';
    this.length = 0;
    this.nextTurnAt = Math.random() * 200 + 100;
    this.components = [];
    this.dying = false;
    this.opacity = 0.6;
    this.speed = 1.5;
  }

  update() {
    if (this.dying) { return };

    const last = this.path[this.path.length - 1];

    switch (this.direction) {
      case 'up': last.y -= this.speed; break;
      case 'right': last.x += this.speed; break;
      case 'left': last.x -= this.speed; break;
    }

    this.length++;

    if (this.length >= this.nextTurnAt) {
      this.length = 0;
      this.nextTurnAt = Math.random() * 100 + 50;

      this.changeDirection();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    console.log(`Number of points: ${this.path.length}`);
    if (this.dying) {
      this.opacity -= 0.01;
    }
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    const [start, ...rest] = this.path;
    ctx.moveTo(start.x, start.y);
    rest.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.stroke();

    // Draw components
    this.components.forEach(comp => {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fillRect(comp.x - 3, comp.y - 3, 6, 6);
    });
  }

  changeDirection() {
    const last = this.path[this.path.length - 1];
    switch (this.direction) {
      case "right": this.direction = "up"; break;
      case "left": this.direction = "up"; break;
      case "up": this.direction = ["left", "right"][Math.floor(Math.random() * 2)] as CircuitLineDirection;
    }
    const newPoint = { x: last.x, y: last.y };
    this.path.push(newPoint);
    this.components.push({ x: last.x, y: last.y, type: 'resistor' });
  }

  testForDying(screenWidth: number, screenHeight: number) {
    const endX = this.path[this.path.length - 1].x;
    const endY = this.path[this.path.length - 1].y;

    if (endX > screenWidth || endX < 0 || endY < 0) {
      this.dying = true;
    }
  }
}
