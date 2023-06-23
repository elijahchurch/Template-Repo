import Galaxycalc from "../src/js/galactic";

describe("Galaxycalc object and its methods", () => {

    test("it should create a calculator object that contains the user current age", () => {
        newUser = new Galaxycalc(32);
        expect(newUser.earthAge).toEqual(32);
        expect(newUser.mercuryAge).toEqual(0);
        expect(newUser.venusAge).toEqual(0);
        expect(newUser.marsAge).toEqual(0);
        expect(newUser.jupiterAge).toEqual(0);
        expect(newUser.earthPassage).toEqual("");
        expect(newUser.mercuryPassage).toEqual("");
        expect(newUser.venusPassage).toEqual("");
        expect(newUser.marsPassage).toEqual("");
        expect(newUser.jupiterPassage).toEqual("");
    });

    let newUser;

    beforeEach(() => {
        newUser = new Galaxycalc(32);
        newUser.setGalacticAges();
    });

    test("method should update the user's age in Mercury years", () => {
        expect(newUser.mercuryAge).toEqual(133.33);
    });

    test("method should update the user's age in Venus years", () => {
        expect(newUser.venusAge).toEqual(51.61);
    });

    test("method should update the user's age in Mars years", () => {
        expect(newUser.marsAge).toEqual(17.02);
    });

    test("method should update the user's age in Jupiter years", () => {
        expect(newUser.jupiterAge).toEqual(2.70);
    });

    test("method should calculate the passage of earth years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.earthPassage).toEqual('10 years have passed since you were 22 on Earth.');
    });

    test("method should return correct grammer if differnce in earth age is only 1 year", () => {
        newUser.calcGalacticPassage(31);
        expect(newUser.earthPassage).toEqual('1 year has passed since you were 31 on Earth.');
    });

    test("method will round user's input up ", () => {
        newUser.calcGalacticPassage(22.343);
        expect(newUser.earthPassage).toEqual('10 years have passed since you were 22 on Earth.');
    });





})