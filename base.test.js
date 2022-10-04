// import { testFunc } from "./base";

// it("test description", () => {
//     expect(testFunc()).toBe("answer");
// });


import { hitTest } from "./base";

it("reduces hit points by 10", () =>{
    const defenceShip = new BasicShip(80, 10, "DefenseShip");
   expect( hitTest(defenceShip)).toBe(70)
})


// const attackShip = new BasicShip(45, 12, "AttackShip");
// const motherShip = new BasicShip(100, 9, "MotherShip");