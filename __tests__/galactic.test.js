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

    test("it should create a calculator object with a rounded age", () => {
        newUser = new Galaxycalc(32.43);
        expect(newUser.earthAge).toEqual(32);
    });

    let newUser;

    beforeEach(() => {
        newUser = new Galaxycalc(32);
        newUser.setGalacticAges();
    });

    test("set-method should update the user's age in Mercury years", () => {
        expect(newUser.mercuryAge).toEqual(133.33);
    });

    test("set-method should update the user's age in Venus years", () => {
        expect(newUser.venusAge).toEqual(51.61);
    });

    test("set-method should update the user's age in Mars years", () => {
        expect(newUser.marsAge).toEqual(17.02);
    });

    test("set-method should update the user's age in Jupiter years", () => {
        expect(newUser.jupiterAge).toEqual(2.70);
    });

    test("calc-method should calculate the passage of earth years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.earthPassage).toEqual('10 years have passed since you were 22 on Earth.');
    });

    test("calc-method should return correct grammer if differnce in earth age is only 1 year", () => {
        newUser.calcGalacticPassage(31);
        expect(newUser.earthPassage).toEqual('1 year has passed since you were 31 on Earth.');
    });

    test("calc-method will round user's input up ", () => {
        newUser.calcGalacticPassage(22.343);
        expect(newUser.earthPassage).toEqual('10 years have passed since you were 22 on Earth.');
    });

    test("calc-method should calculate the passage of Mercury years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.mercuryPassage).toEqual('41.66 years have passed on Mercury since you were 22 on Earth.');
    });

    test("calc-method should calculate the passage of Venus years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.venusPassage).toEqual('16.13 years have passed on Venus since you were 22 on Earth.')
    })

    test("calc-method should calculate the passage of Mars years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.marsPassage).toEqual('5.32 years have passed on Mars since you were 22 on Earth.')
    })


})