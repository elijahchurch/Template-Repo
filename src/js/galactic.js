export default class Galaxycalc {
    constructor(age) {
        this.earthAge = age;
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marsAge = 0;
        this.jupiterAge = 0;
        this.earthPassage = 0;
        this.mercuryPassage = 0;
        this.venusPassage = 0;
        this.marsPassage = 0;
        this.jupiterPassage = 0;
    }

    setGalacticAges() {
        this.mercuryAge += parseFloat((this.earthAge / 0.24).toFixed(2));

    }
};