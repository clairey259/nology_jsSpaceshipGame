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

//create alient ship object
class BasicShip {
  constructor(initialHitPoints, hitpointsLost, name) {
    this.initialHitPoints = initialHitPoints;
    this.hitpointsLost = hitpointsLost;
    this.currentHitPoints = initialHitPoints;
    this.name = name;
  } 

  render() {
    
  }

  spawn(amount) {          
    for (let i = 0; i < amount; i++) {
      const text = `<p class="alienShips">${this.name} ${this.currentHitPoints}</p>`;
      alienShipFleet.innerHTML += text;
    }
    return alienShipFleet.innerHTML;
  }

  hit() {
    this.currentHitPoints = this.initialHitPoints - this.hitpointsLost;
    const text = `<p class="alienShips">${this.name} ${this.currentHitPoints}</p>`;
    alienShipFleet.innerHTML = text;
    return this.currentHitPoints;
  }
 
}

//create types of alien ships
const defenceShip = new BasicShip(80, 10, "DefenseShip");
const attackShip = new BasicShip(45, 12, "AttackShip");
const motherShip = new BasicShip(100, 9, "MotherShip");

//create fleet
defenceShip.spawn(5);
attackShip.spawn(8);
motherShip.spawn(1);

//access all ships
const alienShips = document.getElementsByClassName("alienShips");

console.dir(alienShips[4].currentHitPoints)
console.dir(alienShips.length)
console.dir(alienShips[3])
console.dir(alienShips[5])

//destroy ships
fireButton.addEventListener("click", defenceShip.hit);

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