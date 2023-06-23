import Galaxycalc from "../src/js/galactic";

describe("Galaxycalc object and its methods", () => {
    let newUser;

    beforeEach(() => {
        newUser = new Galaxycalc(32);
    });

    test("it should create a calculator object that contains the user current age", () => {
        expect(this.earthAge).toEqual(32);
        expect(this.mercuryAge).toEqual(0);
        expect(this.venusAge).toEqual(0);
        expect(this.marsAge).toEqual(0);
        expect(this.jupiterAge).toEqual(0);
        expect(this.earthPassage).toEqual(0);
        expect(this.mercuryPassage).toEqual(0);
        expect(this.venusPassage).toEqual(0);
        expect(this.marsPassage).toEqual(0);
        expect(this.jupeiterPassage).toEqual(0);
    });

})