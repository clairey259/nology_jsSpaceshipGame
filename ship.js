//create alien ship object
export class BasicShip {
    constructor(initialHitPoints, hitpointsLost, name) {
      this.initialHitPoints = initialHitPoints;
      this.hitpointsLost = hitpointsLost;
      this.currentHitPoints = initialHitPoints;
      this.name = name;
    }
  
    renderToHTML() {
      const text = `<p class="alienShips">${this.name} ${this.currentHitPoints}</p>`;
      return text;
    }
  
    reduceHitPoints() {
      this.currentHitPoints = this.currentHitPoints - this.hitpointsLost;
      if (this.currentHitPoints < 0) {
        this.currentHitPoints = 0;
      } return this.currentHitPoints
    }
  }
