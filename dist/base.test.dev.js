"use strict";

var _base = require("./base");

// import { testFunc } from "./base";
// it("test description", () => {
//     expect(testFunc()).toBe("answer");
// });
it("reduces hit points by 10", function () {
  var defenceShip = new BasicShip(80, 10, "DefenseShip");
  expect((0, _base.hitTest)(defenceShip)).toBe(70);
});
var attackShip = new BasicShip(45, 12, "AttackShip");
var motherShip = new BasicShip(100, 9, "MotherShip");