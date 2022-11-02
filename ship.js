//create alien ship object
export class BasicShip {
  constructor(name, initialHitPoints, hitpointsLost) {
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
    }
    return this.currentHitPoints;
  }
}

export class DefenceShip extends BasicShip {
  constructor() {
    super();
    this.initialHitPoints = 80;
    this.hitpointsLost = 10;
    this.currentHitPoints = this.initialHitPoints;
    this.name = "Defence Ship";
  }
}

export class AttackShip extends BasicShip {
  constructor() {
    super();
    this.initialHitPoints = 45;
    this.hitpointsLost = 12;
    this.currentHitPoints = this.initialHitPoints;
    this.name = "Attack Ship";
  }
}
export class MotherShip extends BasicShip {
  constructor(name) {
    super();
    this.initialHitPoints = 100;
    this.hitpointsLost = 9;
    this.currentHitPoints = this.initialHitPoints;
    this.name = "Mother Ship";
  }
}
