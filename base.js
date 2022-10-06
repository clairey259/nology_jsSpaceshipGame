
//get HTML elements
const alienShipFleet = document.getElementById("alienShipFleet");
const fireButton = document.getElementById("fireButton");
const newGameButton = document.getElementById("newGameButton");

//set visability of buttons
fireButton.className = "show";
newGameButton.className = "hide";

//Global variables
let shipArr = [];

//create alient ship object
class BasicShip {
  constructor(initialHitPoints, hitpointsLost, name) {
    this.initialHitPoints = initialHitPoints;
    this.hitpointsLost = hitpointsLost;
    this.currentHitPoints = initialHitPoints;
    this.name = name;
  }

  renderToHTML() {
    alienShipFleet.innerHTML = "";
    shipArr.forEach((element) => {
      const text = `<p class="alienShips">${element.name} ${element.currentHitPoints}</p>`;
      alienShipFleet.innerHTML += text;
    });

    return alienShipFleet.innerHTML;
  }

  reduceHitPoints() {
    if (this.currentHitPoints > 0) {
    }
    this.currentHitPoints = this.currentHitPoints - this.hitpointsLost;
    this.renderToHTML();
    return this.currentHitPoints;
  }

  addToShipArr() {
    shipArr.push(this);
    return shipArr;
  }
}

//create types of alien ships
const defenceShip = new BasicShip(80, 10, "DefenseShip");
const attackShip = new BasicShip(45, 12, "AttackShip");
const motherShip = new BasicShip(100, 9, "MotherShip");

//render multiple ships
for (let i = 0; i < 5; i++) {
  defenceShip.addToShipArr();
  defenceShip.renderToHTML();
}

for (let i = 0; i < 8; i++) {
  attackShip.addToShipArr();
  attackShip.renderToHTML();
}

motherShip.addToShipArr();
motherShip.renderToHTML();

//destroy ships
fireButton.addEventListener("click", () => {
  const randomShipSelector = Math.floor(Math.random() * shipArr.length);
  console.log(randomShipSelector);
  shipObject = shipArr[randomShipSelector];
  console.log(shipObject);
  shipObject.reduceHitPoints();
  console.log("hit");
  endGame();
  return shipArr;
});

//EndGame
function endGame() {
  if (motherShip.currentHitPoints == 0) {
    fireButton.className = "hide";
    newGameButton.className = "show";
  } else if (
    defenceShip.currentHitPoints <= 0 &&
    attackShip.currentHitPoints <= 0 &&
    motherShip.currentHitPoints <= 0
  ) {
    fireButton.className = "hide";
    newGameButton.className = "show";
  }
}

newGameButton.addEventListener("click", () => document.location.reload());
