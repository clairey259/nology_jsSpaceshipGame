"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// export const testFunc = () => {
//     return "answer";
//   };
//   console.log(testFunc())
//get HTML elements
var alienShipFleet = document.getElementById("alienShipFleet");
var fireButton = document.getElementById("fireButton");
var newGameButton = document.getElementById("newGameButton"); //set visability of buttons

fireButton.className = "show";
newGameButton.className = "hide";
console.dir(fireButton); //create alient ship object

var BasicShip =
/*#__PURE__*/
function () {
  function BasicShip(initialHitPoints, hitpointsLost, name) {
    _classCallCheck(this, BasicShip);

    this.initialHitPoints = initialHitPoints;
    this.hitpointsLost = hitpointsLost;
    this.currentHitPoints = initialHitPoints;
    this.name = name;
  }

  _createClass(BasicShip, [{
    key: "hit",
    value: function hit() {
      this.currentHitPoints = this.initialHitPoints - this.hitpointsLost;
      return this.currentHitPoints;
    }
  }, {
    key: "spawn",
    value: function spawn(amount) {
      for (var i = 0; i < amount; i++) {
        var text = "<p class = \"alienShips\">".concat(this.name, " ").concat(this.currentHitPoints, "</p>");
        alienShipFleet.innerHTML += text;
      }

      return alienShipFleet.innerHTML;
    }
  }]);

  return BasicShip;
}(); //create types of alien ships


var defenceShip = new BasicShip(80, 10, "DefenseShip");
var attackShip = new BasicShip(45, 12, "AttackShip");
var motherShip = new BasicShip(100, 9, "MotherShip"); //create fleet

defenceShip.spawn(5);
attackShip.spawn(8);
motherShip.spawn(1); //destroy ships

fireButton.addEventListener("click", defenceShip.hit); //EndGame

if (motherShip.currentHitPoints == 0 || defenceShip.currentHitPoints == 0 && attackShip.currentHitPoints == 0 && motherShip.currentHitPoints == 0) {
  fireButton.className = "hide";
  newGameButton.className = "show";
}

var handleNewGame = function handleNewGame() {
  document.location.reload();
};