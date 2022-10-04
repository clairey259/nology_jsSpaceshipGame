// export const testFunc = () => {
//     return "answer";
//   };

//   console.log(testFunc())

//get HTML elements
const alienShipFleet = document.getElementById("alienShipFleet");
alienShipFleet.innerText = "working"

//create alient ship object 
class BasicShip {
  constructor (initialHitPoints, hitpointsLost, name){
    this.initialHitPoints = initialHitPoints;
    this.hitpointsLost = hitpointsLost;
    this.currentHitPoints = initialHitPoints;
    this.name = name;
  }
  hit(){
    this.currentHitPoints = this.initialHitPoints - this.hitpointsLost;
    return this.currentHitPoints;
  }
  spawn(amount){
    for (let i = 0; i < amount; i++){
      alienShipFleet.innerHTML += "<p>`${this.name} ${this.currentHitPoints}`</p>";
    }
    return alienShipFleet.innerHTML
  }
} 
//create types of alien ships 
const defenceShip = new BasicShip(80, 10, "Defense Ship")
const attackShip = new BasicShip(45, 12, "Attack Ship")
const motherShip = new BasicShip(100, 9, "Mother Ship")

class Fleet {
  constructor (noOfDefenceShips, noOfAttackShips, noOfMotherShips){
    this.noOfDefenceShips = noOfDefenceShips;
    this.noOfAttackShips = noOfAttackShips;
    this.noOfMotherShips = noOfMotherShips;
  }
  spawn(shipType){
    const alienShipFleet = document.getElementById("alienShipFleet");
    alienShipFleet.innerHTML = <div></div>
  }
}
//create fleet

defenceShip.spawn(3)

