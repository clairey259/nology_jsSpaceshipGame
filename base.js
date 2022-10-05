// export const testFunc = () => {
//     return "answer";
//   };

//   console.log(testFunc())

//get HTML elements
const alienShipFleet = document.getElementById("alienShipFleet");
const fireButton = document.getElementById("fireButton");
const newGameButton = document.getElementById("newGameButton");

//set visability of buttons
fireButton.className = "show";
newGameButton.className = "hide";

//Global variables
let shipArr = []

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
      alienShipFleet.innerHTML += text;
      return alienShipFleet.innerHTML;
  }

  reduceHitPoints() {
    if (this.currentHitPoints > 0){}
    this.currentHitPoints = this.currentHitPoints - this.hitpointsLost;
    this.renderToHTML()
    return this.currentHitPoints;
  }

  addToShipArr() {
    shipArr.push(this)
    return shipArr
  }
}

//create types of alien ships
const defenceShip = new BasicShip(80, 10, "DefenseShip");
const attackShip = new BasicShip(45, 12, "AttackShip");
const motherShip = new BasicShip(100, 9, "MotherShip");

//render multiple ships
  for (let i = 0; i < 5; i++){
    defenceShip.addToShipArr()
    defenceShip.renderToHTML()
  }

  for (let i = 0; i < 8; i++){
    attackShip.addToShipArr()
    attackShip.renderToHTML()
  } 

  motherShip.addToShipArr
  motherShip.renderToHTML()
  

console.log(shipArr)

//random ship selector
const randomShip = Math.floor(Math.random() * shipArr.length);


//destroy ships
fireButton.addEventListener("click", () => {
  shipObject = shipArr[randomShip];
  shipObject.reduceHitPoints()
  console.log(shipArr)
  return shipArr
})

//EndGame
if (
  motherShip.currentHitPoints == 0 ||
  (defenceShip.currentHitPoints == 0 &&
    attackShip.currentHitPoints == 0 &&
    motherShip.currentHitPoints == 0)
) {
  fireButton.className = "hide";
  newGameButton.className = "show";
}

const handleNewGame = () => {
  document.location.reload();
};


function hitTest() {

}