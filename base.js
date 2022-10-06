//get HTML elements
const alienShipFleet = document.getElementById("alienShipFleet");
const fireButton = document.getElementById("fireButton");
const newGameButton = document.getElementById("newGameButton");
const message = document.getElementById("message")

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
    const text = `<p class="alienShips">${this.name} ${this.currentHitPoints}</p>`;
    return text;
  }

  reduceHitPoints() {
    this.currentHitPoints = this.currentHitPoints - this.hitpointsLost;
    if (this.currentHitPoints < 0) {
      this.currentHitPoints = 0;
    }
  }
}

function renderArrToHTML() {
  alienShipFleet.innerHTML = "";
  shipArr.forEach((element) => {
    alienShipFleet.innerHTML += element.renderToHTML();
  });
  return alienShipFleet.innerHTML;
}

//render multiple ships
for (let i = 0; i < 5; i++) {
  const defenceShip = new BasicShip(80, 10, "DefenseShip");
  shipArr.push(defenceShip);
}

for (let i = 0; i < 8; i++) {
  const attackShip = new BasicShip(45, 12, "AttackShip");
  shipArr.push(attackShip);
}

const motherShip = new BasicShip(100, 9, "MotherShip");
shipArr.push(motherShip);

renderArrToHTML();

//destroy ships
fireButton.addEventListener("click", () => {
  let shipObject = null
  while (shipObject == null || shipObject.currentHitPoints <= 0){
    const randomShipSelector = Math.floor(Math.random() * shipArr.length);
    shipObject = shipArr[randomShipSelector];
  }
  shipObject.reduceHitPoints();;
  renderArrToHTML();
  endGame();
});

//EndGame
function endGame() {
  if (motherShip.currentHitPoints == 0) {
    fireButton.className = "hide";
    newGameButton.className = "show";
    message.innerText = "GAME OVER"
  }
}

newGameButton.addEventListener("click", () => document.location.reload());
