//import ship objects
import { DefenceShip } from "./ship.js";
import { AttackShip } from "./ship.js";
import { MotherShip } from "./ship.js";

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

//render ships to HTML
function renderArrToHTML() {
  alienShipFleet.innerHTML = "";
  shipArr.forEach((element) => {
    alienShipFleet.innerHTML += element.renderToHTML();
  });
  return alienShipFleet.innerHTML;
}

//render multiple ships
for (let i = 0; i < 5; i++) {
  shipArr.push(new DefenceShip());
}

for (let i = 0; i < 8; i++) {
  shipArr.push(new AttackShip());
}
const motherShip = new MotherShip()
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
