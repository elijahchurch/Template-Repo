import Galaxycalc from "../src/js/galactic";

describe("Galaxycalc object and its methods", () => {

    test("it should create a calculator object that contains the user current age", () => {
        newUser = new Galaxycalc(32);
        expect(newUser.earthAge).toEqual(32);
        expect(newUser.mercuryAge).toEqual(0);
        expect(newUser.venusAge).toEqual(0);
        expect(newUser.marsAge).toEqual(0);
        expect(newUser.jupiterAge).toEqual(0);
        expect(newUser.earthPassage).toEqual(0);
        expect(newUser.mercuryPassage).toEqual(0);
        expect(newUser.venusPassage).toEqual(0);
        expect(newUser.marsPassage).toEqual(0);
        expect(newUser.jupiterPassage).toEqual(0);
    });

    let newUser;

    beforeEach(() => {
        newUser = new Galaxycalc(32);
        newUser.setGalacticAges();
    });

    test("it should update the user's age in Mercury years", () => {
        expect(newUser.mercuryAge).toEqual(133.33);
    });

    test("it should update the user's age in Venus years", () => {
        expect(newUser.venusAge).toEqual(51.61);
    });

    test("it should update the user's age in Mars years", () => {
        expect(newUser.marsAge).toEqual(17.02);
    })

    test("it should update the user's age in Jupiter years", () => {
        expect(newUser.jupiterAge).toEqual(2.70);
    })

})