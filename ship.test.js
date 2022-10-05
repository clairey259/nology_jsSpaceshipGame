import { BasicShip } from './ship'

describe("BasicShip", () => {
    it("is defined", () => {
        expect(new BasicShip("defence", 10)).toBeDefined()
    })
    it("can be created with correct properties", () => {
        const basicShip = new BasicShip("DefenceShip", 100)
        expect(basicShip.initialHitpoints).toBe(100)
        expect(basicShip.name).toBe("DefenceShip")
    })
    
    describe("object functions", () => { 
        const basicShip = new BasicShip("defence", 100)

        describe("#name", () => {
            it("is defined", () => {
                expect(basicShip.name).toBeDefined()
            })
        })
    })
})