import { BasicShip } from "./ship.js";

describe("BasicShip", () => {
  it("is defined", () => {
    expect(new BasicShip(80, 10, "myShip")).toBeDefined();
  });
  it("can be created with correct properties", () => {
    const basicShip = new BasicShip(80, 10, "myShip");
    expect(basicShip.initialHitPoints).toBe(80);
    expect(basicShip.name).toBe("myShip");
  });

  describe("Basic ship methods", () => {
    it("can produce text for HTML", () => {
      const basicShip = new BasicShip(80, 10, "myShip");
      expect(basicShip.renderToHTML()).toMatch("<p class=\"alienShips\">myShip 80</p>");
    });
    it("reduces hit points", () => {
      const basicShip = new BasicShip(80, 10, "myShip");
      expect(basicShip.reduceHitPoints()).toBe(70);
    }); 
    it("doesn't reduce hit points below 0", () => {
        const basicShip = new BasicShip(3, 10, "myShip");
        expect(basicShip.reduceHitPoints()).toBe(0);
      }); 
  });
});
